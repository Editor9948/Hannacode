const Progress = require("../models/Progress")
const Course = require("../models/Course")
const Lesson = require("../models/Lesson")
const Certificate = require("../models/Certificate")
const MasterCertificate = require("../models/MasterCertificate")
const Subscription = require("../models/Subscription")
const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")

// Helper function to check if user has premium access
const checkPremiumAccess = async (userId) => {
  const user = await require("../models/User").findById(userId)
  
  if (user.role === "admin" || user.role === "mentor") {
    return true
  }
  
  if (user.role === "premium") {
    const activeSubscription = await Subscription.findOne({
      user: userId,
      status: { $in: ["active", "trialing"] },
      currentPeriodEnd: { $gte: new Date() }
    })
    return !!activeSubscription
  }
  
  return false
}

// Helper function to get premium feature info for non-premium users
const getPremiumFeatureInfo = () => {
  return {
    isPremium: false,
    features: {
      progressTracking: {
        available: false,
        description: "Track your learning progress across all courses",
        benefit: "See completion percentages, time spent, and learning streaks"
      },
      certificates: {
        available: false,
        description: "Earn completion certificates for finished courses",
        benefit: "Download professional certificates to showcase your skills"
      },
      masterCertificate: {
        available: false,
        description: "Earn a master certificate by completing all courses",
        benefit: "Get recognized as a HannaCode certified developer"
      }
    },
    upgradeMessage: "Upgrade to Premium to unlock progress tracking, certificates, and advanced learning features!",
    upgradeUrl: "/pricing"
  }
}

// Helper function to generate certificate
const generateCertificate = async (user, courseId, progress) => {
  try {
    console.log(`[generateCertificate] Generating certificate for user: ${user.name}, course: ${courseId}`)
    
    // Check if certificate already exists
    const existingCertificate = await Certificate.findOne({
      user: user.id,
      course: courseId,
    })

    if (existingCertificate) {
      console.log("Certificate already exists for this user and course")
      return existingCertificate
    }

    // Get course details
    const course = await Course.findById(courseId)
    if (!course) {
      console.log("Course not found")
      return null
    }

    console.log(`[generateCertificate] Course found: ${course.title}`)

    // Calculate quiz scores and grade
    const quizScores = progress.completedLessons
      .filter(lesson => lesson.quizScore !== null)
      .map(lesson => lesson.quizScore)

    const averageScore = quizScores.length > 0 
      ? quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length 
      : 85

    // Determine grade based on average score
    let grade = "Pass"
    if (averageScore >= 95) grade = "A+"
    else if (averageScore >= 90) grade = "A"
    else if (averageScore >= 85) grade = "A-"
    else if (averageScore >= 80) grade = "B+"
    else if (averageScore >= 75) grade = "B"
    else if (averageScore >= 70) grade = "B-"
    else if (averageScore >= 65) grade = "C+"

    // Calculate completion time
    const completionTime = progress.completedAt && progress.createdAt 
      ? Math.ceil((new Date(progress.completedAt) - new Date(progress.createdAt)) / (1000 * 60 * 60 * 24))
      : 30

    // Generate certificate ID and verification code
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const random = Math.random().toString(36).substring(2, 7).toUpperCase()
    const certificateId = `HC-${year}-${month}${day}-${random}`
    const verificationCode = Math.random().toString(36).substring(2, 14).toUpperCase()

    console.log(`[generateCertificate] Generated certificateId: ${certificateId}`)
    console.log(`[generateCertificate] Generated verificationCode: ${verificationCode}`)

    // Create certificate
    const certificate = await Certificate.create({
      user: user.id,
      course: courseId,
      progress: progress._id,
      certificateId,
      verificationCode,
      grade,
      completionScore: Math.round(averageScore),
      metadata: {
        courseDuration: `${course.weeks || 4} weeks`,
        completionTime,
        totalLessons: progress.completedLessons.length,
        averageQuizScore: Math.round(averageScore),
      }
    })

    // Update progress with certificate info
    progress.certificate = {
      isIssued: true,
      issuedAt: certificate.issuedAt,
      certificateId: certificate.certificateId,
      certificateUrl: certificate.publicUrl || `${process.env.CLIENT_URL}/certificate/${certificate.certificateId}`,
      verificationCode: certificate.verificationCode,
    }
    await progress.save()

    console.log(`Certificate generated: ${certificate.certificateId} for user ${user.name}`)
    return certificate

  } catch (error) {
    console.error("Error generating certificate:", error)
    return null
  }
}

