const express = require("express");
const router = express.Router({ mergeParams: true });

const { protect } = require("../middleware/authMiddleware");
const {
  listChallenges,
  getToday,
  getChallengeById,
} = require("../controllers/challengesController");

// Require login for challenges data
router.get("/challenges", protect, listChallenges);
router.get("/challenges/today", protect, getToday);
router.get("/challenges/:id", protect, getChallengeById);

module.exports = router;