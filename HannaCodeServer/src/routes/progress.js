const express = require("express")
const router = express.Router()
const {
  getUserProgress,
  getCourseProgress,
  updateLessonProgress,
  resetCourseProgress,
  getCertificate,
  startCourseProgress,
  getUserCertificates,
  verifyCertificate,
  getCertificateById,
  getMasterCertificate,
  getMasterCertificateById,
  verifyMasterCertificate,
  getMasterProgress,
  generateCertificateManually,
} = require("../controllers/progressController")
const { protect } = require("../middleware/authMiddleware")
const { adminOnly } = require("../middleware/roleMiddleware")


router.get("/", protect, getUserProgress)

router.get("/certificates", protect, getUserCertificates)

// Master certificate routes
router.get("/master-certificate", protect, getMasterCertificate)
router.get("/master-progress", protect, getMasterProgress)
router.get("/master-certificate/:certificateId", getMasterCertificateById)
router.get("/verify-master-certificate/:verificationCode", verifyMasterCertificate)

router.get("/verify/:verificationCode", verifyCertificate)

router.get("/certificates/:certificateId", getCertificateById)

router.get("/:courseId", protect, getCourseProgress)


router.post("/:courseId/lessons/:lessonId", protect, updateLessonProgress)

router.post("/:courseId/start", protect, startCourseProgress)


router.post("/:courseId/reset", protect, resetCourseProgress)


router.get("/:courseId/certificate", protect, getCertificate)

// Manual certificate generation route (for testing/fixing)
router.post("/:courseId/generate-certificate", protect, generateCertificateManually)

// Admin routes
router.get("/users/:userId", protect, adminOnly, getCourseProgress)

module.exports = router
