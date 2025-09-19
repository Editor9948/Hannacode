const mongoose = require("mongoose");
const Application = require("../models/Application");
const logger = require("../utils/logger");
const fs = require("fs");
const path = require("path");

// Try to load emailService; fall back to safe no-op implementations to avoid crashes
let emailService = {
  sendApplicationAdminNotification: async () => {},
  sendApplicationAcknowledgement: async () => {},
  sendApplicationDecision: async () => {},
};
try {
  // Prefer the real service if it loads successfully
  const real = require("../services/emailService");
  emailService = {
    ...emailService,
    ...real,
  };
} catch (err) {
  logger?.warn?.(
    `[applicationController] emailService failed to load, using no-op mailers: ${err?.message}`
  );
}

// Small async wrapper to pass errors to Express error handler
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Helpers
const isObjectId = (id) => mongoose.Types.ObjectId.isValid(id);
const sanitize = (v) => String(v ?? "").trim();
const isEmail = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v ?? "").toLowerCase());

/**
 * POST /api/applications
 * Public: Create a new team application
 */
exports.createApplication = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    role,
    message,
    portfolioUrl,
    resumeUrl,
    extra, // optional object with additional fields
  } = req.body || {};

  // Basic validation
  const payload = {
    name: sanitize(name),
    email: sanitize(email),
    phone: sanitize(phone),
    role: sanitize(role),
    message: sanitize(message),
    portfolioUrl: sanitize(portfolioUrl),
    resumeUrl: sanitize(resumeUrl),
  };

  if (!payload.name) {
    return res.status(400).json({ success: false, message: "Name is required" });
  }
  if (!payload.email || !isEmail(payload.email)) {
    return res.status(400).json({ success: false, message: "Valid email is required" });
  }
  if (!payload.role) {
    return res.status(400).json({ success: false, message: "Role is required" });
  }

  const clientMeta = {
    ip: req.ip,
    userAgent: req.get("user-agent"),
    referer: req.get("referer"),
  };

  // Construct document (unknown fields will be ignored if schema is strict)
  const doc = new Application({
    ...payload,
    status: "pending",
    extra: typeof extra === "object" && extra ? extra : undefined,
    clientMeta,
    createdBy: req.user?.id || req.user?._id || null,
  });

  await doc.save();

  // Fire-and-forget emails; do not block response
  Promise.allSettled([
    emailService
      .sendApplicationAcknowledgement?.({
        name: doc.name,
        email: doc.email,
        role: doc.role,
        applicationId: String(doc._id),
        createdAt: doc.createdAt,
      })
      .catch((e) => logger?.warn?.(`Ack email failed: ${e?.message}`)),
    emailService
      .sendApplicationAdminNotification?.({
        id: String(doc._id),
        name: doc.name,
        email: doc.email,
        role: doc.role,
        phone: doc.phone,
        message: doc.message,
        portfolioUrl: doc.portfolioUrl,
        resumeUrl: doc.resumeUrl,
        createdAt: doc.createdAt,
      })
      .catch((e) => logger?.warn?.(`Admin notify email failed: ${e?.message}`)),
  ]).catch(() => {});

  return res.status(201).json({
    success: true,
    data: toDto(doc),
    message: "Application submitted successfully",
  });
});

/**
 * POST /api/v1/applications/upload
 * Public: Upload a resume file and get a URL back
 * Accepts: multipart/form-data with field name "file"
 */
exports.uploadResume = asyncHandler(async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  const file = req.files.file;

  const allowed = new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ]);
  if (!allowed.has(file.mimetype)) {
    return res.status(400).json({ success: false, message: "Only PDF or Word documents are allowed" });
  }

  // Max ~10MB safety; also enforced by express-fileupload limits
  const MAX = 10 * 1024 * 1024;
  if (file.size > MAX) {
    return res.status(400).json({ success: false, message: "File is too large (max 10MB)" });
  }

  // Ensure target dir exists under public/uploads/resumes
  const uploadsDir = path.join(__dirname, "../public/uploads/resumes");
  fs.mkdirSync(uploadsDir, { recursive: true });

  const safeBase = String(file.name).replace(/[^a-zA-Z0-9_.-]+/g, "-");
  const stamp = Date.now();
  const fileName = `resume-${stamp}-${Math.random().toString(36).slice(2, 8)}-${safeBase}`;
  const dest = path.join(uploadsDir, fileName);

  await file.mv(dest);

  const publicPath = `/uploads/resumes/${fileName}`;
  const absoluteUrl = `${req.protocol}://${req.get("host")}${publicPath}`;
  return res.status(201).json({ success: true, url: absoluteUrl, path: publicPath });
});

/**
 * GET /api/applications
 * Admin: List applications with filters and pagination
 * Query: page, limit, status, search, from, to, sort, order
 */
