const path = require("path")
const Course = require("../models/Course")
const Lesson = require("../models/Lesson")
const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  // Copy req.query
  const reqQuery = { ...req.query }

  // Fields to exclude
  const removeFields = ["select", "sort", "page", "limit", "noPagination"]

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param])

  // Create query string
  let queryStr = JSON.stringify(reqQuery)

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)

  // Debug: print the query object
  console.log("[getCourses] Query object:", queryStr);

  // Finding resource
  let query = Course.find(JSON.parse(queryStr))

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ")
    query = query.select(fields)
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ")
    query = query.sort(sortBy)
  } else {
    query = query.sort("-createdAt")
  }

  // Check if pagination is disabled
  let courses;
  let pagination = {};
  
  if (req.query.noPagination === 'true') {
    // No pagination - fetch all courses
    courses = await query;
    // Debug: print the number of courses found
    console.log(`[getCourses] Courses found (noPagination): ${courses.length}`);
  } else {
    // Pagination
    const page = Number.parseInt(req.query.page, 10) || 1
    const limit = Number.parseInt(req.query.limit, 10) || 10
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const total = await Course.countDocuments(JSON.parse(queryStr))

    query = query.skip(startIndex).limit(limit)

    // Executing query
    courses = await query
    // Debug: print the number of courses found
    console.log(`[getCourses] Courses found (paginated): ${courses.length}`);

    // Pagination result
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      }
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      }
    }
  }

  res.status(200).json({
    success: true,
    count: courses.length,
    pagination,
    data: courses,
  })
})

// @desc    Get single course
// @route   GET /api/v1/courses/:id
// @access  Public
exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id)
    .select('title description shortDescription level language category duration coverImage isPremium isPublished tags prerequisites lessonCount price rating enrolledStudents instructor lastUpdated')
    .populate({
      path: 'lessons',
      select: 'title description content videoUrl duration order isPublished',
      options: { sort: { order: 1 } }
    });

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  }

  // Format the response data
  const formattedCourse = {
    ...course.toObject(),
    category: course.category || 'Web Development',
    level: course.level || 'beginner',
    coverImage: course.coverImage || '/images/courses/default-course.jpg',
    lessons: course.lessons || []
  };

  res.status(200).json({
    success: true,
    data: formattedCourse,
  })
})

exports.getCoursesByLanguage = asyncHandler(async (req, res, next) => {
  const language = req.params.language.toLowerCase();
  
  // Find courses and populate lessons
  const courses = await Course.find({ language })
    .select('title description shortDescription level language category duration coverImage isPremium isPublished tags prerequisites lessonCount price rating enrolledStudents instructor lastUpdated')
    .populate({
      path: 'lessons',
      select: 'title description content videoUrl duration order isPublished',
      options: { sort: { order: 1 } }
    });

  if (!courses || courses.length === 0) {
    return next(new ErrorResponse(`No courses found for language: ${language}`, 404));
  }

  // Format the response data
  const formattedCourses = courses.map(course => ({
    ...course.toObject(),
    category: course.category || 'Web Development',
    level: course.level || 'beginner',
    lessons: course.lessons || []
  }));

  res.status(200).json({
    success: true,
    count: formattedCourses.length,
    data: formattedCourses,
  });
});

// @desc    Get course by slug
// @route   GET /api/v1/courses/slug/:slug
// @access  Public
exports.getCourseBySlug = asyncHandler(async (req, res, next) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug })
      .populate({
        path: "modules",
        populate: { path: "lessons" }
      })
      .populate({
        path: "instructor", 
        select: "name email role bio profileImage specialties"
      });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    console.log("Course instructor data:", course.instructor);

    // Optionally format the response if you want
    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
     console.error(error);
    res.status(500).json({ message: error.message });
  }
});


// @desc    Create new course
// @route   POST /api/v1/courses
// @access  Private/Admin
exports.createCourse = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.createdBy = req.user.id

  const course = await Course.create(req.body)

  res.status(201).json({
    success: true,
    data: course,
  })
})

// @desc    Update course
// @route   PUT /api/v1/courses/:id
// @access  Private/Admin
exports.updateCourse = asyncHandler(async (req, res, next) => {
  let course = await Course.findById(req.params.id)

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: course,
  })
})

// @desc    Delete course
// @route   DELETE /api/v1/courses/:id
// @access  Private/Admin
exports.deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id)

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  }

  await course.remove()

  res.status(200).json({
    success: true,
    data: {},
  })
})

// @desc    Get course lessons
// @route   GET /api/v1/courses/:id/lessons
// @access  Public
exports.getCourseLessons = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id)

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  }

  const lessons = await Lesson.find({ course: req.params.id }).sort("order")

  res.status(200).json({
    success: true,
    count: lessons.length,
    data: lessons,
  })
})

// @desc    Upload course image
// @route   PUT /api/v1/courses/:id/image
// @access  Private/Admin
exports.uploadCourseImage = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id)

  if (!course) {
    return next(new ErrorResponse(`Course not found with id of ${req.params.id}`, 404))
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400))
  }

  const file = req.files.file

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400))
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 400))
  }

  // Create custom filename
  file.name = `course_${course._id}${path.parse(file.name).ext}`

  file.mv(`${process.env.FILE_UPLOAD_PATH}/courses/${file.name}`, async (err) => {
    if (err) {
      console.error(err)
      return next(new ErrorResponse(`Problem with file upload`, 500))
    }

    await Course.findByIdAndUpdate(req.params.id, { thumbnail: file.name })

    res.status(200).json({
      success: true,
      data: file.name,
    })
  })
})

// @desc    Get lessons by language
// @route   GET /api/v1/courses/language/:language/lessons
// @access  Public
exports.getLessonsByLanguage = asyncHandler(async (req, res, next) => {
  const language = req.params.language.toLowerCase();
  
  // Find all courses with the specified language
  const courses = await Course.find({ language }).select('_id');
  
  if (!courses || courses.length === 0) {
    return next(new ErrorResponse(`No courses found for language: ${language}`, 404));
  }

  // Get all lessons from these courses
  const lessons = await Lesson.find({
    course: { $in: courses.map(course => course._id) }
  })
  .select('title description content videoUrl duration order isPublished course')
  .sort('order')
  .populate('course', 'title slug');

  res.status(200).json({
    success: true,
    count: lessons.length,
    data: lessons,
  });
});

// @desc    Get courses by level
// @route   GET /api/v1/courses/level/:level
// @access  Public
exports.getCoursesByLevel = asyncHandler(async (req, res, next) => {
  const level = req.params.level.toLowerCase();
  
  // Find courses and populate lessons
  const courses = await Course.find({ level })
    .select('title description shortDescription level language category duration coverImage isPremium isPublished tags prerequisites lessonCount price rating enrolledStudents instructor lastUpdated')
    .populate({
      path: 'lessons',
      select: 'title description content videoUrl duration order isPublished',
      options: { sort: { order: 1 } }
    });

  if (!courses || courses.length === 0) {
    return next(new ErrorResponse(`No courses found for level: ${level}`, 404));
  }

  // Format the response data
  const formattedCourses = courses.map(course => ({
    ...course.toObject(),
    category: course.category || 'Web Development',
    level: course.level || 'beginner',
    lessons: course.lessons || []
  }));

  res.status(200).json({
    success: true,
    count: formattedCourses.length,
    data: formattedCourses,
  });
});
