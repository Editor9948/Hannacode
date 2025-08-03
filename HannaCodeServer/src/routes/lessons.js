const express = require("express")
const {
  getLessons,
  getLesson,
  createLesson,
  updateLesson,
  deleteLesson,
  uploadLessonVideo,
} = require("../controllers/lessonController")

const router = express.Router({ mergeParams: true })

// Import middleware
const { protect } = require("../middleware/authMiddleware")
const { adminOnly } = require("../middleware/roleMiddleware")

// Routes
router
  .route("/")
  .get(getLessons)
  .post(protect, adminOnly, createLesson)

router
  .route("/:id")
  .get(getLesson)
  .put(protect, adminOnly, updateLesson)
  .delete(protect, adminOnly, deleteLesson)

router
  .route("/:id/video")
  .put(protect, adminOnly, uploadLessonVideo)

module.exports = router 