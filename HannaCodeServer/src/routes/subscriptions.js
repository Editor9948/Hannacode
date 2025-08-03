const express = require("express")
const router = express.Router()
const {
  createSubscription,
  getSubscription,
  cancelSubscription,
 
} = require("../controllers/subscriptionController")
const { protect } = require("../middleware/authMiddleware")

// Routes
router.post("/create-checkout-session", protect, createSubscription)
router.get("/my-subscription", protect, getSubscription)
router.post("/cancel", protect, cancelSubscription)


module.exports = router
