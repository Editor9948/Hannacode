const mongoose = require("mongoose")

const SubscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  stripeCustomerId: {
    type: String,
    required: true,
  },
  stripeSubscriptionId: {
    type: String,
    required: true,
  },
  stripePriceId: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    enum: ["monthly", "annual", "lifetime"],
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "canceled", "past_due", "unpaid", "trialing", "incomplete", "incomplete_expired"],
    default: "active",
  },
  currentPeriodStart: {
    type: Date,
    required: true,
  },
  currentPeriodEnd: {
    type: Date,
    required: true,
  },
  cancelAtPeriodEnd: {
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
})

// Update the updatedAt field on save
SubscriptionSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

module.exports = mongoose.model("Subscription", SubscriptionSchema)
