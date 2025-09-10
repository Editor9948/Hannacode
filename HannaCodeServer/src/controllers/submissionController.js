const Submission = require("../models/submission");
const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const emailService = require("../services/emailService");

let logger;
try {
  logger = require("../utils/logger");
} catch {
  logger = console;
}

// --- helpers ---
function clampScore(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, Math.round(n)));
}
function sanitizeFeedback(s) {
  if (typeof s !== "string") return "";
  return s.slice(0, 4000);
}
function pickLang(v) {
  try {
    const s = String(v || "javascript").toLowerCase();
    return s.slice(0, 32);
  } catch {
    return "javascript";
  }
}
function codeToString(code) {
  if (typeof code === "string") return code;
  try {
    return JSON.stringify(code);
  } catch {
    return "";
  }
}

// Try to ensure a submission has userEmail/userName; backfill from Users if missing
async function ensureUserInfoOnSubmission(subDoc) {
  try {
    if (subDoc.userEmail && String(subDoc.userEmail).trim()) return subDoc;
    const userId = subDoc.userId;
    if (!userId) return subDoc;

    const u = await User.findById(userId).select("email name").lean();
    if (u?.email) {
      subDoc.userEmail = u.email;
      if (!subDoc.userName && u.name) subDoc.userName = u.name;
      await Submission.updateOne(
        { _id: subDoc._id || subDoc.id },
        { userEmail: subDoc.userEmail, userName: subDoc.userName || null }
      );
    }
  } catch (e) {
    try {
      logger.error?.("ensureUserInfoOnSubmission failed", e);
    } catch {}
  }
  return subDoc;
}

// --- controllers ---

// POST /api/v1/challenges/:id/submit  (user)
const submitChallenge = asyncHandler(async (req, res, next) => {
  const { id: challengeId } = req.params;
  const { language = "javascript", code = "" } = req.body || {};

  if (!challengeId) return next(new ErrorResponse("Missing challenge id", 400));

  const codeStr = codeToString(code);
  if (!codeStr?.trim()) return next(new ErrorResponse("Code is required", 400));

  const cleanedCode = codeStr.slice(0, 20000);
  const lang = pickLang(language);

  // Capture user info from token; fallback to DB lookup for email/name
  const userId = String(req.user?.id || req.user?._id || "");
  let userEmail = req.user?.email || null;
  let userName = req.user?.name || null;
  if (!userEmail && userId) {
    const u = await User.findById(userId).select("email name").lean();
    if (u) {
      userEmail = u.email || null;
      userName = userName || u.name || null;
    }
  }

  // Naive evaluation; replace with real judge if needed
  const passed = cleanedCode.trim().length > 0;
  const score = passed ? 100 : 0;
  const details = passed ? "Submission received." : "No code provided.";

  const sub = await Submission.create({
    userId,
    userEmail,
    userName,
    challengeId: String(challengeId),
    language: lang,
    code: cleanedCode,
    passed,
    score,
    details,
    reviewed: false,
    feedback: null,
    reviewedBy: null,
    reviewedAt: null,
  });

  res.status(201).json({
    submissionId: sub.id,
    passed: sub.passed,
    score: sub.score,
    details: sub.details,
  });
});

// GET /api/v1/submissions/mine  (user)
const getMySubmissions = asyncHandler(async (req, res) => {
  const page = Math.max(parseInt(req.query.page || "1", 10), 1);
  const limit = Math.min(Math.max(parseInt(req.query.limit || "50", 10), 1), 200);
  const q = { userId: String(req.user?.id || req.user?._id || "") };

  const [items, total] = await Promise.all([
    Submission.find(q).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
    Submission.countDocuments(q),
  ]);

  res.json({ items, page, limit, total });
});

// GET /api/v1/submissions  (admin)
const listSubmissions = asyncHandler(async (req, res) => {
  const page = Math.max(parseInt(req.query.page || "1", 10), 1);
  const limit = Math.min(Math.max(parseInt(req.query.limit || "100", 10), 1), 500);

  const q = {};
  if (req.query.challengeId) q.challengeId = String(req.query.challengeId);
  if (req.query.userId) q.userId = String(req.query.userId);
  if (typeof req.query.reviewed !== "undefined") q.reviewed = String(req.query.reviewed).toLowerCase() === "true";
  if (typeof req.query.passed !== "undefined") q.passed = String(req.query.passed).toLowerCase() === "true";
  if (req.query.date) {
    const from = new Date(`${req.query.date}T00:00:00.000Z`);
    const to = new Date(`${req.query.date}T23:59:59.999Z`);
    if (!Number.isNaN(from.getTime()) && !Number.isNaN(to.getTime())) q.createdAt = { $gte: from, $lte: to };
  }

  const [items, total] = await Promise.all([
    Submission.find(q).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
    Submission.countDocuments(q),
  ]);

  res.json({ items, page, limit, total });
});

