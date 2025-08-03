const express = require("express")
const router = express.Router({ mergeParams: true })
const {
  getLessons,
  getLesson,
  createLesson,
  updateLesson,
  deleteLesson,
  uploadLessonVideo,
  uploadLessonResource,
} = require("../controllers/lessonController")
const { protect } = require("../middleware/authMiddleware")
const { adminOnly, premiumOnly } = require("../middleware/roleMiddleware")

router.route("/").get(getLessons).post(protect, adminOnly, createLesson)
router.route("/:id").get(getLesson).put(protect, adminOnly, updateLesson).delete(protect, adminOnly, deleteLesson)
router.route("/:id/video").put(protect, adminOnly, uploadLessonVideo)
router.route("/:id/resource").post(protect, adminOnly, uploadLessonResource)

// Premium content routes
router.get("/:id/premium", protect, premiumOnly, getLesson)

module.exports = router
