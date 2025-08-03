const express = require("express");
const router = express.Router();
const { getAllMentors, getMentorById } = require("../controllers/mentorshipController");

// GET /api/v1/mentors
router.get("/", getAllMentors);

// GET /api/v1/mentors/:id
router.get("/:id", getMentorById);

module.exports = router;