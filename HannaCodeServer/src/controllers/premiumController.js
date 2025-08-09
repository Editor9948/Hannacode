const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")
const Subscription = require("../models/Subscription")
const User = require("../models/User")

// @desc    Check user's premium status and subscription details
// @route   GET /api/premium/status
// @access  Private
exports.getPremiumStatus = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  
  // Check if user has premium access
  let hasAccess = false
  let subscription = null
  let subscriptionStatus = 'none'
  
  if (user.role === 'admin' || user.role === 'mentor') {
    hasAccess = true
    subscriptionStatus = 'admin'
  } else if (user.role === 'premium') {
    // Check for active subscription
    subscription = await Subscription.findOne({
      user: req.user.id,
      status: { $in: ['active', 'trialing'] },
      currentPeriodEnd: { $gte: new Date() }
    }).sort({ createdAt: -1 })
    
    if (subscription) {
      hasAccess = true
      subscriptionStatus = subscription.status
    } else {
      // Downgrade user if no active subscription found
      user.role = 'user'
      await user.save({ validateBeforeSave: false })
      subscriptionStatus = 'expired'
    }
  }

  // Get features available to user
  const features = {
    progressTracking: {
      available: hasAccess,
      description: "Track your learning progress across all courses",
      restriction: hasAccess ? null : "Premium subscription required"
    },
    courseCompletion: {
      available: hasAccess,
      description: "Mark courses as completed and track achievements",
      restriction: hasAccess ? null : "Premium subscription required"
    },
    certificates: {
      available: hasAccess,
      description: "Earn and download completion certificates",
      restriction: hasAccess ? null : "Premium subscription required"
    },
    masterCertificate: {
      available: hasAccess,
      description: "Earn master certificate by completing all courses",
      restriction: hasAccess ? null : "Premium subscription required"
    }
  }

  // Prepare subscription details for premium users
  let subscriptionDetails = null
  if (subscription) {
    subscriptionDetails = {
      plan: subscription.plan,
      status: subscription.status,
      currentPeriodStart: subscription.currentPeriodStart,
      currentPeriodEnd: subscription.currentPeriodEnd,
      cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
      daysRemaining: subscription.currentPeriodEnd 
        ? Math.ceil((new Date(subscription.currentPeriodEnd) - new Date()) / (1000 * 60 * 60 * 24))
        : null
    }
  }

  res.status(200).json({
    success: true,
    data: {
      isPremium: hasAccess,
      userRole: user.role,
      subscriptionStatus,
      features,
      subscription: subscriptionDetails,
      upgradeUrl: hasAccess ? null : "/pricing",
      upgradeMessage: hasAccess ? null : "Upgrade to Premium to unlock all learning features!"
    }
  })
})

// @desc    Get premium feature requirements
// @route   GET /api/premium/features
// @access  Public
exports.getPremiumFeatures = asyncHandler(async (req, res, next) => {
  const features = [
    {
      name: "Progress Tracking",
      description: "Track your learning progress across all courses with detailed analytics",
      benefits: [
        "See completion percentages for each course",
        "Track time spent learning",
        "View learning streaks and milestones",
        "Get personalized recommendations"
      ],
      icon: "📊"
    },
    {
      name: "Course Completion",
      description: "Mark courses as completed and track your learning achievements",
      benefits: [
        "Mark courses as completed",
        "Track completion dates",
        "See your learning history",
        "Get completion badges"
      ],
      icon: "✅"
    },
    {
      name: "Professional Certificates",
      description: "Earn verifiable completion certificates for finished courses",
      benefits: [
        "Download professional PDF certificates",
        "Share certificates on LinkedIn",
        "Verify certificates with unique codes",
        "Build your professional portfolio"
      ],
      icon: "🏆"
    },
    {
      name: "Master Certificate",
      description: "Earn a prestigious master certificate by completing all courses",
      benefits: [
        "Recognition as HannaCode certified developer",
        "Showcase comprehensive skill mastery",
        "Stand out to employers",
        "Join our elite alumni network"
      ],
      icon: "🎖️"
    },
    {
      name: "Advanced Analytics",
      description: "Get detailed insights into your learning patterns and progress",
      benefits: [
        "Learning time analytics",
        "Progress visualization",
        "Performance metrics",
        "Learning recommendations"
      ],
      icon: "📈"
    }
  ]

  const plans = [
    {
      name: "Monthly Premium",
      price: "₦30,000/month",
      features: "All premium features included",
      popular: true
    },
    {
      name: "Annual Premium", 
      price: "₦288,000/year",
      features: "All premium features + 20% savings",
      savings: "Save ₦72,000"
    },
    {
      name: "Lifetime Access",
      price: "₦499,999 once",
      features: "All premium features forever",
      bestValue: true
    }
  ]

  res.status(200).json({
    success: true,
    data: {
      features,
      plans,
      upgradeUrl: "/pricing"
    }
  })
})