// Helper function to check and generate master certificate
const checkAndGenerateMasterCertificate = async (user) => {
  try {
    // Check if master certificate already exists
    const existingMaster = await MasterCertificate.findOne({ user: user.id })
    if (existingMaster) {
      console.log("Master certificate already exists for user")
      return existingMaster
    }

    // Get all published courses
    const allCourses = await Course.find({ isPublished: true })
    console.log(`Total published courses: ${allCourses.length}`)

    // Get user's completed courses (100% progress)
    const completedProgress = await Progress.find({ 
      user: user.id, 
      percentageCompleted: 100 
    }).populate('course')

    console.log(`User completed courses: ${completedProgress.length}`)

    // Check if user completed all published courses
    if (completedProgress.length < allCourses.length) {
      console.log("User hasn't completed all courses yet")
      return null
    }

    // Get all user's certificates
    const userCertificates = await Certificate.find({ user: user.id }).populate('course')

    // Prepare completed courses data for master certificate
    const completedCoursesData = userCertificates.map(cert => ({
      course: cert.course._id,
      certificateId: cert.certificateId,
      completedAt: cert.issuedAt,
      grade: cert.grade
    }))

    // Calculate study duration
    const firstCertificate = userCertificates.sort((a, b) => new Date(a.issuedAt) - new Date(b.issuedAt))[0]
    const lastCertificate = userCertificates.sort((a, b) => new Date(b.issuedAt) - new Date(a.issuedAt))[0]
    const studyDurationDays = Math.ceil((new Date(lastCertificate.issuedAt) - new Date(firstCertificate.issuedAt)) / (1000 * 60 * 60 * 24))

    // Calculate average score
    const totalScore = userCertificates.reduce((sum, cert) => sum + (cert.completionScore || 85), 0)
    const averageScore = totalScore / userCertificates.length

    // Create master certificate
    const masterCertificate = await MasterCertificate.create({
      user: user.id,
      completedCourses: completedCoursesData,
      totalCoursesCompleted: completedProgress.length,
      averageScore: Math.round(averageScore),
      studyDuration: {
        totalDays: studyDurationDays,
        intensiveStudy: studyDurationDays < 90,
        partTimeStudy: studyDurationDays >= 90
      },
      skills: [
        "HTML5", "CSS3", "JavaScript ES6+", "React.js", "Node.js", 
        "Database Management", "Python", "C++", "PHP", "Full Stack Development"
      ],
      achievements: [
        {
          title: "Course Completion Champion",
          description: "Completed all available courses in the program",
          earnedAt: new Date()
        },
        {
          title: studyDurationDays < 90 ? "Speed Learner" : "Dedicated Student",
          description: studyDurationDays < 90 ? "Completed program in under 3 months" : "Showed consistent dedication throughout the program",
          earnedAt: new Date()
        }
      ],
      metadata: {
        totalLessons: completedProgress.reduce((sum, prog) => sum + (prog.completedLessons?.length || 0), 0),
        totalQuizzes: completedProgress.length * 5, // Estimate
        totalProjects: completedProgress.length * 2, // Estimate
        averageQuizScore: averageScore,
        certificateGeneration: {
          generatedAt: new Date(),
          version: "1.0",
          template: "master-certificate-v1"
        }
      }
    })

    // Calculate overall grade
    masterCertificate.overallGrade = masterCertificate.calculateOverallGrade()
    await masterCertificate.save()

    console.log(`Master certificate generated: ${masterCertificate.certificateId} for user ${user.name}`)
    return masterCertificate

  } catch (error) {
    console.error("Error generating master certificate:", error)
    return null
  }
}

