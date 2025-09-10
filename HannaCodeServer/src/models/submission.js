const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema(
  {
    userId: { type: String, index: true, required: true },
    challengeId: { type: String, index: true, required: true },
    language: { type: String, default: "javascript" },
    code: { type: String, default: "" },
    passed: { type: Boolean, default: false, index: true },
    score: { type: Number, default: 0 },
    details: { type: String, default: "" },
    reviewed: { type: Boolean, default: false },
    feedback: { type: String, default: null },
    reviewedBy: { type: String, default: null },
    reviewedAt: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now, expires: "5d" } // auto-delete after 5 days
  },
  { versionKey: false }
);

SubmissionSchema.index({ userId: 1, createdAt: -1 });
SubmissionSchema.index({ challengeId: 1, createdAt: -1 });

module.exports = mongoose.model("Submission", SubmissionSchema);