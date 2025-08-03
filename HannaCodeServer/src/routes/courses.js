const express = require("express")
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  uploadCourseImage,
  getCourseBySlug,
  getCoursesByLanguage,
  getLessonsByLanguage,
  getCoursesByLevel
} = require("../controllers/courseController")

const router = express.Router()

// Import middleware
const { protect } = require("../middleware/authMiddleware")
const { adminOnly, premiumOnly } = require("../middleware/roleMiddleware")

// Include lessons router
const lessonRouter = require("./lessons")

// Re-route into other resource routers
router.use("/:courseId/lessons", lessonRouter)

// Routes
router.route("/").get(getCourses).post(protect, adminOnly, createCourse)

// Get course by slug - This must come before the /:id route
router.get("/slug/:slug", getCourseBySlug)

// Language and level based routes
router.get("/language/:language", getCoursesByLanguage)
router.get("/language/:language/lessons", getLessonsByLanguage)
router.get("/level/:level", getCoursesByLevel)

// Course CRUD routes - This must come after the slug route
router.route("/:id")
  .get(getCourse)
  .put(protect, adminOnly, updateCourse)
  .delete(protect, adminOnly, deleteCourse)

router.route("/:id/image")
  .put(protect, adminOnly, uploadCourseImage)

// Premium content routes
router.get("/premium", protect, premiumOnly, getCourses)

module.exports = router
