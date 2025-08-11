const Mentorship = require("../models/Mentorship")
const User = require("../models/User")
const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")
const { sendEmail } = require("../services/emailService")
const calendlyService = require("../services/calendlyService")
const paystackService = require("../services/paystackService")
const Message = require("../models/Message")

// Helper function to extract user ID consistently
const extractUserId = (user) => {
  if (!user) return null;
  
  // Try different possible ID fields
  let userId = user._id || user.id || user.userId;
  
  // If userId is still null/undefined, try to get it from the user object
  if (!userId && user.toString) {
    userId = user.toString();
  }
  
  // Additional validation to ensure we have a valid ObjectId
  if (userId) {
    // Check if it's a valid MongoDB ObjectId format
    const objectIdPattern = /^[0-9a-fA-F]{24}$/;
    if (typeof userId === 'string' && objectIdPattern.test(userId)) {
      return userId;
    } else if (typeof userId === 'object' && userId.toString) {
      // If it's an ObjectId object, convert to string
      return userId.toString();
    }
  }
  
  return null;
};

// @desc    Get all mentors
// @route   GET /api/v1/mentorship/mentors
// @access  Public
exports.getMentors = asyncHandler(async (req, res, next) => {
  // Find users with admin role (mentors)
  const mentors = await User.find({ role: "admin" }).select("name email bio profileImage preferredLanguages specialties status calendlyUrl")

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
  console.log("Getting mentor by ID:", req.params.id); // Debug log
  const mentor = await User.findById(req.params.id).select("name email bio profileImage specialties status role calendlyUrl");
  console.log("Found mentor:", mentor); // Debug log
  console.log("Mentor calendlyUrl:", mentor?.calendlyUrl); // Debug log
  
  if (!mentor) {
    return res.status(404).json({ success: false, message: "Mentor not found" });
  }
  res.json({
    success: true,
    data: mentor
  });
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

  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

  // Create payment intent with Stripe
  const paymentIntent = await paystackService.createPaymentIntent({
    amount: Math.round(price * 100), // convert to cents
    currency: "usd",
    metadata: {
      userId: userId,
      mentorId,
      sessionType,
    },
  })

  // Create mentorship session
  const mentorship = await Mentorship.create({
    userId: userId,
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

  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

  // If user is not admin, only show their sessions
  if (req.user.role !== "admin") {
    query.userId = userId
  } else {
    // If admin/mentor, show sessions where they are the mentor
    query.mentorId = userId
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
  console.log("Getting mentorship session:", req.params.id);

  // Check if user is properly authenticated
  if (!req.user) {
    console.log("User not authenticated");
    return next(new ErrorResponse("User not authenticated", 401));
  }

  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

  if (!userId) {
    console.log("User ID not found");
    return next(new ErrorResponse("User ID not found", 401));
  }

  const session = await Mentorship.findById(req.params.id)
    .populate("userId", "name email")
    .populate("mentorId", "name email")

  if (!session) {
    return next(new ErrorResponse(`Session not found with id of ${req.params.id}`, 404))
  }

  // Check if user is authorized to view this session
  const sessionUserId = session.userId._id ? session.userId._id.toString() : session.userId.toString();
  const sessionMentorId = session.mentorId._id ? session.mentorId._id.toString() : session.mentorId.toString();
  
  if (req.user.role !== "admin" && 
      req.user.role !== "mentor" && 
      sessionUserId !== userId.toString() && 
      sessionMentorId !== userId.toString()) {
    console.log("Authorization failed:", {
      userRole: req.user.role,
      userId: userId,
      sessionUserId,
      sessionMentorId
    });
    return next(new ErrorResponse(`Not authorized to access this session`, 401));
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

  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

  // Check if user is authorized to cancel this session
  if (req.user.role !== "admin" && session.userId.toString() !== userId.toString()) {
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

  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

  // Check if user is authorized to complete this session
  if (req.user.role !== "admin" && session.userId.toString() !== userId.toString()) {
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

  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

  // Check if user is authorized to provide feedback
  if (session.userId.toString() !== userId.toString()) {
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
  
  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);
  const userRole = req.user?.role

  console.log("getChatHistory called with mentorshipId:", mentorshipId);
  console.log("User ID:", userId, "User Role:", userRole);

  // Check if user is properly authenticated
  if (!req.user || !userId) {
    console.log("User not authenticated or missing ID");
    return res.status(401).json({
      success: false,
      error: 'User not authenticated'
    });
  }

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

  try {
    // Use a more robust query that avoids casting issues
    const messages = await Message.find({ 
      mentorship: mentorshipId
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)

    console.log("Raw messages found:", messages.length);
    console.log("Raw messages:", messages.map(m => ({ 
      id: m._id, 
      sender: m.sender, 
      senderType: typeof m.sender,
      content: m.content?.substring(0, 30) 
    })));

    // Filter out messages with invalid senders after the query
    const validMessages = messages.filter(msg => {
      const isValid = msg.sender && 
             msg.sender !== 'undefined' && 
             msg.sender !== null && 
             msg.sender !== '' &&
             typeof msg.sender === 'object';
      
      if (!isValid) {
        console.log("Filtering out invalid message:", { 
          id: msg._id, 
          sender: msg.sender, 
          senderType: typeof msg.sender 
        });
      }
      return isValid;
    });

    console.log("Valid messages after filtering:", validMessages.length);

    // Now populate the valid messages
    const populatedMessages = await Message.populate(validMessages, [
      { path: 'sender', select: 'name avatar' },
      { path: 'reactions.user', select: 'name avatar' }
    ]);

    console.log("Found valid messages count:", populatedMessages.length);
    console.log("Sample populated message:", populatedMessages[0] ? {
      id: populatedMessages[0]._id,
      sender: populatedMessages[0].sender,
      content: populatedMessages[0].content?.substring(0, 30)
    } : "No messages");

    // Get total count properly
    const totalMessages = await Message.countDocuments({ 
      mentorship: mentorshipId
    });

    res.json({
      success: true,
      data: populatedMessages.reverse(),
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalMessages,
        validTotal: populatedMessages.length
      }
    })
  } catch (error) {
    console.error("Error in getChatHistory:", error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve chat history: ' + error.message
    });
  }
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
  
  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);
  const userRole = req.user?.role

  console.log("sendMessage called with:", { 
    mentorshipId, 
    userId, 
    userRole,
    userObject: req.user ? {
      hasId: !!req.user.id,
      has_id: !!req.user._id,
      hasUserId: !!req.user.userId,
      idType: typeof req.user.id,
      _idType: typeof req.user._id
    } : 'No user object'
  });

  // Check if user is properly authenticated
  if (!req.user || !userId) {
    console.log("User not authenticated or missing ID");
    return res.status(401).json({
      success: false,
      error: 'User not authenticated'
    });
  }

  console.log("About to create message with userId:", userId, "type:", typeof userId);

  // Validate userId before proceeding
  if (!userId || userId === 'undefined' || typeof userId === 'undefined') {
    console.error("Invalid userId detected:", userId);
    return res.status(401).json({
      success: false,
      error: 'Invalid user ID'
    });
  }

  // Check if user actually exists in database
  const userExists = await User.findById(userId);
  if (!userExists) {
    console.error("User not found in database:", userId);
    return res.status(401).json({
      success: false,
      error: 'User not found'
    });
  }

  console.log("User validation passed:", userExists.name, userExists.email);

  const mentorship = await Mentorship.findById(mentorshipId)
  console.log("Found mentorship:", mentorship);
  
  if (!mentorship) {
    return res.status(404).json({
      success: false,
      error: 'Mentorship session not found'
    })
  }

  // Allow admin to message any mentor
  if (userRole === 'admin') {
    // Ensure userId is properly formatted for MongoDB
    const senderId = userId.toString();
    
    const message = await Message.create({
      mentorship: mentorshipId,
      sender: senderId,
      content,
      type
    })

    // Emit socket event for real-time updates
    if (req.io) {
      req.io.to(mentorshipId).emit('new_message', {
        message: await message.populate('sender', 'name avatar')
      })
    }

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

  let message;
  try {
    // Ensure userId is properly formatted for MongoDB
    const senderId = userId.toString();
    
    console.log("Attempting to create message with data:", {
      mentorship: mentorshipId,
      sender: senderId,
      content: content,
      type: type
    });

    message = await Message.create({
      mentorship: mentorshipId,
      sender: senderId,
      content,
      type
    })

    console.log("Created message successfully:", message);
    console.log("Message sender field:", message.sender);
  } catch (createError) {
    console.error("Error creating message:", createError);
    return res.status(500).json({
      success: false,
      error: 'Failed to create message: ' + createError.message
    });
  }

  // Emit socket event for real-time updates
  try {
    if (req.io) {
      console.log("About to populate message with sender ID:", message.sender);
      const populatedMessage = await Message.findById(message._id).populate('sender', 'name avatar');
      console.log("Populated message:", populatedMessage);
      console.log("Populated sender:", populatedMessage.sender);
      req.io.to(mentorshipId).emit('new_message', {
        message: populatedMessage
      });
    }
  } catch (socketError) {
    console.error("Socket emission error:", socketError);
    // Continue without failing the request
  }

  res.status(201).json({
    success: true,
    data: message
  })
})

// Send Voice Message
exports.sendVoiceMessage = asyncHandler(async (req, res) => {
  const { mentorshipId } = req.params
  
  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

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
  // Ensure userId is properly formatted for MongoDB
  const senderId = userId.toString();
  
  const message = await Message.create({
    mentorship: mentorshipId,
    sender: senderId,
    content: req.file.path,
    type: 'voice'
  })

  // Emit socket event for real-time updates
  if (req.io) {
    req.io.to(mentorshipId).emit('new_message', {
      message: await message.populate('sender', 'name avatar')
    })
  }

  res.status(201).json({
    success: true,
    data: message
  })
})

// Add Message Reaction
exports.addMessageReaction = asyncHandler(async (req, res) => {
  const { mentorshipId, messageId } = req.params
  const { emoji } = req.body
  
  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

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
  if (req.io) {
    req.io.to(mentorshipId).emit('message_reaction', {
      messageId,
      reactions: message.reactions
    })
  }

  res.json({
    success: true,
    data: message
  })
})

// Share Code
exports.shareCode = asyncHandler(async (req, res) => {
  const { mentorshipId } = req.params
  const { code, language } = req.body
  
  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

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
  // Ensure userId is properly formatted for MongoDB
  const senderId = userId.toString();
  
  const message = await Message.create({
    mentorship: mentorshipId,
    sender: senderId,
    content: code,
    type: 'code',
    metadata: { language }
  })

  // Emit socket event for real-time updates
  if (req.io) {
    req.io.to(mentorshipId).emit('new_message', {
      message: await message.populate('sender', 'name avatar')
    })
  }

  res.status(201).json({
    success: true,
    data: message
  })
})

// Share Screen
exports.shareScreen = asyncHandler(async (req, res) => {
  const { mentorshipId } = req.params
  const { image } = req.body
  
  // Use helper function to extract user ID consistently
  const userId = extractUserId(req.user);

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
  // Ensure userId is properly formatted for MongoDB
  const senderId = userId.toString();
  
  const message = await Message.create({
    mentorship: mentorshipId,
    sender: senderId,
    content: image,
    type: 'screen'
  })

  // Emit socket event for real-time updates
  if (req.io) {
    req.io.to(mentorshipId).emit('new_message', {
      message: await message.populate('sender', 'name avatar')
    })
  }

  res.status(201).json({
    success: true,
    data: message
  })
})

// Create admin-mentor chat session
exports.createAdminChat = asyncHandler(async (req, res) => {
  const { mentorId } = req.body;
  
  // Use helper function to extract user ID consistently
  const adminId = extractUserId(req.user);

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
