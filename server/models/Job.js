const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      enum: ["Remote", "In-office"],
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    openings: {
        type: Number,
        default: 1,
        required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
