const Course = require("../models/Course")
const Lesson = require("../models/Lesson")
const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middleware/async")

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  const courses = await Course.find().populate({
    path: "lessons",
    select: "title description duration order",
  })

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  })
})

// @desc    Get single course
// @route   GET /api/v1/courses/:slug
// @access  Public
exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findOne({ slug: req.params.slug }).populate({
    path: "lessons",
    select: "title description content videoUrl duration order resources quiz",
    options: { sort: { order: 1 } },
  })

  if (!course) {
    return next(new ErrorResponse(`Course not found with slug of ${req.params.slug}`, 404))
  }

  res.status(200).json({
    success: true,
    data: course,
  })
})

// @desc    Get lessons by course language
// @route   GET /api/v1/courses/language/:language
// @access  Public
exports.getLessonsByLanguage = asyncHandler(async (req, res, next) => {
  const courses = await Course.find({ language: req.params.language }).populate({
    path: "lessons",
    select: "title description content videoUrl duration order resources quiz",
    options: { sort: { order: 1 } },
  })

  if (!courses || courses.length === 0) {
    return next(new ErrorResponse(`No courses found with language ${req.params.language}`, 404))
  }

  // Combine all lessons from all courses with the same language
  const allLessons = courses.reduce((acc, course) => {
    return acc.concat(course.lessons)
  }, [])

  res.status(200).json({
    success: true,
    count: allLessons.length,
    data: allLessons,
  })
})

// @desc    Get courses by level
// @route   GET /api/v1/courses/level/:level
// @access  Public
exports.getCoursesByLevel = asyncHandler(async (req, res, next) => {
  const courses = await Course.find({ level: req.params.level }).populate({
    path: "lessons",
    select: "title description duration order",
  })

  if (!courses || courses.length === 0) {
    return next(new ErrorResponse(`No courses found with level ${req.params.level}`, 404))
  }

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  })
}) 