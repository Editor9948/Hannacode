const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Subscription = require("../models/Subscription");
const paystack = require("../services/paystackService");
const { sendEmail, sendSubscriptionConfirmationEmail, sendPaymentInitiationEmail } = require("../services/emailService");

// @desc    Initialize payment
// @route   POST /api/v1/payments/initialize
// @access  Private
exports.initializePayment = asyncHandler(async (req, res, next) => {
  console.log("Payment initialization started");
  console.log("Request body:", req.body);
  console.log("User ID:", req.user?.id, "User Role:", req.user?.role);
  
  const { plan, email } = req.body;

  // Validate plan
  const validPlans = ["monthly", "annual", "lifetime"];
  if (!validPlans.includes(plan)) {
    return next(new ErrorResponse("Invalid plan selected", 400));
  }

  // Get amount based on plan (in kobo for Paystack)
  let amount;
  switch (plan) {
    case "monthly":
      amount = 3000000; // ₦30,000 in kobo
      break;
    case "annual":
      amount = 28800000; // ₦288,000 in kobo (₦30,000 * 12 * 0.8 - 20% discount)
      break;
    case "lifetime":
      amount = 49999900; // ₦499,999 in kobo
      break;
    default:
      return next(new ErrorResponse("Invalid plan selected", 400));
  }

  try {
    console.log("Sending amount to Paystack:", amount);
    
    // Initialize transaction
    const paymentData = await paystack.transaction.initialize({
      email,
      amount: amount, // Amount already in kobo, don't multiply by 100 again
      callback_url: `${process.env.CLIENT_URL}/payment/verify`,
      metadata: {
        userId: req.user.id,
        plan,
      },
    });

    console.log("Paystack response:", paymentData);

    // Send payment initiation email to user (optional)
    try {
      const user = await User.findById(req.user.id);
      if (user) {
        // Use the new branded payment initiation email function
        await sendPaymentInitiationEmail(user, plan, amount);
        console.log("Payment initiation email sent to:", email);
      }
    } catch (emailError) {
      console.log("Payment initiation email failed (non-critical):", emailError.message);
    }

    res.status(200).json({
      success: true,
      data: {
        ...paymentData.data, // Include all Paystack data
        amount: amount, // Explicitly include the amount
      },
    });
  } catch (error) {
    return next(new ErrorResponse("Payment initialization failed", 500));
  }
});

// @desc    Verify payment
// @route   GET /api/v1/payments/verify/:reference
// @access  Private
exports.verifyPayment = asyncHandler(async (req, res, next) => {
  const { reference } = req.params;

  try {
    console.log("Verifying payment with reference:", reference);
    
    // Verify the transaction
    const verification = await paystack.transaction.verify(reference);
    
    console.log("Paystack verification response:", JSON.stringify(verification, null, 2));
    console.log("verification.success:", verification.success);
    console.log("verification.data:", verification.data);
    console.log("verification.data.status:", verification.data?.status);

    if (verification && verification.status && verification.data && verification.data.status === "success") {
      const { userId, plan } = verification.data.metadata;

      console.log("Payment verified successfully. UserId:", userId, "Plan:", plan);

      // Get user
      const user = await User.findById(userId);
      if (!user) {
        console.log("User not found with ID:", userId);
        return next(new ErrorResponse("User not found", 404));
      }

      // Create or update subscription
      const currentPeriodStart = new Date();
      let currentPeriodEnd = null;

      if (plan === "monthly") {
        currentPeriodEnd = new Date();
        currentPeriodEnd.setMonth(currentPeriodEnd.getMonth() + 1);
      } else if (plan === "annual") {
        currentPeriodEnd = new Date();
        currentPeriodEnd.setFullYear(currentPeriodEnd.getFullYear() + 1);
      } else if (plan === "lifetime") {
        currentPeriodEnd = new Date(2099, 11, 31); // Far future date
      }

      // Create simple subscription record for payment verification
      const subscriptionData = {
        user: user._id,
        plan,
        status: "active",
        currentPeriodStart,
        currentPeriodEnd,
        // Required Paystack fields with fallback values
        paystackCustomerCode: verification.data.customer?.customer_code || `customer_${userId}_${Date.now()}`,
        paystackSubscriptionCode: reference,
        paystackPlanCode: `plan_${plan}_${Date.now()}`,
      };

      const subscription = await Subscription.create(subscriptionData);

      console.log("Subscription created:", subscription);

      // Update user role to premium
      user.role = "premium";
      await user.save({ validateBeforeSave: false });

      console.log("User role updated to premium");

      // Send confirmation email immediately
      try {
        console.log("Sending confirmation email to:", user.email);
        
        // Use the new branded subscription confirmation email
        await sendSubscriptionConfirmationEmail(user, subscription);
        
        console.log("✅ Confirmation email sent successfully to:", user.email);
      } catch (err) {
        console.error("❌ Email sending failed:", err.message);
        // Don't fail the entire transaction if email fails
      }

      res.status(200).json({
        success: true,
        data: subscription,
      });
    } else {
      console.log("❌ Payment verification failed!");
      console.log("Expected: verification.status=true, verification.data.status='success'");
      console.log("Got verification.status:", verification?.status);
      console.log("Got verification.data.status:", verification?.data?.status);
      console.log("Full verification object keys:", Object.keys(verification || {}));
      console.log("Full verification response:", JSON.stringify(verification, null, 2));
      return next(new ErrorResponse("Payment verification failed", 400));
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    return next(new ErrorResponse(`Payment verification failed: ${error.message}`, 500));
  }
});

// @desc    Get payment history
// @route   GET /api/v1/payments/history
// @access  Private
exports.getPaymentHistory = asyncHandler(async (req, res, next) => {
  const subscriptions = await Subscription.find({ user: req.user.id })
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    data: subscriptions,
  });
});
