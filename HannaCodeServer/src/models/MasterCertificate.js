const mongoose = require("mongoose")

const MasterCertificateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
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
    certificateType: {
      type: String,
      default: "Master Certificate",
      enum: ["Master Certificate", "Specialization Certificate", "Program Certificate"]
    },
    completedCourses: [{
      course: {
        type: mongoose.Schema.ObjectId,
        ref: "Course",
        required: true,
      },
      certificateId: String,
      completedAt: Date,
      grade: String
    }],
    totalCoursesCompleted: {
      type: Number,
      required: true,
    },
    programName: {
      type: String,
      default: "HannaCode Full Stack Development Program",
    },
    issuedAt: {
      type: Date,
      default: Date.now,
    },
    certificateUrl: {
      type: String,
    },
    overallGrade: {
      type: String,
      enum: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "Pass"],
      default: "Pass",
    },
    averageScore: {
      type: Number,
      min: 0,
      max: 100,
      default: 85,
    },
    achievements: [{
      title: String,
      description: String,
      earnedAt: Date
    }],
    studyDuration: {
      totalDays: Number,
      intensiveStudy: Boolean,
      partTimeStudy: Boolean
    },
    skills: [String],
    projects: [{
      name: String,
      description: String,
      technologies: [String]
    }],
    metadata: {
      totalLessons: Number,
      totalQuizzes: Number,
      totalProjects: Number,
      averageQuizScore: Number,
      certificateGeneration: {
        generatedAt: Date,
        version: String,
        template: String
      }
    }
  },
  {
    timestamps: true,
  }
)

// Generate certificate ID automatically
MasterCertificateSchema.pre("save", function (next) {
  if (!this.certificateId) {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    const random = Math.random().toString(36).substring(2, 7).toUpperCase()
    this.certificateId = `HC-MASTER-${year}-${month}${day}-${random}`
  }
  next()
})

// Generate verification code automatically
MasterCertificateSchema.pre("save", function (next) {
  if (!this.verificationCode) {
    const random = Math.random().toString(36).substring(2, 10).toUpperCase()
    this.verificationCode = `MASTER-${random}`
  }
  next()
})

// Virtual for public certificate URL
MasterCertificateSchema.virtual("publicUrl").get(function () {
  return `${process.env.FRONTEND_URL}/master-certificate/${this.certificateId}`
})

// Virtual for verification URL
MasterCertificateSchema.virtual("verificationUrl").get(function () {
  return `${process.env.FRONTEND_URL}/verify-certificate/${this.verificationCode}`
})

// Method to calculate overall grade based on individual course grades
MasterCertificateSchema.methods.calculateOverallGrade = function() {
  const gradePoints = {
    "A+": 4.0,
    "A": 3.7,
    "A-": 3.3,
    "B+": 3.0,
    "B": 2.7,
    "B-": 2.3,
    "C+": 2.0,
    "C": 1.7,
    "C-": 1.3,
    "Pass": 2.0
  }

  if (this.completedCourses.length === 0) return "Pass"

  const totalPoints = this.completedCourses.reduce((sum, course) => {
    return sum + (gradePoints[course.grade] || 2.0)
  }, 0)

  const averagePoints = totalPoints / this.completedCourses.length

  if (averagePoints >= 3.8) return "A+"
  if (averagePoints >= 3.5) return "A"
  if (averagePoints >= 3.0) return "A-"
  if (averagePoints >= 2.8) return "B+"
  if (averagePoints >= 2.5) return "B"
  if (averagePoints >= 2.0) return "B-"
  return "C+"
}

module.exports = mongoose.model("MasterCertificate", MasterCertificateSchema)
