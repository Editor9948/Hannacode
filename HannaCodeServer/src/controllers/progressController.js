const Progress = require("../models/Progress")
const Course = require("../models/Course")
const Lesson = require("../models/Lesson")
const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")

// @desc    Get user's overall progress
// @route   GET /api/progress
// @access  Private
exports.getUserProgress = asyncHandler(async (req, res, next) => {
  const progressDocs = await Progress.find({ userId: req.user.id })
    .populate("courseId", "title slug thumbnail description coverImage")
    .populate("currentLesson", "title")

    // Group courses
  const inProgress = [];
  const completed = [];

  for (const doc of progressDocs) {
    if (!doc.courseId) continue; 

    const percent = doc.percentComplete || 0;
    const courseObj = {
      _id: doc.courseId._id,
      title: doc.courseId.title,
      description: doc.courseId.description,
      image: doc.courseId.coverImage || doc.courseId.thumbnail,
      progress: percent,
      lastLesson: doc.currentLesson ? doc.currentLesson.title : null,
      path: `/courses/${doc.courseId.slug || doc.courseId._id}`,
      completedDate: doc.completedAt || null,
    };

    if (percent >= 100) {
      completed.push(courseObj);
    } else {
      inProgress.push(courseObj);
    }
  }

  res.status(200).json({
    success: true,
    data: {inProgress,
      completed,
    },
  })
})

// @desc    Get user's progress for a specific course
// @route   GET /api/progress/:courseId
// @access  Private
exports.getCourseProgress = asyncHandler(async (req, res, next) => {
  // Check if course exists
  const course = await Course.findById(req.params.courseId)
  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.courseId}`, 404))
  }

  // Find or create progress
  let progress = await Progress.findOne({
    userId: req.user.id,
    courseId: req.params.courseId,
  }).populate("completedLessons.lessonId", "title order")

  if (!progress) {
    // Create new progress record
    progress = await Progress.create({
      userId: req.user.id,
      courseId: req.params.courseId,
      percentComplete: 0,
    })
  }

  // Get all lessons for the course
  const lessons = await Lesson.find({ course: req.params.courseId }).sort("order")

  // Combine progress with lesson details
  const progressDetails = {
    ...progress.toObject(),
    totalLessons: lessons.length,
    lessons: lessons.map((lesson) => {
      const completedLesson = progress.completedLessons.find((cl) => cl.lessonId.toString() === lesson._id.toString())

      return {
        _id: lesson._id,
        title: lesson.title,
        order: lesson.order,
        isCompleted: !!completedLesson,
        completedAt: completedLesson ? completedLesson.completedAt : null,
        quizScore: completedLesson ? completedLesson.quizScore : null,
        challengeCompleted: completedLesson ? completedLesson.challengeCompleted : false,
      }
    }),
  }

  res.status(200).json({
    success: true,
    data: progressDetails,
  })
})

exports.startCourseProgress = asyncHandler(async (req, res, next) => {
  const { courseId } = req.params;
  let progress = await Progress.findOne({ user: req.user.id, course: courseId });
  if (!progress) {
    progress = await Progress.create({
      user: req.user.id,
      course:courseId,
      completedLessons: [],
      percentComplete: 0,
    });
  }
  res.status(200).json({ success: true, data: progress });
});

// @desc    Update lesson progress
// @route   POST /api/progress/:courseId/lessons/:lessonId
// @access  Private
exports.updateLessonProgress = asyncHandler(async (req, res, next) => {
  const { completed, timeSpent, quizScore, challengeCompleted } = req.body

  // Check if course exists
  const course = await Course.findById(req.params.courseId)
  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.courseId}`, 404))
  }

  // Check if lesson exists and belongs to the course
  const lesson = await Lesson.findOne({
    _id: req.params.lessonId,
    course: req.params.courseId,
  })

  if (!lesson) {
    return next(new ErrorResponse(`Lesson not found with id of ${req.params.lessonId} for this course`, 404))
  }

  // Find or create progress
  let progress = await Progress.findOne({
    userId: req.user.id,
    courseId: req.params.courseId,
  })

  if (!progress) {
    progress = await Progress.create({
      userId: req.user.id,
      courseId: req.params.courseId,
      completedLessons: [],
      percentComplete: 0,
    })
  }

  // Update last accessed
  progress.lastAccessedAt = Date.now()
  progress.currentLesson = lesson._id

  // Update completed lessons if completed is true
  if (completed) {
    // Check if lesson is already in completedLessons
    const lessonIndex = progress.completedLessons.findIndex(
      (cl) => cl.lessonId.toString() === lesson._id.toString()
    )

    if (lessonIndex === -1) {
      // Add to completed lessons
      progress.completedLessons.push({
        lessonId: lesson._id,
        completedAt: Date.now(),
        timeSpent: timeSpent || 0,
        quizScore: quizScore || null,
        challengeCompleted: challengeCompleted || false,
      })
    } else {
      // Update existing completed lesson
      progress.completedLessons[lessonIndex].timeSpent =
        (progress.completedLessons[lessonIndex].timeSpent || 0) + (timeSpent || 0)

      if (quizScore !== undefined) {
        progress.completedLessons[lessonIndex].quizScore = quizScore
      }

      if (challengeCompleted !== undefined) {
        progress.completedLessons[lessonIndex].challengeCompleted = challengeCompleted
      }
    }
  }

  // --- Calculate percentComplete and set completedAt if finished ---
  const totalLessons = await Lesson.countDocuments({ course: req.params.courseId })
  const completedCount = progress.completedLessons.length
  progress.percentComplete = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  if (progress.percentComplete === 100 && !progress.completedAt) {
    progress.completedAt = Date.now()
    // Optionally, set certificateIssued or other flags here
  }

  await progress.save()

  res.status(200).json({
    success: true,
    data: progress,
  })
})

// @desc    Reset course progress
// @route   POST /api/progress/:courseId/reset
// @access  Private
exports.resetCourseProgress = asyncHandler(async (req, res, next) => {
  // Check if course exists
  const course = await Course.findById(req.params.courseId)
  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.courseId}`, 404))
  }

  // Find progress
  const progress = await Progress.findOne({
    userId: req.user.id,
    courseId: req.params.courseId,
  })

  if (!progress) {
    return next(new ErrorResponse(`Progress not found`, 404))
  }

  // Reset progress
  progress.completedLessons = []
  progress.percentComplete = 0
  progress.lastAccessedAt = Date.now()
  progress.certificateIssued = false
  progress.certificateUrl = undefined
  progress.certificateIssuedAt = undefined

  await progress.save()

  res.status(200).json({
    success: true,
    data: progress,
    message: "Progress reset successfully",
  })
})

// @desc    Get course completion certificate
// @route   GET /api/progress/:courseId/certificate
// @access  Private
exports.getCertificate = asyncHandler(async (req, res, next) => {
  // Find progress
  const progress = await Progress.findOne({
    userId: req.user.id,
    courseId: req.params.courseId,
  })

  if (!progress) {
    return next(new ErrorResponse(`Progress not found`, 404))
  }

  // Check if course is completed
  if (!progress.certificateIssued) {
    return next(new ErrorResponse(`Certificate not available. Course completion: ${progress.percentComplete}%`, 400))
  }

  // Get course details
  const course = await Course.findById(req.params.courseId)

  // Return certificate details
  res.status(200).json({
    success: true,
    data: {
      certificateUrl: progress.certificateUrl,
      certificateIssuedAt: progress.certificateIssuedAt,
      courseName: course.title,
      userName: req.user.name,
      completionDate: progress.certificateIssuedAt,
    },
  })
})