// @desc    Get user's overall progress
// @route   GET /api/progress
// @access  Private
exports.getUserProgress = asyncHandler(async (req, res, next) => {
  console.log(`[getUserProgress] Fetching progress for user: ${req.user.id}`)
  
  const progressData = await Progress.find({ user: req.user.id })
    .populate("course", "title description category level coverImage slug")
    .populate("lastAccessedLesson", "title")
    .populate("completedLessons.lesson", "title")
    .sort({ createdAt: -1 })

  console.log(`[getUserProgress] Found ${progressData.length} progress records`)
  
  // Log each progress record for debugging
  progressData.forEach(progress => {
    console.log(`- Course: ${progress.course?.title}, Progress: ${progress.percentageCompleted}%, Completed: ${!!progress.completedAt}`)
  })

  // Transform data to match frontend expectations
  const formatCourseData = async (progressRecord) => {
    const course = progressRecord.course
    
    // Get the last lesson name
    let lastLessonName = "N/A"
    
    // Try to get from lastAccessedLesson first
    if (progressRecord.lastAccessedLesson && progressRecord.lastAccessedLesson.title) {
      lastLessonName = progressRecord.lastAccessedLesson.title
    } 
    // Otherwise get the most recent completed lesson
    else if (progressRecord.completedLessons && progressRecord.completedLessons.length > 0) {
      const lastCompletedLesson = progressRecord.completedLessons[progressRecord.completedLessons.length - 1]
      if (lastCompletedLesson.lesson && lastCompletedLesson.lesson.title) {
        lastLessonName = lastCompletedLesson.lesson.title
      }
    }
    
    // Get certificate information if course is completed
    let certificateInfo = null
    if (progressRecord.percentageCompleted === 100) {
      const certificate = await Certificate.findOne({
        user: progressRecord.user,
        course: course._id
      })
      
      if (certificate) {
        certificateInfo = {
          certificateId: certificate.certificateId,
          issuedAt: certificate.issuedAt,
          grade: certificate.grade,
          verificationCode: certificate.verificationCode
        }
      }
    }
    
    return {
      _id: course._id,
      id: course._id,
      title: course.title,
      description: course.description,
      category: course.category,
      level: course.level,
      image: course.coverImage, // Map coverImage to image
      progress: progressRecord.percentageCompleted, // Map percentageCompleted to progress
      lastLesson: lastLessonName,
      completedAt: progressRecord.completedAt,
      completedDate: progressRecord.completedAt ? new Date(progressRecord.completedAt).toLocaleDateString() : null,
      path: `/courses/${course.slug || course._id}`,
      certificate: certificateInfo, // Include certificate info for completed courses
      // Include original progress data for debugging
      originalProgress: progressRecord.percentageCompleted,
      isCompleted: progressRecord.percentageCompleted === 100
    }
  }

  // Separate in-progress and completed courses with formatted data
  const inProgressPromises = progressData
    .filter(p => p.percentageCompleted < 100)
    .map(formatCourseData)
    
  const completedPromises = progressData
    .filter(p => p.percentageCompleted === 100)
    .map(formatCourseData)

  // Wait for all formatting to complete
  const inProgress = await Promise.all(inProgressPromises)
  const completed = await Promise.all(completedPromises)

  console.log(`[getUserProgress] In Progress: ${inProgress.length}, Completed: ${completed.length}`)
  console.log(`[getUserProgress] Sample in-progress course:`, inProgress[0] ? {
    title: inProgress[0].title,
    progress: inProgress[0].progress,
    image: inProgress[0].image
  } : "None")
  console.log(`[getUserProgress] Sample completed course:`, completed[0] ? {
    title: completed[0].title,
    progress: completed[0].progress,
    image: completed[0].image
  } : "None")

  res.status(200).json({
    success: true,
    data: {
      inProgress,
      completed,
      totalCourses: progressData.length,
      completedCount: completed.length
    }
  })
})

// @desc    Get course-specific progress
// @route   GET /api/progress/:courseId
// @access  Private
exports.getCourseProgress = asyncHandler(async (req, res, next) => {
  console.log(`[getCourseProgress] courseId received: ${req.params.courseId}`)
  console.log(`[getCourseProgress] user: ${req.user.id}`)
  
  let progress = await Progress.findOne({
    user: req.user.id,
    course: req.params.courseId,
  }).populate("course", "title description")

  console.log(`[getCourseProgress] Found existing progress:`, !!progress)

  if (!progress) {
    console.log(`[getCourseProgress] Creating new progress for course: ${req.params.courseId}`)
    
    // First, verify the course exists
    const course = await Course.findById(req.params.courseId)
    if (!course) {
      console.log(`[getCourseProgress] Course not found in database: ${req.params.courseId}`)
      return next(new ErrorResponse("Course not found. Please check the URL and try again.", 404))
    }
    
    console.log(`[getCourseProgress] Course found: ${course.title}`)
    
    progress = await Progress.create({
      user: req.user.id,
      course: req.params.courseId,
      percentageCompleted: 0,
    })
    
    console.log(`[getCourseProgress] Created new progress:`, progress._id)
  }

  // Get all lessons for the course
  const lessons = await Lesson.find({ course: req.params.courseId }).sort("order")
  console.log(`[getCourseProgress] Found ${lessons.length} lessons for course`)

  // Combine progress with lesson details
  const progressDetails = {
    ...progress.toObject(),
    totalLessons: lessons.length,
    lessons: lessons.map((lesson) => {
      const completedLesson = progress.completedLessons.find((cl) => cl.lesson.toString() === lesson._id.toString())

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
      course: courseId,
      completedLessons: [],
      percentageCompleted: 0,
    });
  }
  res.status(200).json({ success: true, data: progress });
});