// PATCH or POST /api/v1/submissions/:id/review  (admin)
const reviewSubmission = asyncHandler(async (req, res, next) => {
  const id = String(req.params.id || "");
  if (!id) return next(new ErrorResponse("Missing submission id", 400));

  const body = req.body || {};
  const update = {
    reviewed: true,
    reviewedBy: String(req.user?.id || req.user?._id || "admin"),
    reviewedAt: new Date(),
  };
  if (typeof body.feedback === "string") update.feedback = sanitizeFeedback(body.feedback);
  if (typeof body.passed === "boolean") update.passed = body.passed;
  if (typeof body.score === "number") update.score = clampScore(body.score);

  let doc = await Submission.findByIdAndUpdate(id, update, { new: true });
  if (!doc) return next(new ErrorResponse("Submission not found", 404));

  // Ensure recipient email exists; backfill if needed
  doc = await ensureUserInfoOnSubmission(doc);

  // Best-effort email
  let emailSent = false;
  try {
    const toEmail = doc.userEmail;
    const fb = update.feedback ?? doc.feedback;
    const hasFeedback = fb && String(fb).trim().length > 0;

    if (toEmail && hasFeedback) {
      const user = { name: doc.userName || doc.userId, email: toEmail };
      const reviewer = { name: req.user?.name || update.reviewedBy };
      if (typeof emailService.sendSubmissionFeedback === "function") {
        await emailService.sendSubmissionFeedback(
          user,
          {
            challengeId: doc.challengeId,
            score: doc.score,
            passed: doc.passed,
            feedback: fb,
            reviewedAt: doc.reviewedAt,
            reviewedBy: doc.reviewedBy,
            _id: doc._id?.toString?.() || doc.id,
          },
          reviewer
        );
        emailSent = true;
      } else if (typeof emailService.sendEmail === "function") {
        await emailService.sendEmail({
          email: toEmail,
          subject: `Challenge Review • ${doc.challengeId}`,
          message:
            `Your submission was reviewed.\n\n` +
            `Challenge: ${doc.challengeId}\n` +
            `Score: ${doc.score}\n` +
            `Passed: ${doc.passed ? "Yes" : "No"}\n\n` +
            `Feedback:\n${fb}\n`,
        });
        emailSent = true;
      }
    }
  } catch (e) {
    try {
      logger.error?.("sendSubmissionFeedback failed", e);
    } catch {}
  }

  const out = doc.toObject ? doc.toObject() : doc;
  out.emailSent = emailSent;
  if (!doc.userEmail) out.emailWarning = "No recipient email on the submission/user.";
  res.json(out);
});

// POST /api/v1/submissions/:id/resend-feedback  (admin)
const resendFeedback = asyncHandler(async (req, res, next) => {
  const id = String(req.params.id || "");
  if (!id) return next(new ErrorResponse("Missing submission id", 400));

  let doc = await Submission.findById(id);
  if (!doc) return next(new ErrorResponse("Submission not found", 404));
  if (!doc.reviewed || !(doc.feedback && String(doc.feedback).trim()))
    return next(new ErrorResponse("No feedback to send", 400));

  doc = await ensureUserInfoOnSubmission(doc);
  if (!doc.userEmail) return next(new ErrorResponse("No recipient email", 400));

  try {
    const user = { name: doc.userName || doc.userId, email: doc.userEmail };
    const reviewer = { name: req.user?.name || doc.reviewedBy || "Admin" };
    if (typeof emailService.sendSubmissionFeedback === "function") {
      await emailService.sendSubmissionFeedback(
        user,
        {
          challengeId: doc.challengeId,
          score: doc.score,
          passed: doc.passed,
          feedback: doc.feedback,
          reviewedAt: doc.reviewedAt,
          reviewedBy: doc.reviewedBy,
          _id: doc._id?.toString?.() || doc.id,
        },
        reviewer
      );
    } else if (typeof emailService.sendEmail === "function") {
      await emailService.sendEmail({
        email: doc.userEmail,
        subject: `Challenge Review • ${doc.challengeId}`,
        message:
          `Your submission was reviewed.\n\n` +
          `Challenge: ${doc.challengeId}\n` +
          `Score: ${doc.score}\n` +
          `Passed: ${doc.passed ? "Yes" : "No"}\n\n` +
          `Feedback:\n${doc.feedback}\n`,
      });
    }
  } catch (e) {
    try {
      logger.error?.("resendSubmissionFeedback failed", e);
    } catch {}
    // don't fail the request only because email failed
  }

  res.json({ ok: true });
});

module.exports = {
  submitChallenge,
  getMySubmissions,
  listSubmissions,
  reviewSubmission,
    resendFeedback,
};