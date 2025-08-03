const User = require("../models/User");
const Course = require("../models/Course");

// @desc    Get admin dashboard stats
// @route   GET /api/v1/admin/stats
// @access  Private/Admin
exports.getStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    const activeMentors = await User.countDocuments({ role: "mentor" });
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5).select("name email createdAt");

    res.json({
      success: true,
      data: {
        totalUsers,
        totalCourses,
        activeMentors,
        recentUsers,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch stats" });
  }
};

// @desc    Get all users
// @route   GET /api/v1/admin/users
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("name email role");
  res.json({ success: true, data: users });
};

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find().select("title description createdAt");
  res.json({ success: true, data: courses });
};