// @desc    Update lesson progress
// @route   POST /api/progress/:courseId/lessons/:lessonId
// @access  Private
exports.updateLessonProgress = asyncHandler(async (req, res, next) => {
  const { quizScore, challengeCompleted } = req.body
  
  console.log(`[updateLessonProgress] courseId: ${req.params.courseId}, lessonId: ${req.params.lessonId}`)
  console.log(`[updateLessonProgress] user: ${req.user.id}`)
  console.log(`[updateLessonProgress] quizScore: ${quizScore}, challengeCompleted: ${challengeCompleted}`)

  // Find or create progress
  let progress = await Progress.findOne({
    user: req.user.id,
    course: req.params.courseId,
  })

  if (!progress) {
    console.log(`[updateLessonProgress] Creating new progress`)
    progress = await Progress.create({
      user: req.user.id,
      course: req.params.courseId,
      completedLessons: [],
      percentageCompleted: 0,
    })
  }

  console.log(`[updateLessonProgress] Current progress: ${progress.percentageCompleted}%`)

  // Check if lesson is already completed
  const existingLessonIndex = progress.completedLessons.findIndex(
    (lesson) => lesson.lesson.toString() === req.params.lessonId
  )

  if (existingLessonIndex > -1) {
    console.log(`[updateLessonProgress] Updating existing lesson`)
    // Update existing lesson
    progress.completedLessons[existingLessonIndex] = {
      lesson: req.params.lessonId,
      completedAt: Date.now(),
      quizScore: quizScore || null,
      challengeCompleted: challengeCompleted || false,
    }
  } else {
    console.log(`[updateLessonProgress] Adding new completed lesson`)
    // Add new completed lesson
    progress.completedLessons.push({
      lesson: req.params.lessonId,
      completedAt: Date.now(),
      quizScore: quizScore || null,
      challengeCompleted: challengeCompleted || false,
    })
  }

  // Calculate progress percentage
  const totalLessons = await Lesson.countDocuments({ course: req.params.courseId })
  const completedCount = progress.completedLessons.length
  progress.percentageCompleted = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  console.log(`[updateLessonProgress] Total lessons: ${totalLessons}, Completed: ${completedCount}, Percentage: ${progress.percentageCompleted}%`)

  if (progress.percentageCompleted === 100 && !progress.completedAt) {
    console.log(`[updateLessonProgress] Course completed! Generating certificate...`)
    progress.completedAt = Date.now()
    
    // Auto-generate certificate when course is completed
    await generateCertificate(req.user, req.params.courseId, progress)
    
    // Check if user completed all courses and generate master certificate
    await checkAndGenerateMasterCertificate(req.user)
  }

  await progress.save()

  console.log(`[updateLessonProgress] Final progress saved: ${progress.percentageCompleted}%`)

  res.status(200).json({
    success: true,
    data: progress,
  })
})

// @desc    Reset course progress
// @route   POST /api/progress/:courseId/reset
// @access  Private
exports.resetCourseProgress = asyncHandler(async (req, res, next) => {
  const progress = await Progress.findOneAndUpdate(
    {
      user: req.user.id,
      course: req.params.courseId,
    },
    {
      completedLessons: [],
      percentageCompleted: 0,
      completedAt: null,
    },
    { new: true }
  )

  if (!progress) {
    return next(new ErrorResponse("Progress not found", 404))
  }

  res.status(200).json({
    success: true,
    data: progress,
  })
})

