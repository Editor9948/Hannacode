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
const { addClient, removeClient } = require("../services/sseService")
const { computeCourseMetrics } = require("../services/courseMetricsService")
const reviewController = require("../controllers/reviewController")

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

// Server-Sent Events stream for course metrics (must be before /:id route)
router.get("/:id/stream", async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream")
  res.setHeader("Cache-Control", "no-cache, no-transform")
  res.setHeader("Connection", "keep-alive")
  // Allow CORS for SSE; main CORS middleware should handle, but ensure here too
  if (req.headers.origin) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin)
    res.setHeader("Access-Control-Allow-Credentials", "true")
  }

  const courseId = req.params.id
  addClient(String(courseId), res)

  // Send an initial comment to establish stream and disable response buffering
  res.write(": connected\n\n")
  if (typeof res.flushHeaders === 'function') {
    try { res.flushHeaders() } catch (_) {}
  }

  // Send initial metrics snapshot
  try {
    const metrics = await computeCourseMetrics(courseId)
    res.write(`event: metrics\n`)
    res.write(`data: ${JSON.stringify(metrics)}\n\n`)
  } catch (_) {}

  // Heartbeat to keep connection alive
  const heartbeat = setInterval(() => {
    try { res.write(": ping\n\n") } catch (_) {}
  }, 25000)

  req.on("close", () => {
    clearInterval(heartbeat)
    removeClient(String(courseId), res)
  })
})

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

// Reviews: public list, auth required for create/update/delete (free allowed)
router.get("/:courseId/reviews", reviewController.getCourseReviews)
router.post("/:courseId/reviews", protect, reviewController.createReview)
router.put("/:courseId/reviews/:reviewId", protect, reviewController.updateReview)
router.delete("/:courseId/reviews/:reviewId", protect, reviewController.deleteReview)

module.exports = router
