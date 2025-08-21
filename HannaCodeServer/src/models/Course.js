const mongoose = require("mongoose")
const slugify = require("slugify")

const CourseSchema = new mongoose.Schema(
 
  {
     modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
    title: {
      type: String,
      required: [true, "Please add a course title"],
      unique: true,
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    slug: String,
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [2000, "Description cannot be more than 2000 characters"],
    },
    shortDescription: {
      type: String,
      required: [true, "Please add a short description"],
      maxlength: [500, "Short description cannot be more than 500 characters"],
    },
    level: {
      type: String,
      required: [true, "Please add a difficulty level"],
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner"
    },
    language: {
      type: String,
      required: [true, "Please add a programming language"],
      enum: ["javascript", "python", "java", "csharp", "css", "html", "ruby", "go", "rust", "php", "cpp","dart","other"],
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      default: "Web Development",
      enum: ["Web Development", "Mobile Development", "Data Science", "Game Development", "frontend", "backend", "Other"]
    },
    duration: {
      type: Number,
      required: [true, "Please add course duration in minutes"],
    },
    coverImage: {
      type: String,
      default: "default-course.jpg",
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    tags: [String],
    prerequisites: [String],
    lessonCount: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    enrolledStudents: {
      type: Number,
      default: 0,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, // Changed from string default to null for proper ObjectId reference
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

// Create course slug from the title
CourseSchema.pre("save", function (next) {
  if (this.isModified('title')) {
    this.slug = slugify(this.title, { 
      lower: true,
      strict: true,
      trim: true
    });
  }
  next()
})

// Update the updatedAt field on save
CourseSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  this.lastUpdated = Date.now()
  next()
})

// Cascade delete lessons when a course is deleted
CourseSchema.pre("remove", async function (next) {
  await this.model("Lesson").deleteMany({ course: this._id })
  next()
})

// Reverse populate with lessons
CourseSchema.virtual("lessons", {
  ref: "Lesson",
  localField: "_id",
  foreignField: "course",
  justOne: false,
})

// Virtual for average rating
CourseSchema.virtual("averageRating", {
  ref: "Review",
  localField: "_id",
  foreignField: "course",
  justOne: false,
  options: { sort: { createdAt: -1 } },
})

module.exports = mongoose.model("Course", CourseSchema)