// @desc    Get course completion certificate
// @route   GET /api/progress/:courseId/certificate
// @access  Private
exports.getCertificate = asyncHandler(async (req, res, next) => {
  // Find certificate
  const certificate = await Certificate.findOne({
    user: req.user.id,
    course: req.params.courseId,
  })
  .populate("course", "title description category level")
  .populate("user", "name email")

  if (!certificate) {
    // Check if course is completed but certificate not generated
    const progress = await Progress.findOne({
      user: req.user.id,
      course: req.params.courseId,
    })

    if (!progress) {
      return next(new ErrorResponse("Progress not found", 404))
    }

    if (progress.percentageCompleted < 100) {
      return next(new ErrorResponse(`Certificate not available. Course completion: ${progress.percentageCompleted}%`, 400))
    }

    // Generate certificate if course is completed but certificate doesn't exist
    const newCertificate = await generateCertificate(req.user, req.params.courseId, progress)
    if (!newCertificate) {
      return next(new ErrorResponse("Failed to generate certificate", 500))
    }

    return res.status(201).json({
      success: true,
      data: newCertificate,
      message: "Certificate generated successfully"
    })
  }

  // Return existing certificate
  res.status(200).json({
    success: true,
    data: certificate
  })
})

// @desc    Get user's certificates
// @route   GET /api/progress/certificates
// @access  Private
exports.getUserCertificates = asyncHandler(async (req, res, next) => {
  console.log(`[getUserCertificates] Fetching certificates for user: ${req.user.id}`)
  
  const certificates = await Certificate.find({ user: req.user.id })
    .populate("course", "title description category level coverImage")
    .sort({ issuedAt: -1 })

  console.log(`[getUserCertificates] Found ${certificates.length} certificates`)
  certificates.forEach(cert => {
    console.log(`- Certificate: ${cert.certificateId} for course: ${cert.course?.title}`)
  })

  res.status(200).json({
    success: true,
    count: certificates.length,
    data: certificates
  })
})

// @desc    Verify certificate by verification code
// @route   GET /api/progress/verify/:verificationCode
// @access  Public
exports.verifyCertificate = asyncHandler(async (req, res, next) => {
  const { verificationCode } = req.params

  const certificate = await Certificate.findOne({ 
    verificationCode,
    isValid: true 
  })
  .populate("course", "title description category level")
  .populate("user", "name email")

  if (!certificate) {
    return next(new ErrorResponse("Certificate not found", 404))
  }

  res.status(200).json({
    success: true,
    data: certificate
  })
})

// @desc    Get certificate by ID (public)
// @route   GET /api/progress/certificates/:certificateId
// @access  Public
exports.getCertificateById = asyncHandler(async (req, res, next) => {
  const certificate = await Certificate.findOne({ 
    certificateId: req.params.certificateId 
  })
  .populate("course", "title description category level")
  .populate("user", "name email")

  if (!certificate) {
    return next(new ErrorResponse("Certificate not found", 404))
  }

  res.status(200).json({
    success: true,
    data: certificate
  })
})

// @desc    Get user's master certificate
// @route   GET /api/progress/master-certificate
// @access  Private
exports.getMasterCertificate = asyncHandler(async (req, res, next) => {
  const masterCertificate = await MasterCertificate.findOne({ user: req.user.id })
    .populate({
      path: 'completedCourses.course',
      select: 'title category coverImage'
    })

  if (!masterCertificate) {
    return res.status(404).json({
      success: false,
      message: "Master certificate not found. Complete all courses to earn your master certificate."
    })
  }

  res.status(200).json({
    success: true,
    data: masterCertificate
  })
})

// @desc    Get master certificate by ID (public)
// @route   GET /api/progress/master-certificate/:certificateId
// @access  Public
exports.getMasterCertificateById = asyncHandler(async (req, res, next) => {
  const masterCertificate = await MasterCertificate.findOne({ 
    certificateId: req.params.certificateId 
  })
    .populate('user', 'name email')
    .populate({
      path: 'completedCourses.course',
      select: 'title category coverImage'
    })

  if (!masterCertificate) {
    return next(new ErrorResponse("Master certificate not found", 404))
  }

  res.status(200).json({
    success: true,
    data: masterCertificate
  })
})

// @desc    Verify master certificate
// @route   GET /api/progress/verify-master-certificate/:verificationCode
// @access  Public
exports.verifyMasterCertificate = asyncHandler(async (req, res, next) => {
  const masterCertificate = await MasterCertificate.findOne({ 
    verificationCode: req.params.verificationCode 
  })
    .populate('user', 'name email')
    .populate({
      path: 'completedCourses.course',
      select: 'title category coverImage'
    })

  if (!masterCertificate) {
    return next(new ErrorResponse("Master certificate not found", 404))
  }

  res.status(200).json({
    success: true,
    data: masterCertificate
  })
})

