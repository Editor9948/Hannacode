const Mentorship = require("../models/Mentorship")
const User = require("../models/User")
const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")
const { sendEmail } = require("../services/emailService")
const calendlyService = require("../services/calendlyService")
const stripeService = require("../services/stripeService")
const Message = require("../models/Message")

// @desc    Get all mentors
// @route   GET /api/v1/mentorship/mentors
// @access  Public
exports.getMentors = asyncHandler(async (req, res, next) => {
  // Find users with admin role (mentors)
  const mentors = await User.find({ role: "admin" }).select("name email bio profileImage preferredLanguages")

  res.status(200).json({
    success: true,
    count: mentors.length,
    data: mentors,
  })
})

exports.getAllMentors = async (req, res) => {
  const mentors = await User.find({ role: "mentor" }).select("name _id avatar specialties role");
  res.json({ success: true, data: mentors });
};

exports.getMentorById = async (req, res) => {
  const mentor = await User.findById(req.params.id);
  if (!mentor) {
    return res.status(404).json({ success: false, message: "Mentor not found" });
  }
  res.json(mentor);
};
// @desc    Get mentor availability
// @route   GET /api/v1/mentorship/mentors/:id/availability
// @access  Public
exports.getMentorAvailability = asyncHandler(async (req, res, next) => {
  const mentor = await User.findById(req.params.id)

  if (!mentor) {
    return next(new ErrorResponse(`Mentor not found with id of ${req.params.id}`, 404))
  }

  // Get mentor's Calendly availability
  const availability = await calendlyService.getMentorAvailability(mentor.email)

  res.status(200).json({
    success: true,
    data: availability,
  })
})

exports.updateMentorStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!["online", "offline"].includes(status)) {
    return res.status(400).json({ success: false, message: "Invalid status" });
  }
  const mentor = await User.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
  if (!mentor) {
    return res.status(404).json({ success: false, message: "Mentor not found" });
  }
  res.json({ success: true, data: mentor });
};

exports.updateMentorSpecialties = async (req, res) => {
  const { id } = req.params;
  const { specialties } = req.body;

  // Validate specialties is an array and only contains allowed values
  const allowed = [
    "JavaScript", "HTML", "CSS", "PHP", "Python", "Java", "C#", "C++", "Ruby", "Go", "Swift"
  ];
  if (
    !Array.isArray(specialties) ||
    specialties.some(s => !allowed.includes(s))
  ) {
    return res.status(400).json({ success: false, message: "Invalid specialties" });
  }

  const mentor = await User.findByIdAndUpdate(
    id,
    { specialties },
    { new: true }
  );
  if (!mentor) {
    return res.status(404).json({ success: false, message: "Mentor not found" });
  }
  res.json({ success: true, data: mentor });
};

// @desc    Book mentorship session
// @route   POST /api/v1/mentorship/sessions
// @access  Private
exports.bookMentorshipSession = asyncHandler(async (req, res, next) => {
  const { mentorId, scheduledDate, topic, description, sessionType = "one-time" } = req.body

  // Check if mentor exists
  const mentor = await User.findById(mentorId)
  if (!mentor || mentor.role !== "admin") {
    return next(new ErrorResponse(`Invalid mentor`, 400))
  }

  // Check if date is in the future
  const sessionDate = new Date(scheduledDate)
  if (sessionDate <= new Date()) {
    return next(new ErrorResponse(`Session date must be in the future`, 400))
  }

  // Calculate price based on session type
  const price = sessionType === "one-time" ? 49.99 : 199.99

  // Create payment intent with Stripe
  const paymentIntent = await stripeService.createPaymentIntent({
    amount: Math.round(price * 100), // convert to cents
    currency: "usd",
    metadata: {
      userId: req.user.id,
      mentorId,
      sessionType,
    },
  })

  // Create mentorship session
  const mentorship = await Mentorship.create({
    userId: req.user.id,
    mentorId,
    sessionType,
    topic,
    description,
    scheduledDate,
    duration: 60, // 1 hour
    price,
    paymentStatus: "pending",
  })

  // Schedule with Calendly
  try {
    const calendlyEvent = await calendlyService.scheduleEvent({
      mentorEmail: mentor.email,
      userEmail: req.user.email,
      userName: req.user.name,
      date: scheduledDate,
      duration: 60,
      topic,
    })

    // Update mentorship with Calendly info
    mentorship.calendlyEventId = calendlyEvent.id
    mentorship.meetingUrl = calendlyEvent.meetingUrl
    await mentorship.save()
  } catch (err) {
    console.error("Calendly scheduling error:", err)
    // We'll continue even if Calendly fails, but log the error
  }

  // Send emails to both user and mentor
  try {
    // Email to user
    await sendEmail({
      email: req.user.email,
      subject: "Mentorship Session Booked",
      message: `Your mentorship session with ${mentor.name} has been booked for ${new Date(scheduledDate).toLocaleString()}. Topic: ${topic}`,
    })

    // Email to mentor
    await sendEmail({
      email: mentor.email,
      subject: "New Mentorship Session",
      message: `A new mentorship session has been booked with you by ${req.user.name} for ${new Date(scheduledDate).toLocaleString()}. Topic: ${topic}`,
    })
  } catch (err) {
    console.error("Email error:", err)
  }

  res.status(201).json({
    success: true,
    data: mentorship,
    clientSecret: paymentIntent.client_secret,
  })
})

