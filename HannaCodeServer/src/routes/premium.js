const express = require("express")
const router = express.Router()
const {
  getPremiumStatus,
  getPremiumFeatures,
} = require("../controllers/premiumController")
const { protect } = require("../middleware/authMiddleware")

// Routes
router.get("/status", protect, getPremiumStatus)
router.get("/features", getPremiumFeatures)

module.exports = router
