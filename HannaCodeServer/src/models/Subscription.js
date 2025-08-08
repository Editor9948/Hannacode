const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  // Paystack fields
  paystackCustomerCode: {
    type: String,
    required: true,
  },
  paystackSubscriptionCode: {
    type: String,
    required: true,
  },
  paystackPlanCode: {
    type: String,
    required: true,
  },
  paystackAuthorizationCode: {
    type: String,
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
  // Additional Paystack fields
  paystackNextPaymentDate: {
    type: Date,
  },
  paystackLastPaymentDate: {
    type: Date,
  },
  paystackInvoiceCode: {
    type: String,
  },
});

// Update the updatedAt field on save
SubscriptionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Indexes for Paystack fields
SubscriptionSchema.index({ paystackCustomerCode: 1 });
SubscriptionSchema.index({ paystackSubscriptionCode: 1 });
SubscriptionSchema.index({ paystackPlanCode: 1 });

module.exports = mongoose.model("Subscription", SubscriptionSchema);
