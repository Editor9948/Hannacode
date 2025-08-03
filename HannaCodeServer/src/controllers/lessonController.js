const mongoose = require("mongoose")
const path = require("path")
const Lesson = require("../models/Lesson")
const Course = require("../models/Course")
const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")

// @desc    Get all lessons
// @route   GET /api/v1/lessons
// @route   GET /api/v1/courses/:courseId/lessons
// @access  Public
exports.getLessons = asyncHandler(async (req, res, next) => {
  let query = {};
  if (req.params.courseId) {
    query.course = req.params.courseId;
  }
  const lessons = await Lesson.find(query).populate({
    path: "course",
    select: "title category level", // Add fields you want
  });
  res.status(200).json({
    success: true,
    count: lessons.length,
    data: lessons,
  });
});
// @desc    Get single lesson
// @route   GET /api/v1/lessons/:id
// @access  Public
exports.getLesson = asyncHandler(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id).populate({
    path: "course",
    select: "name description",
  })

  if (!lesson) {
    return next(new ErrorResponse(`Lesson not found with id of ${req.params.id}`, 404))
  }

  res.status(200).json({
    success: true,
    data: lesson,
  })
})

// @desc    Create new lesson
// @route   POST /api/v1/courses/:courseId/lessons
// @access  Private
exports.createLesson = asyncHandler(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.courseId)) {
    return next(new ErrorResponse(`Invalid course ID`, 400));
  }

  req.body.course = req.params.courseId

  const course = await Course.findById(req.params.courseId)

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.courseId}`, 404))
  }

  const lesson = await Lesson.create(req.body)

  res.status(201).json({
    success: true,
    data: lesson,
  })
})

// @desc    Update lesson
// @route   PUT /api/v1/lessons/:id
// @access  Private
exports.updateLesson = asyncHandler(async (req, res, next) => {
  let lesson = await Lesson.findById(req.params.id)

  if (!lesson) {
    return next(new ErrorResponse(`Lesson not found with id of ${req.params.id}`, 404))
  }

  lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: lesson,
  })
})

// @desc    Delete lesson
// @route   DELETE /api/v1/lessons/:id
// @access  Private
exports.deleteLesson = asyncHandler(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id)

  if (!lesson) {
    return next(new ErrorResponse(`Lesson not found with id of ${req.params.id}`, 404))
  }

  await Lesson.findByIdAndDelete(req.params.id)

  res.status(200).json({
    success: true,
    data: {},
  })
})

// @desc    Upload lesson video
// @route   PUT /api/lessons/:id/video
// @access  Private/Admin
exports.uploadLessonVideo = asyncHandler(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id)

  if (!lesson) {
    return next(new ErrorResponse(`Lesson not found with id of ${req.params.id}`, 404))
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400))
  }

  const file = req.files.file

  // Make sure the file is a video
  if (!file.mimetype.startsWith("video")) {
    return next(new ErrorResponse(`Please upload a video file`, 400))
  }

  // Check filesize
  if (file.size > process.env.MAX_VIDEO_UPLOAD) {
    return next(new ErrorResponse(`Please upload a video less than ${process.env.MAX_VIDEO_UPLOAD}`, 400))
  }

  // Create custom filename
  file.name = `lesson_${lesson._id}${path.parse(file.name).ext}`

  file.mv(`${process.env.FILE_UPLOAD_PATH}/videos/${file.name}`, async (err) => {
    if (err) {
      console.error(err)
      return next(new ErrorResponse(`Problem with file upload`, 500))
    }

    await Lesson.findByIdAndUpdate(req.params.id, { videoUrl: file.name })

    res.status(200).json({
      success: true,
      data: file.name,
    })
  })
})