// @desc    Get user's mentorship sessions
// @route   GET /api/v1/mentorship/sessions
// @access  Private
exports.getMentorshipSessions = asyncHandler(async (req, res, next) => {
  const query = {}

  // If user is not admin, only show their sessions
  if (req.user.role !== "admin") {
    query.userId = req.user.id
  } else {
    // If admin/mentor, show sessions where they are the mentor
    query.mentorId = req.user.id
  }

  // Filter by status if provided
  if (req.query.status) {
    query.status = req.query.status
  }

  const sessions = await Mentorship.find(query)
    .populate("userId", "name email")
    .populate("mentorId", "name email")
    .sort("-scheduledDate")

  res.status(200).json({
    success: true,
    count: sessions.length,
    data: sessions,
  })
})

// @desc    Get mentorship session details
// @route   GET /api/v1/mentorship/sessions/:id
// @access  Private
exports.getMentorshipSession = asyncHandler(async (req, res, next) => {
  const session = await Mentorship.findById(req.params.id)
    .populate("userId", "name email")
    .populate("mentorId", "name email")

  if (!session) {
    return next(new ErrorResponse(`Session not found with id of ${req.params.id}`, 404))
  }

  // Check if user is authorized to view this session
  if (req.user.role !== "admin" && req.user.role !== "mentor" && session.userId.toString() !== req.user.id.toString() && session.mentorId.toString() !== req.user.id.toString()) {
return next(new ErrorResponse(`Not authorized to access this session`, 401))
}

  res.status(200).json({
    success: true,
    data: session,
  })
})

// @desc    Cancel mentorship session
// @route   POST /api/v1/mentorship/sessions/:id/cancel
// @access  Private
exports.cancelMentorshipSession = asyncHandler(async (req, res, next) => {
  const session = await Mentorship.findById(req.params.id)

  if (!session) {
    return next(new ErrorResponse(`Session not found with id of ${req.params.id}`, 404))
  }

  // Check if user is authorized to cancel this session
  if (req.user.role !== "admin" && session.userId.toString() !== req.user.id.toString()) {
    return next(new ErrorResponse(`Not authorized to cancel this session`, 401))
  }

  // Check if session is already completed or canceled
  if (session.status === "completed" || session.status === "canceled") {
    return next(new ErrorResponse(`Cannot cancel a session that is already ${session.status}`, 400))
  }

  // Check if session is within 24 hours
  const now = new Date()
  const sessionDate = new Date(session.scheduledDate)
  const hoursDifference = (sessionDate - now) / (1000 * 60 * 60)

  // If less than 24 hours notice and user is canceling (not admin)
  if (hoursDifference < 24 && req.user.role !== "admin") {
    return next(new ErrorResponse(`Sessions must be canceled at least 24 hours in advance`, 400))
  }

  // Cancel session
  session.status = "canceled"
  await session.save()

  // Cancel in Calendly if event exists
  if (session.calendlyEventId) {
    try {
      await calendlyService.cancelEvent(session.calendlyEventId)
    } catch (err) {
      console.error("Calendly cancellation error:", err)
      // Continue even if Calendly fails
    }
  }

  // Process refund if paid
  if (session.paymentStatus === "paid") {
    try {
      // Issue refund through Stripe
      // This would be implemented based on your payment flow
      session.paymentStatus = "refunded"
      await session.save()
    } catch (err) {
      console.error("Refund error:", err)
    }
  }

  // Send cancellation emails
  try {
    // Get user and mentor
    const user = await User.findById(session.userId)
    const mentor = await User.findById(session.mentorId)

    // Email to user
    await sendEmail({
      email: user.email,
      subject: "Mentorship Session Canceled",
      message: `Your mentorship session with ${mentor.name} scheduled for ${sessionDate.toLocaleString()} has been canceled.`,
    })

    // Email to mentor
    await sendEmail({
      email: mentor.email,
      subject: "Mentorship Session Canceled",
      message: `The mentorship session with ${user.name} scheduled for ${sessionDate.toLocaleString()} has been canceled.`,
    })
  } catch (err) {
    console.error("Email error:", err)
  }

  res.status(200).json({
    success: true,
    data: session,
  })
})

