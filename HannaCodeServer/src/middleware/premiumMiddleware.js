const asyncHandler = require("./async")
const ErrorResponse = require("../utils/errorResponse")
const Subscription = require("../models/Subscription")

/**
 * Middleware to check if user has an active premium subscription
 * Used for premium-only features like progress tracking, certificates, etc.
 */
exports.premiumRequired = asyncHandler(async (req, res, next) => {
  // Allow admin and mentor access to all features
  if (req.user.role === "admin" || req.user.role === "mentor") {
    return next()
  }

  // Check if user has premium role
  if (req.user.role === "premium") {
    // Double-check with active subscription for premium users
    const activeSubscription = await Subscription.findOne({
      user: req.user.id,
      status: { $in: ["active", "trialing"] },
      currentPeriodEnd: { $gte: new Date() }
    })

    if (activeSubscription) {
      return next()
    }
    
    // If no active subscription found, downgrade user role
    req.user.role = "user"
    await req.user.save({ validateBeforeSave: false })
  }

  // Return error for non-premium users
  return next(new ErrorResponse(
    "Premium subscription required. Upgrade to premium to access course progress tracking, completion certificates, and advanced learning features.", 
    403
  ))
})

/**
 * Middleware specifically for certificate-related features
 */
exports.certificatesRequired = asyncHandler(async (req, res, next) => {
  // Allow admin and mentor access
  if (req.user.role === "admin" || req.user.role === "mentor") {
    return next()
  }

  // Check if user has premium role
  if (req.user.role === "premium") {
    // Double-check with active subscription
    const activeSubscription = await Subscription.findOne({
      user: req.user.id,
      status: { $in: ["active", "trialing"] },
      currentPeriodEnd: { $gte: new Date() }
    })

    if (activeSubscription) {
      return next()
    }
    
    // If no active subscription found, downgrade user role
    req.user.role = "user"
    await req.user.save({ validateBeforeSave: false })
  }

  // Return specific error for certificate features
  return next(new ErrorResponse(
    "Premium subscription required to access course completion certificates. Upgrade to premium to earn and download certificates for completed courses.", 
    403
  ))
})

/**
 * Middleware for master certificate features (highest tier)
 */
exports.masterCertificateRequired = asyncHandler(async (req, res, next) => {
  // Allow admin and mentor access
  if (req.user.role === "admin" || req.user.role === "mentor") {
    return next()
  }

  // Check if user has premium role
  if (req.user.role === "premium") {
    // Double-check with active subscription
    const activeSubscription = await Subscription.findOne({
      user: req.user.id,
      status: { $in: ["active", "trialing"] },
      currentPeriodEnd: { $gte: new Date() }
    })

    if (activeSubscription) {
      return next()
    }
    
    // If no active subscription found, downgrade user role
    req.user.role = "user"
    await req.user.save({ validateBeforeSave: false })
  }

  // Return specific error for master certificate features
  return next(new ErrorResponse(
    "Premium subscription required to access master certificates. Complete all courses with a premium subscription to earn your master certificate.", 
    403
  ))
})

/**
 * Soft check - allows access but marks features as premium
 * Used for progress display where we want to show what's available
 */
exports.premiumFeatureCheck = asyncHandler(async (req, res, next) => {
  let isPremium = false
  
  // Admin and mentor always have access
  if (req.user.role === "admin" || req.user.role === "mentor") {
    isPremium = true
  } 
  // Check premium status
  else if (req.user.role === "premium") {
    const activeSubscription = await Subscription.findOne({
      user: req.user.id,
      status: { $in: ["active", "trialing"] },
      currentPeriodEnd: { $gte: new Date() }
    })
    
    if (activeSubscription) {
      isPremium = true
    } else {
      // Downgrade user role if no active subscription
      req.user.role = "user"
      await req.user.save({ validateBeforeSave: false })
    }
  }

  // Add premium status to request object
  req.isPremium = isPremium
  next()
})
