const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  mentorship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentorship',
    required: true
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['text', 'code', 'voice', 'screen'],
    default: 'text'
  },
  metadata: {
    language: String, // For code messages
    duration: Number, // For voice messages
    size: Number, // For file size
    mimeType: String // For file type
  },
  reactions: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    emoji: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  readBy: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    readAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
})

// Index for faster queries
messageSchema.index({ mentorship: 1, createdAt: -1 })
messageSchema.index({ sender: 1 })
messageSchema.index({ 'reactions.user': 1 })

// TTL index to auto-delete messages after 7 days (604800 seconds)
messageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 604800 })

module.exports = mongoose.model('Message', messageSchema)