exports.listApplications = asyncHandler(async (req, res) => {
  const page = Math.max(parseInt(req.query.page || "1", 10), 1);
  const limit = Math.min(Math.max(parseInt(req.query.limit || "20", 10), 1), 100);
  const skip = (page - 1) * limit;

  const { status, search, from, to } = req.query;
  const sortField = ["createdAt", "updatedAt", "name", "email", "status"].includes(
    String(req.query.sort || "createdAt")
  )
    ? req.query.sort
    : "createdAt";
  const sortOrder = String(req.query.order || "desc").toLowerCase() === "asc" ? 1 : -1;
  const sort = { [sortField]: sortOrder };

  const filter = {};
  if (status && ["pending", "accepted", "rejected"].includes(String(status))) {
    filter.status = status;
  }
  if (search) {
    const s = String(search).trim();
    filter.$or = [
      { name: { $regex: s, $options: "i" } },
      { email: { $regex: s, $options: "i" } },
      { role: { $regex: s, $options: "i" } },
      { message: { $regex: s, $options: "i" } },
    ];
  }
  if (from || to) {
    filter.createdAt = {};
    if (from) filter.createdAt.$gte = new Date(from);
    if (to) filter.createdAt.$lte = new Date(to);
  }

  const [items, total] = await Promise.all([
    Application.find(filter).sort(sort).skip(skip).limit(limit).lean().exec(),
    Application.countDocuments(filter),
  ]);

  return res.json({
    success: true,
    data: items.map(toDto),
    meta: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      sort: { field: sortField, order: sortOrder === 1 ? "asc" : "desc" },
      filterApplied: !!(status || search || from || to),
    },
  });
});

/**
 * GET /api/applications/:id
 * Admin: Get one application
 */
exports.getApplication = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) {
    return res.status(400).json({ success: false, message: "Invalid application id" });
  }
  const doc = await Application.findById(id).lean();
  if (!doc) {
    return res.status(404).json({ success: false, message: "Application not found" });
  }
  return res.json({ success: true, data: toDto(doc) });
});

/**
 * PATCH /api/applications/:id/decision
 * Admin: Accept or reject an application
 * Body: { status: "accepted"|"rejected", reason?: string }
 */
exports.decideApplication = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const newStatus = String(req.body?.status || "").toLowerCase();
  const reason = sanitize(req.body?.reason);

  if (!isObjectId(id)) {
    return res.status(400).json({ success: false, message: "Invalid application id" });
  }
  if (!["accepted", "rejected"].includes(newStatus)) {
    return res
      .status(400)
      .json({ success: false, message: "status must be 'accepted' or 'rejected'" });
  }

  const doc = await Application.findById(id);
  if (!doc) {
    return res.status(404).json({ success: false, message: "Application not found" });
  }
  if (doc.status === newStatus) {
    return res.status(409).json({
      success: false,
      message: `Application already ${newStatus}`,
      data: toDto(doc),
    });
  }

  doc.status = newStatus;
  doc.decision = {
    by: req.user?.id || req.user?._id || null,
    name: req.user?.name || undefined,
    at: new Date(),
    reason: reason || undefined,
  };

  await doc.save();

  // Send decision email (safe, non-blocking)
  Promise.resolve()
    .then(() =>
      emailService.sendApplicationDecision?.(
        {
          name: doc.name,
          email: doc.email,
          role: doc.role,
        },
        newStatus,
        reason
      )
    )
    .catch((e) => logger?.warn?.(`Decision email failed: ${e?.message}`));

  return res.json({
    success: true,
    message: `Application ${newStatus}`,
    data: toDto(doc),
  });
});

/**
 * DELETE /api/applications/:id
 * Admin: Delete an application
 */
exports.deleteApplication = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) {
    return res.status(400).json({ success: false, message: "Invalid application id" });
  }
  const doc = await Application.findByIdAndDelete(id);
  if (!doc) {
    return res.status(404).json({ success: false, message: "Application not found" });
  }
  return res.json({ success: true, message: "Application deleted" });
});

// Map DB document to response DTO
function toDto(doc) {
  const d = doc.toObject ? doc.toObject() : doc;
  return {
    id: String(d._id),
    name: d.name,
    email: d.email,
    phone: d.phone,
    role: d.role,
    message: d.message,
    portfolioUrl: d.portfolioUrl,
    resumeUrl: d.resumeUrl,
    status: d.status,
    createdAt: d.createdAt,
    updatedAt: d.updatedAt,
    decision: d.decision
      ? {
        by: d.decision.by ? String(d.decision.by) : null,
        name: d.decision.name || null,
        at: d.decision.at || null,
        reason: d.decision.reason || null,
      }
      : null,
  };
}