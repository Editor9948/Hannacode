const express = require("express")
const router = express.Router()
const {
  getUserProgress,
  getCourseProgress,
  updateLessonProgress,
  resetCourseProgress,
  getCertificate,
  startCourseProgress,
} = require("../controllers/progressController")
const { protect } = require("../middleware/authMiddleware")
const { adminOnly } = require("../middleware/roleMiddleware")


router.get("/", protect, getUserProgress)


 
router.get("/:courseId", protect, getCourseProgress)


router.post("/:courseId/lessons/:lessonId", protect, updateLessonProgress)

router.post("/:courseId/start", protect, startCourseProgress)


router.post("/:courseId/reset", protect, resetCourseProgress)


router.get("/:courseId/certificate", protect, getCertificate)

// Admin routes
router.get("/users/:userId", protect, adminOnly, getCourseProgress)

module.exports = router
