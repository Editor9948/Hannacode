const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  createApplication,
  listApplications,
  getApplication,
  decideApplication,
  deleteApplication,
  uploadResume,
} = require("../controllers/applicationController");

const { protect} = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");



// Public: submit application
router.post("/", createApplication);

// Public: upload resume (multipart/form-data, field "file")
router.post("/upload", uploadResume);

// Admin: list applications
router.get("/", protect, adminOnly, listApplications);

// Admin: get single application
router.get("/:id", protect, adminOnly, getApplication);

// Admin: accept/reject application
// Preflight for PATCH
router.options("/:id/decision", (req, res) => {
  res.setHeader("Access-Control-Allow-Methods", "PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, X-Requested-With");
  res.status(204).end();
});
router.patch("/:id/decision", protect, adminOnly, decideApplication);

// Admin: delete application
router.delete("/:id", protect, adminOnly, deleteApplication);

module.exports = router;