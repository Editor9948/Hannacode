const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  submitChallenge,
  getMySubmissions,
  listSubmissions,
  reviewSubmission,
   resendFeedback,
} = require("../controllers/submissionController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

// Allow mentors or admins (uses req.user set by protect)

// Submit solution (auth)
router.post("/challenges/:id/submit", protect, submitChallenge);

// My submissions (auth)
router.get("/submissions/mine", protect, getMySubmissions);

// Mentor/Admin: list and review
router.get("/submissions", protect,  adminOnly, listSubmissions);
router.patch("/submissions/:id/review", protect,  adminOnly, reviewSubmission);
router.post("/submissions/:id/review", protect, adminOnly, reviewSubmission); // POST alias
router.post("/submissions/:id/resend-feedback", protect, adminOnly, resendFeedback);


module.exports = router;