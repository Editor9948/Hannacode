const asyncHandler = require("./async")
const ErrorResponse = require("../utils/errorResponse")

// User roles
const USER_ROLES = {
  USER: "user",
  PREMIUM: "premium",
  ADMIN: "admin",
  MENTOR: "mentor",
}

/**
 * Middleware to restrict access to premium content
 */
exports.premiumOnly = asyncHandler(async (req, res, next) => {
  // Allow admin access to all content
  if (req.user.role === USER_ROLES.ADMIN || req.user.role === USER_ROLES.MENTOR) {
    return next()
  }

  // Check if user has premium role
  if (req.user.role !== USER_ROLES.PREMIUM) {
    return next(new ErrorResponse("Premium subscription required to access this content", 403))
  }

  next()
})

/**
 * Middleware to restrict access to admin only routes
 */
exports.adminOnly = asyncHandler(async (req, res, next) => {
  if (req.user.role !== USER_ROLES.ADMIN) {
    return next(new ErrorResponse("Admin access required for this resource", 403))
  }

  next()
})

/**
 * Middleware to check course ownership or admin status
 */
exports.checkCourseOwnership = asyncHandler(async (req, res, next) => {
  const course = await req.app.models.Course.findById(req.params.id)

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  }

  // Allow admin access to all courses
  if (req.user.role === USER_ROLES.ADMIN) {
    return next()
  }

  // Check if user is the course creator
  if (course.createdBy.toString() !== req.user.id) {
    return next(new ErrorResponse("Not authorized to update this course", 403))
  }

  next()
})

/**
 * Middleware to check lesson ownership or admin status
 */
exports.checkLessonOwnership = asyncHandler(async (req, res, next) => {
  const lesson = await req.app.models.Lesson.findById(req.params.id).populate("course")

  if (!lesson) {
    return next(new ErrorResponse(`Lesson not found with id of ${req.params.id}`, 404))
  }

  // Allow admin access to all lessons
  if (req.user.role === USER_ROLES.ADMIN) {
    return next()
  }

  // Check if user is the course creator
  if (lesson.course.createdBy.toString() !== req.user.id) {
    return next(new ErrorResponse("Not authorized to update this lesson", 403))
  }

  next()
})
