const mongoose = require("mongoose")
const slugify = require("slugify")

const LessonSchema = new mongoose.Schema(
  {
    module: { type: mongoose.Schema.Types.ObjectId, ref: "Module" },
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    slug: String,
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    content: {
      type: String,
      required: [true, "Please add content"],
    },
    videoUrl: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "Please use a valid URL with HTTP or HTTPS",
      ],
    },
    duration: {
      type: Number,
      required: [true, "Please add duration in minutes"],
    },
    order: {
      type: Number,
      required: [true, "Please add lesson order"],
    },
    course: {
      type: mongoose.Schema.ObjectId,
      ref: "Course",
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    resources: [
      {
        title: String,
        url: String,
        type: {
          type: String,
          enum: ["pdf", "link", "code", "other"],
        },
      },
    ],
    // Parsed from markdown section: ### Practice Exercises
    exercises: {
      type: [String],
      default: [],
    },
    quiz: [
      {
        question: String,
        options: [String],
        correctAnswer: Number,
        explanation: String,
      },
    ],
    codeExamples: [
      {
        title: { type: String, required: true },
        language: { 
          type: String, 
          enum: ['javascript','css','html','python','php','dart','cpp','java','csharp','go','rust','mongodb','plaintext'],
          default: 'plaintext'
        },
        code: { type: String, required: true },
        explanation: { type: String, required: true }
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    publishedAt: {
     type: Date,
     },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

// Create lesson slug from the title
LessonSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true })
  next()
})

// Update the updatedAt field on save
LessonSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

// Create index for course and order
LessonSchema.index({ course: 1, order: 1 }, { unique: true })

module.exports = mongoose.model("Lesson", LessonSchema)
