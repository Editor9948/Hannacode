const mongoose = require("mongoose")

const MentorshipSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  mentorId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["scheduled", "completed", "canceled", "active"],
    default: "scheduled",
  },
  type: {
    type: String,
    enum: ["regular", "admin"],
    default: "regular",
  },
  sessionType: {
    type: String,
    enum: ["one-time", "package"],
    default: "one-time",
  },
  scheduledDate: {
    type: Date,
  },
  duration: {
    type: Number,
    default: 60, // Duration in minutes
  },
  topic: {
    type: String,
    maxlength: [200, "Topic cannot be more than 200 characters"],
  },
  description: {
    type: String,
    maxlength: [1000, "Description cannot be more than 1000 characters"],
  },
  price: {
    type: Number,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "refunded"],
    default: "pending",
  },
  calendlyEventId: {
    type: String,
  },
  meetingUrl: {
    type: String,
  },
  notes: {
    type: String,
    maxlength: [1000, "Notes cannot be more than 1000 characters"],
  },
  feedback: {
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      maxlength: [500, "Feedback comment cannot be more than 500 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  completedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Update the updatedAt field on save
MentorshipSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

module.exports = mongoose.model("Mentorship", MentorshipSchema)
