const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Module title is required"],
      trim: true,
      maxlength: 120,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    order: {
      type: Number,
      default: 1,
      min: 1,
    },
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
    description: {
      type: String,
      trim: true,
      default: "",
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
    timestamps: true,
  }
);

module.exports = mongoose.model("Module", ModuleSchema);