// @desc    Complete mentorship session
// @route   POST /api/v1/mentorship/sessions/:id/complete
// @access  Private
exports.completeMentorship = asyncHandler(async (req, res, next) => {
  const session = await Mentorship.findById(req.params.id)

  if (!session) {
    return next(new ErrorResponse(`Session not found with id of ${req.params.id}`, 404))
  }

  // Check if user is authorized to complete this session
  if (req.user.role !== "admin" && session.userId.toString() !== req.user.id.toString()) {
    return next(new ErrorResponse(`Not authorized to complete this session`, 401))
  }

  // Check if session is already completed or canceled
  if (session.status === "completed" || session.status === "canceled") {
    return next(new ErrorResponse(`Cannot complete a session that is already ${session.status}`, 400))
  }

  // Complete session
  session.status = "completed"
  session.completedAt = Date.now()
  await session.save()

  // Send completion emails
  try {
    // Get user and mentor
    const user = await User.findById(session.userId)
    const mentor = await User.findById(session.mentorId)

    // Email to user
    await sendEmail({
      email: user.email,
      subject: "Mentorship Session Completed",
      message: `Your mentorship session with ${mentor.name} has been marked as completed.`,
    })

    // Email to mentor
    await sendEmail({
      email: mentor.email,
      subject: "Mentorship Session Completed",
      message: `Your mentorship session with ${user.name} has been marked as completed.`,
    })
  } catch (err) {
    console.error("Email error:", err)
  }

  res.status(200).json({
    success: true,
    data: session,
  })
})

// @desc    Provide feedback for a session
// @route   POST /api/v1/mentorship/sessions/:id/feedback
// @access  Private
exports.provideFeedback = asyncHandler(async (req, res, next) => {
  const { rating, comment } = req.body

  // Validate rating
  if (!rating || rating < 1 || rating > 5) {
    return next(new ErrorResponse(`Please provide a rating between 1 and 5`, 400))
  }

  const session = await Mentorship.findById(req.params.id)

  if (!session) {
    return next(new ErrorResponse(`Session not found with id of ${req.params.id}`, 404))
  }

  // Check if user is authorized to provide feedback
  if (session.userId.toString() !== req.user.id.toString()) {
    return next(new ErrorResponse(`Not authorized to provide feedback for this session`, 401))
  }

  // Check if session is completed
  if (session.status !== "completed") {
    return next(new ErrorResponse(`Can only provide feedback for completed sessions`, 400))
  }

  // Add feedback
  session.feedback = {
    rating,
    comment,
    createdAt: Date.now(),
  }

  await session.save()

  res.status(200).json({
    success: true,
    data: session,
  })
})

// @desc    Get mentor's Calendly link
// @route   GET /api/v1/mentorship/mentors/:mentorId/calendly-link
// @access  Private/Premium
exports.getCalendlyLink = asyncHandler(async (req, res, next) => {
  const mentor = await User.findById(req.params.mentorId)

  if (!mentor || mentor.role !== "admin") {
    return next(new ErrorResponse(`Invalid mentor`, 400))
  }

  // Get mentor's Calendly link
  const calendlyLink = await calendlyService.getMentorCalendlyLink(mentor.email)

  res.status(200).json({
    success: true,
    data: calendlyLink,
  })
})

