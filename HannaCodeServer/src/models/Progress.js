const mongoose = require("mongoose")

const ProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
      required: true,
    },
    completedLessons: [
      {
        lesson: {
          type: mongoose.Schema.ObjectId,
          ref: "Lesson",
        },
        completedAt: {
          type: Date,
          default: Date.now,
        },
        quizScore: {
          type: Number,
          min: 0,
          max: 100,
        },
      },
    ],
    lastAccessedLesson: {
      type: mongoose.Schema.ObjectId,
      ref: "Lesson",
    },
    percentageCompleted: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
    },
    lastAccessedAt: {
      type: Date,
      default: Date.now,
    },
    notes: [
      {
        lesson: {
          type: mongoose.Schema.ObjectId,
          ref: "Lesson",
        },
        content: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

// Create compound index to ensure a user can only have one progress record per course
ProgressSchema.index({ user: 1, course: 1 }, { unique: true })

// Update lastAccessedAt when progress is updated
ProgressSchema.pre("save", function (next) {
  this.lastAccessedAt = Date.now()
  next()
})

module.exports = mongoose.model("Progress", ProgressSchema)