// @desc    Get master certificate progress/eligibility
// @route   GET /api/progress/master-progress
// @access  Private
exports.getMasterProgress = asyncHandler(async (req, res, next) => {
  // Get all published courses
  const allCourses = await Course.find({ isPublished: true }).select('title category')
  
  // Get user's completed courses
  const completedProgress = await Progress.find({ 
    user: req.user.id, 
    percentageCompleted: 100 
  }).populate('course', 'title category')

  // Check if master certificate exists
  const masterCertificate = await MasterCertificate.findOne({ user: req.user.id })

  const progress = {
    totalCourses: allCourses.length,
    completedCourses: completedProgress.length,
    remainingCourses: allCourses.length - completedProgress.length,
    progressPercentage: Math.round((completedProgress.length / allCourses.length) * 100),
    isEligible: completedProgress.length >= allCourses.length,
    hasMasterCertificate: !!masterCertificate,
    masterCertificateId: masterCertificate?.certificateId || null,
    completedCoursesList: completedProgress.map(p => ({
      title: p.course.title,
      category: p.course.category,
      completedAt: p.completedAt
    })),
    remainingCoursesList: allCourses.filter(course => 
      !completedProgress.some(p => p.course._id.toString() === course._id.toString())
    ).map(course => ({
      title: course.title,
      category: course.category
    }))
  }

  res.status(200).json({
    success: true,
    data: progress
  })
})

// @desc    Manual certificate generation (for testing/fixing completed courses)
// @route   POST /api/progress/:courseId/generate-certificate
// @access  Private
exports.generateCertificateManually = asyncHandler(async (req, res, next) => {
  console.log(`[generateCertificateManually] Generating certificate for course: ${req.params.courseId}, user: ${req.user.id}`)
  
  // Find the progress record
  const progress = await Progress.findOne({
    user: req.user.id,
    course: req.params.courseId
  }).populate('course')

  if (!progress) {
    return next(new ErrorResponse("No progress found for this course", 404))
  }

  if (progress.percentageCompleted < 100) {
    return next(new ErrorResponse("Course is not completed yet", 400))
  }

  // Check if certificate already exists
  const existingCertificate = await Certificate.findOne({
    user: req.user.id,
    course: req.params.courseId
  })

  if (existingCertificate) {
    return res.status(200).json({
      success: true,
      message: "Certificate already exists",
      data: existingCertificate
    })
  }

  // Generate the certificate
  const certificate = await generateCertificate(req.user, req.params.courseId, progress)
  
  if (!certificate) {
    return next(new ErrorResponse("Failed to generate certificate", 500))
  }

  // Check and generate master certificate if eligible
  await checkAndGenerateMasterCertificate(req.user)

  res.status(201).json({
    success: true,
    message: "Certificate generated successfully",
    data: certificate
  })
})
// @route   POST /api/progress/:courseId/generate-certificate
// @access  Private
exports.generateCertificateManually = asyncHandler(async (req, res, next) => {
  console.log(`[generateCertificateManually] Manual certificate generation for course: ${req.params.courseId}`)
  
  // Check if course is completed
  const progress = await Progress.findOne({
    user: req.user.id,
    course: req.params.courseId,
  })

  if (!progress) {
    return next(new ErrorResponse("Progress not found", 404))
  }

  if (progress.percentageCompleted < 100) {
    return next(new ErrorResponse(`Course not completed. Current progress: ${progress.percentageCompleted}%`, 400))
  }

  console.log(`[generateCertificateManually] Course is completed, generating certificate...`)

  // Generate certificate
  const certificate = await generateCertificate(req.user, req.params.courseId, progress)
  
  if (!certificate) {
    return next(new ErrorResponse("Failed to generate certificate", 500))
  }

  console.log(`[generateCertificateManually] Certificate generated: ${certificate.certificateId}`)

  res.status(201).json({
    success: true,
    data: certificate,
    message: "Certificate generated successfully"
  })
})

