const express = require("express")
const router = express.Router()
const {
  createSubscription,
  getSubscription,
  getCurrentSubscription,
  cancelSubscription,
  getSubscriptionPlans,
} = require("../controllers/subscriptionController")
const { protect } = require("../middleware/authMiddleware")

// Routes
router.get("/plans", getSubscriptionPlans)
router.post("/create-checkout-session", protect, createSubscription)
router.get("/my-subscription", protect, getSubscription)
router.get("/current", protect, getCurrentSubscription)
router.post("/cancel", protect, cancelSubscription)


module.exports = router
