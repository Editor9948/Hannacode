const mongoose = require("mongoose")

const CertificateSchema = new mongoose.Schema(
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
    progress: {
      type: mongoose.Schema.ObjectId,
      ref: "Progress",
      required: true,
    },
    certificateId: {
      type: String,
      required: true,
      unique: true,
    },
    verificationCode: {
      type: String,
      required: true,
      unique: true,
    },
    issuedAt: {
      type: Date,
      default: Date.now,
    },
    certificateUrl: {
      type: String,
    },
    grade: {
      type: String,
      enum: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "Pass"],
      default: "Pass",
    },
    completionScore: {
      type: Number,
      min: 0,
      max: 100,
      default: 100,
    },
    metadata: {
      courseDuration: String,
      completionTime: Number, // Time taken to complete in days
      totalLessons: Number,
      quizScores: [Number],
      averageQuizScore: Number,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    revokedAt: {
      type: Date,
    },
    revokedReason: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

// Generate certificate ID
CertificateSchema.pre("save", function (next) {
  if (!this.certificateId) {
    // Generate format: HC-YYYY-MMDD-XXXXX (HannaCode-Year-MonthDay-Random)
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const random = Math.random().toString(36).substring(2, 7).toUpperCase()
    
    this.certificateId = `HC-${year}-${month}${day}-${random}`
  }
  
  if (!this.verificationCode) {
    // Generate 12-character verification code
    this.verificationCode = Math.random().toString(36).substring(2, 14).toUpperCase()
  }
  
  next()
})

// Virtual for certificate public URL
CertificateSchema.virtual("publicUrl").get(function () {
  return `${process.env.CLIENT_URL}/certificates/${this.certificateId}`
})

// Virtual for verification URL
CertificateSchema.virtual("verificationUrl").get(function () {
  return `${process.env.CLIENT_URL}/verify-certificate/${this.verificationCode}`
})

module.exports = mongoose.model("Certificate", CertificateSchema)
