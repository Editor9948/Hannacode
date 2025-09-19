const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const urlRegex = /^(https?:\/\/)([\w-]+\.)+[\w-]+(:\d+)?(\/[^\s]*)?$/i;
const allowedSort = ["createdAt", "updatedAt", "name", "email", "status"];
const allowedStatus = ["pending", "accepted", "rejected"];

const clean = (v) => String(v ?? "").trim();
const isEmail = (v) => emailRegex.test(String(v ?? "").toLowerCase());
const isUrl = (v) => urlRegex.test(String(v ?? ""));

function sendValidationError(res, errors) {
  return res.status(400).json({
    success: false,
    message: "Validation error",
    errors,
  });
}

// POST /api/applications body validator
function validateCreateApplication(req, res, next) {
  const errors = [];

  const payload = {
    name: clean(req.body?.name),
    email: clean(req.body?.email),
    phone: clean(req.body?.phone),
    role: clean(req.body?.role),
    message: clean(req.body?.message),
    portfolioUrl: clean(req.body?.portfolioUrl),
    resumeUrl: clean(req.body?.resumeUrl),
    extra: req.body?.extra,
  };

  if (!payload.name) errors.push({ field: "name", message: "Name is required" });
  if (!payload.email || !isEmail(payload.email))
    errors.push({ field: "email", message: "Valid email is required" });
  if (!payload.role) errors.push({ field: "role", message: "Role is required" });

  if (payload.name && (payload.name.length < 2 || payload.name.length > 100))
    errors.push({ field: "name", message: "Name must be 2-100 chars" });
  if (payload.role && (payload.role.length < 2 || payload.role.length > 80))
    errors.push({ field: "role", message: "Role must be 2-80 chars" });
  if (payload.message && payload.message.length > 5000)
    errors.push({ field: "message", message: "Message must be <= 5000 chars" });
  if (payload.phone && payload.phone.length > 32)
    errors.push({ field: "phone", message: "Phone must be <= 32 chars" });

  if (payload.portfolioUrl && !isUrl(payload.portfolioUrl))
    errors.push({ field: "portfolioUrl", message: "portfolioUrl must be a valid URL (http/https)" });
  if (payload.resumeUrl && !isUrl(payload.resumeUrl))
    errors.push({ field: "resumeUrl", message: "resumeUrl must be a valid URL (http/https)" });

  if (payload.extra != null && typeof payload.extra !== "object")
    errors.push({ field: "extra", message: "extra must be an object" });

  if (errors.length) return sendValidationError(res, errors);

  // normalize body back
  req.body = payload;
  next();
}

// GET /api/applications query validator
function validateListApplicationsQuery(req, res, next) {
  const errors = [];
  const q = req.query || {};

  const page = Number.parseInt(q.page ?? "1", 10);
  const limit = Number.parseInt(q.limit ?? "20", 10);
  const status = q.status ? String(q.status).toLowerCase() : undefined;
  const search = q.search ? String(q.search).trim() : undefined;
  const sort = q.sort ? String(q.sort) : "createdAt";
  const order = (q.order ? String(q.order) : "desc").toLowerCase();
  const from = q.from ? new Date(String(q.from)) : undefined;
  const to = q.to ? new Date(String(q.to)) : undefined;

  if (!Number.isFinite(page) || page < 1) errors.push({ field: "page", message: "page must be a positive integer" });
  if (!Number.isFinite(limit) || limit < 1 || limit > 100)
    errors.push({ field: "limit", message: "limit must be between 1 and 100" });

  if (status && !allowedStatus.includes(status))
    errors.push({ field: "status", message: "status must be pending, accepted, or rejected" });

  if (q.from && Number.isNaN(from?.getTime()))
    errors.push({ field: "from", message: "from must be a valid date" });
  if (q.to && Number.isNaN(to?.getTime()))
    errors.push({ field: "to", message: "to must be a valid date" });

  if (q.sort && !allowedSort.includes(sort))
    errors.push({ field: "sort", message: `sort must be one of: ${allowedSort.join(", ")}` });

  if (q.order && !["asc", "desc"].includes(order))
    errors.push({ field: "order", message: "order must be 'asc' or 'desc'" });

  if (errors.length) return sendValidationError(res, errors);

  req.query = {
    page: String(Math.max(1, page)),
    limit: String(Math.min(100, Math.max(1, limit))),
    status,
    search,
    sort,
    order,
    from: from ? from.toISOString() : undefined,
    to: to ? to.toISOString() : undefined,
  };
  next();
}

// PATCH /api/applications/:id/decision body validator
function validateDecisionBody(req, res, next) {
  const errors = [];
  const status = String(req.body?.status || "").toLowerCase().trim();
  const reason = clean(req.body?.reason);

  if (!["accepted", "rejected"].includes(status)) {
    errors.push({ field: "status", message: "status must be 'accepted' or 'rejected'" });
  }

  if (reason && reason.length > 1000) {
    errors.push({ field: "reason", message: "reason must be <= 1000 chars" });
  }

  if (errors.length) return sendValidationError(res, errors);

  req.body = { status, reason };
  next();
}

module.exports = {
  validateCreateApplication,
  validateListApplicationsQuery,
  validateDecisionBody,
};