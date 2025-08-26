const User = require("../models/User");
const Course = require("../models/Course");
const Subscription = require("../models/Subscription");
const mongoose = require("mongoose");

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

// @desc    Grant premium to a user without payment (admin only)
// @route   POST /api/v1/admin/users/:userId/grant-premium
exports.grantPremiumToUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ success: false, message: "Invalid user id" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    // Set role to premium
    user.role = "premium";
    await user.save({ validateBeforeSave: false });

    // Ensure an active subscription exists to satisfy premiumMiddleware
    let sub = await Subscription.findOne({ user: user._id, status: { $in: ["active", "trialing"] } });
    if (!sub) {
      const now = new Date();
      const oneYearLater = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
      sub = await Subscription.create({
        user: user._id,
        plan: "lifetime",
        status: "active",
        currentPeriodStart: now,
        currentPeriodEnd: oneYearLater,
        // Mock Paystack codes to satisfy non-null constraints
        paystackCustomerCode: `ADMIN_${user._id}`,
        paystackSubscriptionCode: `ADMIN_SUB_${user._id}`,
        paystackPlanCode: "ADMIN_LIFETIME"
      });
    } else {
      // Refresh end date to keep it active
      const oneYearLater = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
      sub.status = "active";
      sub.currentPeriodEnd = oneYearLater;
      await sub.save();
    }

    return res.json({ success: true, message: "Premium granted", data: { userId: user._id, role: user.role } });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || "Failed to grant premium" });
  }
};

// @desc    Revoke premium from a user (admin only)
// @route   POST /api/v1/admin/users/:userId/revoke-premium
exports.revokePremiumFromUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ success: false, message: "Invalid user id" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    // Downgrade role
    user.role = "user";
    await user.save({ validateBeforeSave: false });

    // Optionally mark active subscriptions as canceled
    await Subscription.updateMany({ user: user._id, status: { $in: ["active", "trialing"] } }, { $set: { status: "canceled" } });

    return res.json({ success: true, message: "Premium revoked", data: { userId: user._id, role: user.role } });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message || "Failed to revoke premium" });
  }
};
