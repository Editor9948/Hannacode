const socketIO = require('socket.io')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Mentorship = require('../models/Mentorship')
const logger = require("../utils/logger")

let io

/**
 * Initialize Socket.IO server
 * @param {Object} server - HTTP server instance
 */
const initializeSocket = (server) => {
  if (!server) {
    throw new Error('Server instance is required for socket initialization')
  }

  try {
    io = socketIO(server, {
      cors: {
        origin: process.env.CLIENT_URL ,
        methods: ['GET', 'POST'],
        credentials: true
      }
    })

    // Authentication middleware
    io.use(async (socket, next) => {
      try {
        const token = socket.handshake.auth.token
        if (!token) {
          return next(new Error('Authentication error'))
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)
        
        if (!user) {
          return next(new Error('User not found'))
        }

        socket.user = user
        next()
      } catch (error) {
        logger.error('Socket authentication error:', error)
        next(new Error('Authentication error'))
      }
    })

    io.on('connection', (socket) => {
      logger.info(`User connected: ${socket.user.name}`)

      // Join mentorship chat room
      socket.on('join_mentorship', async (mentorshipId) => {
        try {
          const mentorship = await Mentorship.findById(mentorshipId)
          if (!mentorship) {
            return socket.emit('error', { message: 'Mentorship not found' })
          }

          // For admin sessions, check if user is admin or mentor
          if (mentorship.type === 'admin') {
            if (socket.user.role !== 'admin' && mentorship.mentorId.toString() !== socket.user.id) {
              return socket.emit('error', { message: 'Not authorized to join this chat' })
            }
          } else {
            // For regular sessions, check if user is student or mentor
            if (![mentorship.userId.toString(), mentorship.mentorId.toString()].includes(socket.user.id)) {
              return socket.emit('error', { message: 'Not authorized to join this chat' })
            }
          }

          socket.join(mentorshipId)
          socket.emit('joined_mentorship', { mentorshipId })
        } catch (error) {
          logger.error('Error joining mentorship chat:', error)
          socket.emit('error', { message: 'Error joining mentorship chat' })
        }
      })

      // Leave mentorship chat room
      socket.on('leave_mentorship', (mentorshipId) => {
        socket.leave(mentorshipId)
        socket.emit('left_mentorship', { mentorshipId })
      })

      // Typing indicator
      socket.on('typing', ({ mentorshipId, isTyping }) => {
        socket.to(mentorshipId).emit('user_typing', {
          userId: socket.user.id,
          name: socket.user.name,
          isTyping
        })
      })

      // Message reactions
      socket.on('message_reaction', ({ mentorshipId, messageId, emoji }) => {
        socket.to(mentorshipId).emit('reaction_added', {
          messageId,
          userId: socket.user.id,
          name: socket.user.name,
          emoji
        })
      })

      // Screen sharing
      socket.on('screen_share_start', ({ mentorshipId }) => {
        socket.to(mentorshipId).emit('screen_share_started', {
          userId: socket.user.id,
          name: socket.user.name
        })
      })

      socket.on('screen_share_stop', ({ mentorshipId }) => {
        socket.to(mentorshipId).emit('screen_share_stopped', {
          userId: socket.user.id,
          name: socket.user.name
        })
      })

      // Handle disconnection
      socket.on('disconnect', () => {
        logger.info(`User disconnected: ${socket.user.name}`)
      })

      // Handle errors
      socket.on('error', (error) => {
        logger.error('Socket error:', error)
      })
    })

    logger.info("Socket.IO initialized")
    return io
  } catch (error) {
    logger.error('Failed to initialize Socket.IO:', error)
    throw error
  }
}

/**
 * Get Socket.IO instance
 * @returns {Object} Socket.IO instance
 */
const getIO = () => {
  if (!io) {
    throw new Error('Socket.IO not initialized')
  }
  return io
}

/**
 * Send notification to a specific user
 * @param {string} userId - User ID
 * @param {string} type - Notification type
 * @param {Object} data - Notification data
 */
const sendNotification = (userId, type, data) => {
  if (!io) {
    logger.error("Socket.IO not initialized")
    return
  }

  io.to(`user:${userId}`).emit("notification", {
    type,
    data,
    timestamp: new Date(),
  })
}

/**
 * Send notification to all users
 * @param {string} type - Notification type
 * @param {Object} data - Notification data
 */
const broadcastNotification = (type, data) => {
  if (!io) {
    logger.error("Socket.IO not initialized")
    return
  }

  io.emit("notification", {
    type,
    data,
    timestamp: new Date(),
  })
}

module.exports = {
  initializeSocket,
  getIO,
  sendNotification,
  broadcastNotification
}
