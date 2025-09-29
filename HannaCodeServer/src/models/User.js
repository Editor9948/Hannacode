const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"],
      index: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
      validate: {
        validator: function(v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
        },
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      }
    },
     
  phone: {
  type: String,
  trim: true,
},
location: {
  type: String,
  trim: true,
},
    role: {
      type: String,
      enum: ["user", "premium", "admin" , "mentor"],
      default: "user",
    },
    profileImage: {
      type: String,
      default: "default-avatar.jpg",
    },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "offline",
    },
    specialties: {
      type: [String],
      enum: ["JavaScript", "HTML", "CSS", "PHP", "Python", "Java", "html", "C#", "C++","Ruby", "Go", "Swift"],
      default: [],
    },
    bio: {
      type: String,
      maxlength: [500, "Bio cannot be more than 500 characters"],
    },
    calendlyUrl: {
      type: String,
      trim: true,
      validate: {
        validator: function(v) {
          return !v || /^https:\/\/calendly\.com\//.test(v);
        },
        message: "Calendly URL must be a valid Calendly link"
      }
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    emailVerificationToken: String,
    emailVerificationExpire: Date,
    emailVerified: {
      type: Boolean,
      default: false,
    },
    // Array of linked OAuth providers (google, github, etc.)
    oauthProviders: [{
      provider: { type: String, enum: ['google','github'], required: true },
      providerId: { type: String, required: true },
      avatar: { type: String },
      linkedAt: { type: Date, default: Date.now }
    }],
    lastLogin: Date,
    loginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

// Create indexes
UserSchema.index({ email: 1 });
UserSchema.index({ resetPasswordToken: 1 });
UserSchema.index({ emailVerificationToken: 1 });
UserSchema.index({ lockUntil: 1 });
UserSchema.index({ 'oauthProviders.provider': 1, 'oauthProviders.providerId': 1 });

// Virtual field for user's progress
UserSchema.virtual("progress", {
  ref: "Progress",
  localField: "_id",
  foreignField: "user",
  justOne: false,
})

// Virtual field for user's subscription
UserSchema.virtual("subscription", {
  ref: "Subscription",
  localField: "_id",
  foreignField: "user",
  justOne: true,
})

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex")

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000 // 10 minutes

  return resetToken
}

// Generate email verification token
UserSchema.methods.getEmailVerificationToken = function () {
  // Generate token
  const verificationToken = crypto.randomBytes(20).toString("hex")

  // Hash token and set to emailVerificationToken field
  this.emailVerificationToken = crypto.createHash("sha256").update(verificationToken).digest("hex")
  
  // Set expiration (24 hours)
  this.emailVerificationExpire = Date.now() + 24 * 60 * 60 * 1000

  return verificationToken
}

// Add method to check if account is locked
UserSchema.methods.isLocked = function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
}

// Add method to increment login attempts
UserSchema.methods.incrementLoginAttempts = async function() {
  // If we have a previous lock that has expired, restart at 1
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return await this.updateOne({
      $set: { loginAttempts: 1 },
      $unset: { lockUntil: 1 }
    });
  }
  // Otherwise increment
  const updates = { $inc: { loginAttempts: 1 } };
  // Lock the account if we've reached max attempts
  if (this.loginAttempts + 1 >= 5) {
    updates.$set = { lockUntil: Date.now() + 2 * 60 * 60 * 1000 }; // 2 hours
  }
  return await this.updateOne(updates);
}

module.exports = mongoose.model("User", UserSchema)
