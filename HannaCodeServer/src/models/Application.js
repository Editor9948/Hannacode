const mongoose = require("mongoose");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const urlRegex = /^(https?:\/\/)([\w-]+\.)+[\w-]+(:\d+)?(\/[^\s]*)?$/i;

const ApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
      match: emailRegex,
      index: true
    },
    phone: { type: String, trim: true, maxlength: 32 },
    role: { type: String, required: true, trim: true, minlength: 2, maxlength: 80, index: true },
    message: { type: String, trim: true, maxlength: 5000 },
    portfolioUrl: {
      type: String,
      trim: true,
      maxlength: 2048,
      validate: { validator: (v) => !v || urlRegex.test(v), message: "Invalid portfolioUrl" }
    },
    resumeUrl: {
      type: String,
      trim: true,
      maxlength: 2048,
      validate: { validator: (v) => !v || urlRegex.test(v), message: "Invalid resumeUrl" }
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
      index: true
    },
    extra: { type: mongoose.Schema.Types.Mixed, default: null },
    clientMeta: {
      ip: { type: String, trim: true, maxlength: 64 },
      userAgent: { type: String, trim: true, maxlength: 512 },
      referer: { type: String, trim: true, maxlength: 2048 }
    },
    decision: {
      by: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
      name: { type: String, trim: true, maxlength: 100 },
      at: { type: Date, default: null },
      reason: { type: String, trim: true, maxlength: 1000 }
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },

    // Timestamps in same style as your submission model
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

// Keep updatedAt fresh
ApplicationSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});
ApplicationSchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

// Indexes
ApplicationSchema.index({ status: 1, createdAt: -1 });
ApplicationSchema.index({ email: 1, role: 1, status: 1 });
ApplicationSchema.index(
  { name: "text", email: "text", role: "text", message: "text" },
  { weights: { name: 5, email: 4, role: 3, message: 1 } }
);
// Prevent duplicate pending applications by same email+role
ApplicationSchema.index(
  { email: 1, role: 1 },
  { unique: true, partialFilterExpression: { status: "pending" }, name: "uniq_pending_email_role" }
);

module.exports = mongoose.model("Application", ApplicationSchema);