const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  initializePayment,
  verifyPayment,
  getPaymentHistory
} = require("../controllers/paymentController");

// @route   POST /api/v1/payments/initialize
// @desc    Initialize payment with Paystack
// @access  Private
router.post("/initialize", protect, initializePayment);

// @route   GET /api/v1/payments/verify/:reference
// @desc    Verify payment after Paystack callback
// @access  Private
router.get("/verify/:reference", protect, verifyPayment);

// @route   GET /api/v1/payments/history
// @desc    Get user's payment history
// @access  Private
router.get("/history", protect, getPaymentHistory);

module.exports = router;
