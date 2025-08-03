const express = require("express");
const router = express.Router();
const { getStats, getAllUsers, getAllCourses } = require("../controllers/adminController");

// @route   GET /api/v1/admin/stats
// @access  Private/Admin
router.get("/stats", getStats);
router.get("/users", getAllUsers);
router.get("/courses", getAllCourses);
  
module.exports = router;