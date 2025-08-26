const mongoose = require("mongoose")
const { pushCourseMetrics } = require('../services/courseMetricsService')

const ReviewSchema = new mongoose.Schema(
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
    rating: {
      type: Number,
      required: [true, "Please add a rating"],
      min: 1,
      max: 5,
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    comment: {
      type: String,
      required: [true, "Please add a comment"],
      maxlength: [1000, "Comment cannot be more than 1000 characters"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

// Create compound index to ensure a user can only have one review per course
ReviewSchema.index({ user: 1, course: 1 }, { unique: true })

// Update the updatedAt field on save
ReviewSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

// Hooks to broadcast metrics updates
ReviewSchema.post('save', async function(doc) {
  if (doc?.course) {
    await pushCourseMetrics(doc.course)
  }
})

ReviewSchema.post('remove', async function(doc) {
  if (doc?.course) {
    await pushCourseMetrics(doc.course)
  }
})

ReviewSchema.post('findOneAndUpdate', async function(result) {
  try {
    const doc = await this.model.findOne(this.getQuery())
    if (doc?.course) await pushCourseMetrics(doc.course)
  } catch (_) {}
})

ReviewSchema.post('findOneAndDelete', async function(result) {
  try {
    if (result?.course) await pushCourseMetrics(result.course)
  } catch (_) {}
})

module.exports = mongoose.model("Review", ReviewSchema) 