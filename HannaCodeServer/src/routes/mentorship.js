const express = require("express")
const router = express.Router()
const {
  bookMentorshipSession,
  getMentorshipSessions,
  getMentorshipSession,
  cancelMentorshipSession,
  completeMentorship,
  provideFeedback,
  getMentors,
  getMentorById,
  getMentorChats,
  getCalendlyLink,
  getMentorAvailability,
  updateMentorStatus,
  updateMentorSpecialties,
  sendMessage,
  sendVoiceMessage,
  addMessageReaction,
  getChatHistory,
  shareCode,
  shareScreen,
  createAdminChat,
} = require("../controllers/mentorshipController")
const Mentorship = require("../models/Mentorship")
const { protect } = require("../middleware/authMiddleware")
const { premiumOnly } = require("../middleware/roleMiddleware")
const upload = require("../middleware/fileUpload")

// Get all mentors
router.get("/mentors", protect, getMentors)

// Get a mentor by ID
router.get("/mentors/:id", protect, getMentorById)

// Get mentor's availability
router.get("/mentors/:id/availability", protect, getMentorAvailability)

router.get("/premium-content", protect, premiumOnly, getMentors)

// Get all chats for a mentor (mentor inbox)
router.get("/mentor/:mentorId/chats", protect, getMentorChats);

// Get mentor's Calendly link
router.get("/mentors/:mentorId/calendly-link", protect, premiumOnly, getCalendlyLink)

// Book a mentorship session
router.post("/sessions", protect, premiumOnly, bookMentorshipSession)

// Get all mentorship sessions
router.get("/sessions", protect, getMentorshipSessions)

// Get a specific mentorship session
router.get("/sessions/:id", protect, getMentorshipSession)

// Update mentor's status
router.patch("/:id/status", protect, updateMentorStatus);

// Update mentor's specialties
router.patch("/:id/specialties", protect, updateMentorSpecialties);

router.post("/sessions/find-or-create", protect, premiumOnly, async (req, res) => {
  const { mentorId } = req.body;
  const userId = req.user.id;
  let session = await Mentorship.findOne({ mentorId: mentorId, userId: userId });
  if (!session) {
    session = await Mentorship.create({ mentorId: mentorId, userId: userId });
  }
  res.json({ success: true, data: session });
});

// Cancel a mentorship session
router.post("/sessions/:id/cancel", protect, cancelMentorshipSession)

// Complete a mentorship session
router.post("/sessions/:id/complete", protect, completeMentorship)

// Provide feedback for a session
router.post("/sessions/:id/feedback", protect, provideFeedback)

// New chat-related routes
router.get("/chat/:mentorshipId/history", protect, getChatHistory)
router.post("/chat/:mentorshipId/messages", protect, sendMessage)
router.post("/chat/:mentorshipId/voice-message", protect, upload.single('audio'), sendVoiceMessage)
router.post("/chat/:mentorshipId/messages/:messageId/reactions", protect, addMessageReaction)
router.post("/chat/:mentorshipId/code", protect, shareCode)
router.post("/chat/:mentorshipId/screen-share", protect, shareScreen)

// Admin chat routes
router.post("/admin/chat", protect, createAdminChat);

module.exports = router
