const express = require("express");
const router = express.Router();
const { getStats, getAllUsers, getAllCourses, grantPremiumToUser, revokePremiumFromUser } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

// @route   GET /api/v1/admin/stats
// @access  Private/Admin
router.get("/stats", protect, adminOnly, getStats);
router.get("/users", protect, adminOnly, getAllUsers);
router.get("/courses", protect, adminOnly, getAllCourses);

// Admin-only: grant/revoke premium without payment
router.post("/users/:userId/grant-premium", protect, adminOnly, grantPremiumToUser);
router.post("/users/:userId/revoke-premium", protect, adminOnly, revokePremiumFromUser);
  
module.exports = router;