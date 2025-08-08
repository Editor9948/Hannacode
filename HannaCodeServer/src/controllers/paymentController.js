const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Subscription = require("../models/Subscription");
const paystack = require("../services/paystackService");
const { sendEmail } = require("../services/emailService");

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
        await sendEmail({
          to: email,
          subject: "🔒 Payment Processing - HannaCode",
          text: `We've initiated your payment for the ${plan} plan. Please complete the payment to activate your subscription.`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #008000;">🔒 Payment Processing</h2>
              <p>Hi ${user.name || 'there'},</p>
              <p>We've initiated your payment for the <strong>${plan}</strong> plan (₦${(amount / 100).toLocaleString()}).</p>
              <p>Please complete the payment process to activate your subscription.</p>
              <p style="color: #6b7280; font-size: 14px;">If you didn't initiate this payment, please contact our support team immediately.</p>
            </div>
          `
        });
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
        
        await sendEmail({
          to: user.email, // Use 'to' instead of 'email'
          subject: `🎉 Subscription Confirmation - ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
          text: `Thank you for subscribing to HannaCode! Your ${plan} subscription is now active.`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #008000;">🎉 Welcome to HannaCode Premium!</h2>
              <p>Dear ${user.name || 'Student'},</p>
              <p>Thank you for subscribing to HannaCode! Your <strong>${plan}</strong> subscription is now active.</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Your Subscription Details:</h3>
                <ul>
                  <li><strong>Plan:</strong> ${plan.charAt(0).toUpperCase() + plan.slice(1)}</li>
                  <li><strong>Amount Paid:</strong> ₦${(verification.data.amount / 100).toLocaleString()}</li>
                  <li><strong>Start Date:</strong> ${currentPeriodStart.toDateString()}</li>
                  <li><strong>Valid Until:</strong> ${currentPeriodEnd.toDateString()}</li>
                  <li><strong>Payment Reference:</strong> ${reference}</li>
                </ul>
              </div>
              
              <h3>What's Next?</h3>
              <p>You now have access to:</p>
              <ul>
                <li>✅ All premium courses and content</li>
                <li>✅ 1-on-1 mentorship sessions</li>
                <li>✅ Code reviews by experts</li>
                <li>✅ Project-based learning resources</li>
                <li>✅ Certification upon completion</li>
              </ul>
              
              <p style="margin-top: 30px;">
                <a href="${process.env.CLIENT_URL}/dashboard" style="background-color: #008000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  Start Learning Now
                </a>
              </p>
              
              <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                If you have any questions, feel free to contact our support team.
              </p>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px;">
                This email was sent automatically. Please do not reply to this email.
              </p>
            </div>
          `
        });
        
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
