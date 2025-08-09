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
  getProgressOverview,
} = require("../controllers/progressController")
const { protect } = require("../middleware/authMiddleware")
const { adminOnly } = require("../middleware/roleMiddleware")
const { 
  premiumRequired, 
  certificatesRequired, 
  masterCertificateRequired,
  premiumFeatureCheck 
} = require("../middleware/premiumMiddleware")


// Progress overview (available for all users, shows premium features)
router.get("/overview", protect, getProgressOverview)

// Progress tracking routes (Premium only)
router.get("/", protect, premiumRequired, getUserProgress)

// Certificate routes (Premium only)
router.get("/certificates", protect, certificatesRequired, getUserCertificates)

// Master certificate routes (Premium only)
router.get("/master-certificate", protect, masterCertificateRequired, getMasterCertificate)
router.get("/master-progress", protect, masterCertificateRequired, getMasterProgress)
router.get("/master-certificate/:certificateId", getMasterCertificateById)
router.get("/verify-master-certificate/:verificationCode", verifyMasterCertificate)

// Public certificate verification (no auth required)
router.get("/verify/:verificationCode", verifyCertificate)
router.get("/certificates/:certificateId", getCertificateById)

// Course progress routes (Premium only)
router.get("/:courseId", protect, premiumRequired, getCourseProgress)

// Progress tracking routes (Premium only)
router.post("/:courseId/lessons/:lessonId", protect, premiumRequired, updateLessonProgress)
router.post("/:courseId/start", protect, premiumRequired, startCourseProgress)
router.post("/:courseId/reset", protect, premiumRequired, resetCourseProgress)

// Certificate generation routes (Premium only)
router.get("/:courseId/certificate", protect, certificatesRequired, getCertificate)
router.post("/:courseId/generate-certificate", protect, certificatesRequired, generateCertificateManually)

// Admin routes
router.get("/users/:userId", protect, adminOnly, getCourseProgress)

module.exports = router