// @desc    Get progress overview (available for all users)
// @route   GET /api/progress/overview
// @access  Private
exports.getProgressOverview = asyncHandler(async (req, res, next) => {
  // Check if user has premium access
  const hasPremiumAccess = await checkPremiumAccess(req.user.id)
  
  if (!hasPremiumAccess) {
    // Return premium feature information for non-premium users
    const premiumInfo = getPremiumFeatureInfo()
    
    // Also get basic course enrollment info (without progress tracking)
    const enrolledCourses = await Course.find({
      _id: { $in: req.user.enrolledCourses || [] }
    }).select('title description category level coverImage slug')
    
    return res.status(200).json({
      success: true,
      data: {
        isPremium: false,
        enrolledCourses: enrolledCourses.length,
        coursesData: enrolledCourses.map(course => ({
          _id: course._id,
          title: course.title,
          description: course.description,
          category: course.category,
          level: course.level,
          image: course.coverImage,
          path: `/courses/${course.slug || course._id}`,
          progress: 0, // No progress tracking for non-premium
          isPremiumFeature: true
        })),
        premiumFeatures: premiumInfo.features,
        upgradeMessage: premiumInfo.upgradeMessage,
        upgradeUrl: premiumInfo.upgradeUrl
      }
    })
  }
  
  // For premium users, return full progress data
  const progressData = await Progress.find({ user: req.user.id })
    .populate("course", "title description category level coverImage slug")
    .populate("lastAccessedLesson", "title")
    .populate("completedLessons.lesson", "title")
    .sort({ createdAt: -1 })

  // Transform data similar to getUserProgress but with premium status
  const formatCourseData = async (progressRecord) => {
    const course = progressRecord.course
    
    let lastLessonName = "N/A"
    if (progressRecord.lastAccessedLesson && progressRecord.lastAccessedLesson.title) {
      lastLessonName = progressRecord.lastAccessedLesson.title
    } else if (progressRecord.completedLessons && progressRecord.completedLessons.length > 0) {
      const lastCompletedLesson = progressRecord.completedLessons[progressRecord.completedLessons.length - 1]
      if (lastCompletedLesson.lesson && lastCompletedLesson.lesson.title) {
        lastLessonName = lastCompletedLesson.lesson.title
      }
    }
    
    let certificateInfo = null
    if (progressRecord.percentageCompleted === 100) {
      const certificate = await Certificate.findOne({
        user: progressRecord.user,
        course: course._id
      })
      
      if (certificate) {
        certificateInfo = {
          certificateId: certificate.certificateId,
          issuedAt: certificate.issuedAt,
          grade: certificate.grade,
          verificationCode: certificate.verificationCode,
          downloadUrl: `/api/progress/certificates/${certificate.certificateId}`
        }
      }
    }
    
    return {
      _id: course._id,
      title: course.title,
      description: course.description,
      category: course.category,
      level: course.level,
      image: course.coverImage,
      progress: progressRecord.percentageCompleted,
      lastLesson: lastLessonName,
      completedAt: progressRecord.completedAt,
      completedDate: progressRecord.completedAt ? new Date(progressRecord.completedAt).toLocaleDateString() : null,
      path: `/courses/${course.slug || course._id}`,
      certificate: certificateInfo,
      isCompleted: progressRecord.percentageCompleted === 100,
      isPremiumFeature: false
    }
  }

  const inProgressPromises = progressData
    .filter(p => p.percentageCompleted < 100)
    .map(formatCourseData)
    
  const completedPromises = progressData
    .filter(p => p.percentageCompleted === 100)
    .map(formatCourseData)

  const inProgress = await Promise.all(inProgressPromises)
  const completed = await Promise.all(completedPromises)

  // Check for master certificate eligibility
  let masterCertificateInfo = null
  if (completed.length > 0) {
    const masterCert = await MasterCertificate.findOne({ user: req.user.id })
    if (masterCert) {
      masterCertificateInfo = {
        certificateId: masterCert.certificateId,
        issuedAt: masterCert.issuedAt,
        totalCourses: masterCert.completedCourses.length,
        averageGrade: masterCert.overallGrade,
        downloadUrl: `/api/progress/master-certificate/${masterCert.certificateId}`
      }
    }
  }

  res.status(200).json({
    success: true,
    data: {
      isPremium: true,
      inProgress,
      completed,
      totalCourses: progressData.length,
      completedCount: completed.length,
      masterCertificate: masterCertificateInfo,
      stats: {
        coursesInProgress: inProgress.length,
        coursesCompleted: completed.length,
        totalHoursStudied: progressData.reduce((total, p) => total + (p.timeSpent || 0), 0),
        averageCompletion: progressData.length > 0 
          ? Math.round(progressData.reduce((total, p) => total + p.percentageCompleted, 0) / progressData.length)
          : 0
      }
    }
  })
})