// Chat History
exports.getChatHistory = asyncHandler(async (req, res) => {
  const { mentorshipId } = req.params
  const { page = 1, limit = 50 } = req.query
  const userId = req.user.id
  const userRole = req.user.role

  console.log("getChatHistory called with mentorshipId:", mentorshipId);
  console.log("User ID:", userId, "User Role:", userRole);

  // Verify mentorship exists and user is authorized
  const mentorship = await Mentorship.findById(mentorshipId)
  if (!mentorship) {
    console.log("Mentorship not found:", mentorshipId);
    return res.status(404).json({
      success: false,
      error: 'Mentorship session not found'
    })
  }

  console.log("Mentorship found:", mentorship._id);

  // Check authorization - allow admin to view any chat
  if (userRole !== 'admin') {
    if (!mentorship.userId || !mentorship.mentorId) {
      console.log("Mentorship missing userId or mentorId");
      return res.status(500).json({
        success: false,
        error: 'Mentorship or userId missing'
      })
    }

    if (![mentorship.userId.toString(), mentorship.mentorId.toString()].includes(userId.toString())) {
      console.log("User not authorized. User ID:", userId, "Mentorship userId:", mentorship.userId, "Mentorship mentorId:", mentorship.mentorId);
      return res.status(403).json({
        success: false,
        error: 'Not authorized to view this chat'
      })
    }
  }

  // Set headers to prevent caching
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  })

  const messages = await Message.find({ mentorship: mentorshipId })
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate('sender', 'name avatar')
    .populate('reactions.user', 'name avatar')

  console.log("Found messages count:", messages.length);
  console.log("Messages:", messages.map(m => ({ id: m._id, content: m.content, sender: m.sender?.name })));

  res.json({
    success: true,
    data: messages.reverse(),
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: await Message.countDocuments({ mentorship: mentorshipId })
    }
  })
})

exports.getMentorChats = async (req, res) => {
  const mentorId = req.params.mentorId;
  // Find all chats where this mentor is a participant
   const messages = await Message.find({})
    .populate('sender')
    .populate({
      path: 'mentorship',
      match: { mentorId: mentorId }
    });

  // Filter out messages where mentorship is null (no match)
  const mentorMessages = messages.filter(msg => msg.mentorship !== null);

  res.json({ success: true, data: mentorMessages });
};

// Send Message
exports.sendMessage = asyncHandler(async (req, res) => {
  const { mentorshipId } = req.params
  const { content, type = 'text' } = req.body
  const userId = req.user.id
  const userRole = req.user.role

  const mentorship = await Mentorship.findById(mentorshipId)
  if (!mentorship) {
    return res.status(404).json({
      success: false,
      error: 'Mentorship session not found'
    })
  }

  // Allow admin to message any mentor
  if (userRole === 'admin') {
    const message = await Message.create({
      mentorship: mentorshipId,
      sender: userId,
      content,
      type
    })

    // Emit socket event for real-time updates
    req.io.to(mentorshipId).emit('new_message', {
      message: await message.populate('sender', 'name avatar')
    })

    return res.status(201).json({
      success: true,
      data: message
    })
  }

  if (
  !mentorship.userId ||
  !mentorship.mentorId ||
  !userId
) {
  return res.status(500).json({
    success: false,
    error: 'Mentorship or userId missing'
  });
}

if (![mentorship.userId.toString(), mentorship.mentorId.toString()].includes(userId.toString())) {
  return res.status(403).json({
    success: false,
    error: 'Not authorized to send messages in this chat'
    
  });
}

  const message = await Message.create({
    mentorship: mentorshipId,
    sender: userId,
    content,
    type
  })

  // Emit socket event for real-time updates
  req.io.to(mentorshipId).emit('new_message', {
    message: await message.populate('sender', 'name avatar')
  })

  res.status(201).json({
    success: true,
    data: message
  })
})

// Send Voice Message
exports.sendVoiceMessage = asyncHandler(async (req, res) => {
  const { mentorshipId } = req.params
  const userId = req.user.id

  if (!req.file) {
    return res.status(400).json({
      success: false,
      error: 'No audio file provided'
    })
  }

  const mentorship = await Mentorship.findById(mentorshipId)
  if (!mentorship) {
    return res.status(404).json({
      success: false,
      error: 'Mentorship session not found'
    })
  }

  // Verify user is part of the mentorship
 if (![mentorship.userId.toString(), mentorship.mentorId.toString()].includes(userId.toString())) {
  return res.status(403).json({
    success: false,
    error: 'Not authorized to send messages in this chat'
  })
}
  const message = await Message.create({
    mentorship: mentorshipId,
    sender: userId,
    content: req.file.path,
    type: 'voice'
  })

  // Emit socket event for real-time updates
  req.io.to(mentorshipId).emit('new_message', {
    message: await message.populate('sender', 'name avatar')
  })

  res.status(201).json({
    success: true,
    data: message
  })
})

// Add Message Reaction
exports.addMessageReaction = asyncHandler(async (req, res) => {
  const { mentorshipId, messageId } = req.params
  const { emoji } = req.body
  const userId = req.user.id

  const message = await Message.findById(messageId)
  if (!message) {
    return res.status(404).json({
      success: false,
      error: 'Message not found'
    })
  }

  // Check if user already reacted with this emoji
  const existingReaction = message.reactions.find(
    r => r.user.toString() === userId && r.emoji === emoji
  )

  if (existingReaction) {
    // Remove reaction if it exists
    message.reactions = message.reactions.filter(
      r => !(r.user.toString() === userId && r.emoji === emoji)
    )
  } else {
    // Add new reaction
    message.reactions.push({ user: userId, emoji })
  }

  await message.save()

  // Emit socket event for real-time updates
  req.io.to(mentorshipId).emit('message_reaction', {
    messageId,
    reactions: message.reactions
  })

  res.json({
    success: true,
    data: message
  })
})

// Share Code
exports.shareCode = asyncHandler(async (req, res) => {
  const { mentorshipId } = req.params
  const { code, language } = req.body
  const userId = req.user.id

  const mentorship = await Mentorship.findById(mentorshipId)
  if (!mentorship) {
    return res.status(404).json({
      success: false,
      error: 'Mentorship session not found'
    })
  }

  // Verify user is part of the mentorship
 if (![mentorship.userId.toString(), mentorship.mentorId.toString()].includes(userId.toString())) {
  return res.status(403).json({
    success: false,
    error: 'Not authorized to send messages in this chat'
  })
}
  const message = await Message.create({
    mentorship: mentorshipId,
    sender: userId,
    content: code,
    type: 'code',
    metadata: { language }
  })

  // Emit socket event for real-time updates
  req.io.to(mentorshipId).emit('new_message', {
    message: await message.populate('sender', 'name avatar')
  })

  res.status(201).json({
    success: true,
    data: message
  })
})

// Share Screen
exports.shareScreen = asyncHandler(async (req, res) => {
  const { mentorshipId } = req.params
  const { image } = req.body
  const userId = req.user.id

  const mentorship = await Mentorship.findById(mentorshipId)
  if (!mentorship) {
    return res.status(404).json({
      success: false,
      error: 'Mentorship session not found'
    })
  }

  // Verify user is part of the mentorship
 if (![mentorship.userId.toString(), mentorship.mentorId.toString()].includes(userId.toString())) {
  return res.status(403).json({
    success: false,
    error: 'Not authorized to send messages in this chat'
  })
}
  const message = await Message.create({
    mentorship: mentorshipId,
    sender: userId,
    content: image,
    type: 'screen'
  })

  // Emit socket event for real-time updates
  req.io.to(mentorshipId).emit('new_message', {
    message: await message.populate('sender', 'name avatar')
  })

  res.status(201).json({
    success: true,
    data: message
  })
})

// Create admin-mentor chat session
exports.createAdminChat = asyncHandler(async (req, res) => {
  const { mentorId } = req.body;
  const adminId = req.user.id;

  // Verify admin role
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      error: 'Only admins can create admin-mentor chats'
    });
  }

  // Verify mentor exists
  const mentor = await User.findById(mentorId);
  if (!mentor) {
    return res.status(404).json({
      success: false,
      error: 'Mentor not found'
    });
  }

  // Find or create mentorship session
  let mentorship = await Mentorship.findOne({
    mentorId: mentorId,
    userId: adminId,
    type: 'admin'
  });

  if (!mentorship) {
    mentorship = await Mentorship.create({
      mentorId: mentorId,
      userId: adminId,
      type: 'admin',
      status: 'active'
    });
  }

  res.status(200).json({
    success: true,
    data: mentorship
  });
});
