const Subscription = require("../models/Subscription")
const User = require("../models/User")
const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")
const stripe = require("../services/paystackService")
const { sendEmail } = require("../services/emailService")

// @desc    Get subscription plans
// @route   GET /api/subscriptions/plans
// @access  Public
exports.getSubscriptionPlans = asyncHandler(async (req, res, next) => {
  const plans = [
    {
      id: "monthly",
      name: "Monthly Plan",
      description: "Access to all courses and features for one month",
      price: 30000,
      interval: "month",
      features: ["Access to all courses", "Coding playground", "Course certificates", "Community access"],
    },
    {
      id: "annual",
      name: "Annual Plan",
      description: "Access to all courses and features for one year (save 20%)",
      price: 288000, // 30000 * 12 * 0.8 (20% discount)
      interval: "year",
      features: [
        "Access to all courses",
        "Coding playground",
        "Course certificates",
        "Community access",
        "Priority support",
        "2 free mentorship sessions",
      ],
    },
    {
      id: "lifetime",
      name: "Lifetime Access",
      description: "One-time payment for lifetime access",
      price: 499999,
      interval: "one-time",
      features: [
        "Lifetime access to all courses",
        "Coding playground",
        "Course certificates",
        "Community access",
        "Priority support",
        "5 free mentorship sessions",
        "Early access to new courses",
      ],
    },
  ]

  res.status(200).json({
    success: true,
    data: plans,
  })
})

// @desc    Create subscription
// @route   POST /api/subscriptions
// @access  Private
exports.createSubscription = asyncHandler(async (req, res, next) => {
  const { plan, paymentMethodId } = req.body

  // Validate plan
  const validPlans = ["monthly", "annual", "lifetime"]
  if (!validPlans.includes(plan)) {
    return next(new ErrorResponse(`Invalid plan selected`, 400))
  }

  // Get user
  const user = await User.findById(req.user.id)

  // Check if user already has an active subscription
  const existingSubscription = await Subscription.findOne({
    userId: user._id,
    status: { $in: ["active", "trialing"] },
  })

  if (existingSubscription) {
    return next(new ErrorResponse(`You already have an active subscription. Please cancel it first.`, 400))
  }

  // Create or get Stripe customer
  let customer
  if (user.stripeCustomerId) {
    customer = await stripe.customers.retrieve(user.stripeCustomerId)
  } else {
    customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      metadata: {
        userId: user._id.toString(),
      },
    })

    // Update user with Stripe customer ID
    user.stripeCustomerId = customer.id
    await user.save({ validateBeforeSave: false })
  }

  // Attach payment method to customer
  await stripe.paymentMethods.attach(paymentMethodId, {
    customer: customer.id,
  })

  // Set as default payment method
  await stripe.customers.update(customer.id, {
    invoice_settings: {
      default_payment_method: paymentMethodId,
    },
  })

  let subscriptionData
  let price

  // Handle different subscription types
  if (plan === "monthly") {
    price = 3000000 // ₦30,000 in kobo

    // Create subscription in Stripe
    subscriptionData = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: "usd",
            product: process.env.STRIPE_MONTHLY_PRODUCT_ID,
            unit_amount: price,
            recurring: {
              interval: "month",
            },
          },
        },
      ],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    })
  } else if (plan === "annual") {
    price = 19190 // $191.90 in cents

    // Create subscription in Stripe
    subscriptionData = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: "usd",
            product: process.env.STRIPE_ANNUAL_PRODUCT_ID,
            unit_amount: price,
            recurring: {
              interval: "year",
            },
          },
        },
      ],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    })
  price = 3000000 // for your own DB record, if needed
  } else if (plan === "annual") {
    // Use Stripe Price ID for recurring product
    subscriptionData = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: process.env.STRIPE_ANNUAL_PRICE_ID,
        },
      ],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    })
    price = 19190 // for your own DB record, if needed
  } else if (plan === "lifetime") {
    price = 49999 // $499.99 in cents

    // For lifetime, create a one-time invoice instead of subscription
    const invoice = await stripe.invoices.create({
      customer: customer.id,
      collection_method: "charge_automatically",
      auto_advance: true,
    })

    // Add line item
    await stripe.invoiceItems.create({
      customer: customer.id,
      price_data: {
        currency: "usd",
        product: process.env.STRIPE_LIFETIME_PRODUCT_ID,
        unit_amount: price,
      },
      invoice: invoice.id,
    })

    // Finalize and pay invoice
    const finalizedInvoice = await stripe.invoices.finalizeInvoice(invoice.id)
    await stripe.invoices.pay(finalizedInvoice.id)

    // Create a "fake" subscription record for lifetime access
    const subscription = await Subscription.create({
      userId: user._id,
      stripeCustomerId: customer.id,
      stripeSubscriptionId: `lifetime_${Date.now()}`, // Generate a unique ID
      plan: "lifetime",
      status: "active",
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(2099, 11, 31), // Far future date
      price: price / 100, // Convert cents to dollars
      currency: "usd",
      paymentMethod: paymentMethodId,
    })

    // Update user role to premium
    user.role = "premium"
    await user.save({ validateBeforeSave: false })

    // Send confirmation email
    try {
      await sendEmail({
        email: user.email,
        subject: "Subscription Confirmation - Lifetime Access",
        message: `Thank you for purchasing lifetime access to HannaCode! You now have unlimited access to all current and future courses.`,
      })
    } catch (err) {
      console.error("Email error:", err)
    }

    return res.status(201).json({
      success: true,
      data: subscription,
    })
  }

  // For monthly and annual plans, create subscription record
  if (plan !== "lifetime") {
    // Create subscription in database
    const subscription = await Subscription.create({
      userId: user._id,
      stripeCustomerId: customer.id,
      stripeSubscriptionId: subscriptionData.id,
      plan,
      status: subscriptionData.status,
      currentPeriodStart: new Date(subscriptionData.current_period_start * 1000),
      currentPeriodEnd: new Date(subscriptionData.current_period_end * 1000),
      cancelAtPeriodEnd: subscriptionData.cancel_at_period_end,
      price: price / 100, // Convert cents to dollars
      currency: "usd",
      paymentMethod: paymentMethodId,
    })

    // Update user role to premium
    user.role = "premium"
    await user.save({ validateBeforeSave: false })

    // Send confirmation email
    try {
      await sendEmail({
        email: user.email,
        subject: `Subscription Confirmation - ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
        message: `Thank you for subscribing to HannaCode! Your ${plan} subscription is now active.`,
      })
    } catch (err) {
      console.error("Email error:", err)
    }

    res.status(201).json({
      success: true,
      data: subscription,
    })
  }
})

// @desc    Get user subscription
// @route   GET /api/subscriptions/me
// @access  Private
exports.getSubscription = asyncHandler(async (req, res, next) => {
  const subscription = await Subscription.findOne({
    userId: req.user.id,
  }).sort("-createdAt")

  if (!subscription) {
    return next(new ErrorResponse(`No subscription found`, 404))
  }

  res.status(200).json({
    success: true,
    data: subscription,
  })
})

// @desc    Cancel subscription
// @route   POST /api/subscriptions/cancel
// @access  Private
exports.cancelSubscription = asyncHandler(async (req, res, next) => {
  const subscription = await Subscription.findOne({
    userId: req.user.id,
    status: { $in: ["active", "trialing"] },
  })

  if (!subscription) {
    return next(new ErrorResponse(`No active subscription found`, 404))
  }

  // For lifetime subscriptions, we need special handling
  if (subscription.plan === "lifetime") {
    return next(new ErrorResponse(`Lifetime subscriptions cannot be canceled`, 400))
  }

  // Cancel at period end in Stripe
  await stripe.subscriptions.update(subscription.stripeSubscriptionId, {
    cancel_at_period_end: true,
  })

  // Update subscription in database
  subscription.cancelAtPeriodEnd = true
  subscription.canceledAt = new Date()
  await subscription.save()

  // Send cancellation email
  try {
    await sendEmail({
      email: req.user.email,
      subject: "Subscription Cancellation",
      message: `Your subscription has been canceled. You will continue to have access until ${new Date(subscription.currentPeriodEnd).toLocaleDateString()}.`,
    })
  } catch (err) {
    console.error("Email error:", err)
  }

  res.status(200).json({
    success: true,
    data: subscription,
  })
})

// @desc    Get current user's subscription
// @route   GET /api/subscriptions/current
// @access  Private
exports.getCurrentSubscription = asyncHandler(async (req, res, next) => {
  const subscription = await Subscription.findOne({
    user: req.user.id,
    status: { $in: ["active", "trialing", "past_due"] },
  })
    .populate("user", "name email")
    .sort({ createdAt: -1 })

  if (!subscription) {
    return res.status(200).json({
      success: true,
      data: null,
      message: "No active subscription found",
    })
  }

  // Format the subscription data for frontend
  const subscriptionData = {
    id: subscription._id,
    plan: subscription.plan,
    status: subscription.status,
    currentPeriodStart: subscription.currentPeriodStart,
    currentPeriodEnd: subscription.currentPeriodEnd,
    cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
    price: subscription.price,
    currency: subscription.currency || 'NGN',
    paymentMethod: subscription.paymentMethod,
    createdAt: subscription.createdAt,
    updatedAt: subscription.updatedAt,
    nextBillingDate: subscription.currentPeriodEnd,
    // Format plan name for display
    planName: subscription.plan === 'monthly' ? 'Premium Monthly' : 
             subscription.plan === 'annual' ? 'Premium Annual' : 
             subscription.plan === 'lifetime' ? 'Lifetime Access' : 
             subscription.plan,
    // Format status for display
    statusDisplay: subscription.status === 'active' ? 'Active' :
                  subscription.status === 'trialing' ? 'Trial' :
                  subscription.status === 'past_due' ? 'Past Due' :
                  subscription.status,
  }

  res.status(200).json({
    success: true,
    data: subscriptionData,
  })
})

// @desc    Update payment method
// @route   PUT /api/subscriptions/payment-method
// @access  Private
exports.updatePaymentMethod = asyncHandler(async (req, res, next) => {
  const { paymentMethodId } = req.body

  const user = await User.findById(req.user.id)

  if (!user.stripeCustomerId) {
    return next(new ErrorResponse(`No customer profile found`, 404))
  }

  // Attach new payment method to customer
  await stripe.paymentMethods.attach(paymentMethodId, {
    customer: user.stripeCustomerId,
  })

  // Set as default payment method
  await stripe.customers.update(user.stripeCustomerId, {
    invoice_settings: {
      default_payment_method: paymentMethodId,
    },
  })

  // Update subscription payment method
  const subscription = await Subscription.findOne({
    userId: req.user.id,
    status: { $in: ["active", "trialing"] },
  })

  if (subscription) {
    subscription.paymentMethod = paymentMethodId
    await subscription.save()
  }

  res.status(200).json({
    success: true,
    message: "Payment method updated successfully",
  })
})

// @desc    Handle Stripe webhook
// @route   POST /api/subscriptions/webhook
// @access  Public
exports.handleStripeWebhook = asyncHandler(async (req, res, next) => {
  const signature = req.headers["stripe-signature"]

  let event
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    return next(new ErrorResponse(`Webhook signature verification failed`, 400))
  }

  // Handle the event
  switch (event.type) {
    case "customer.subscription.created":
      await handleSubscriptionCreated(event.data.object)
      break
    case "customer.subscription.updated":
      await handleSubscriptionUpdated(event.data.object)
      break
    case "customer.subscription.deleted":
      await handleSubscriptionDeleted(event.data.object)
      break
    case "invoice.payment_succeeded":
      await handleInvoicePaymentSucceeded(event.data.object)
      break
    case "invoice.payment_failed":
      await handleInvoicePaymentFailed(event.data.object)
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.status(200).json({ received: true })
})

// Helper functions for webhook handlers
async function handleSubscriptionCreated(subscription) {
  // This is handled by our createSubscription endpoint
  console.log("Subscription created:", subscription.id)
}

async function handleSubscriptionUpdated(subscription) {
  try {
    // Find subscription in database
    const dbSubscription = await Subscription.findOne({
      stripeSubscriptionId: subscription.id,
    })

    if (dbSubscription) {
      // Update subscription details
      dbSubscription.status = subscription.status
      dbSubscription.currentPeriodStart = new Date(subscription.current_period_start * 1000)
      dbSubscription.currentPeriodEnd = new Date(subscription.current_period_end * 1000)
      dbSubscription.cancelAtPeriodEnd = subscription.cancel_at_period_end

      if (subscription.canceled_at) {
        dbSubscription.canceledAt = new Date(subscription.canceled_at * 1000)
      }

      await dbSubscription.save()

      // Find user and update role if necessary
      const user = await User.findById(dbSubscription.userId)
      if (user) {
        if (subscription.status === "active" || subscription.status === "trialing") {
          if (user.role !== "admin") {
            // Don't downgrade admins
            user.role = "premium"
            await user.save()
          }
        } else {
          if (user.role !== "admin") {
            // Don't downgrade admins
            user.role = "user"
            await user.save()
          }
        }
      }
    }
  } catch (err) {
    console.error("Error updating subscription:", err)
  }
}

async function handleSubscriptionDeleted(subscription) {
  try {
    // Find subscription in database
    const dbSubscription = await Subscription.findOne({
      stripeSubscriptionId: subscription.id,
    })

    if (dbSubscription) {
      // Update subscription status
      dbSubscription.status = "canceled"
      dbSubscription.canceledAt = new Date()
      await dbSubscription.save()

      // Find user and downgrade role
      const user = await User.findById(dbSubscription.userId)
      if (user && user.role !== "admin") {
        // Don't downgrade admins
        user.role = "user"
        await user.save()
      }
    }
  } catch (err) {
    console.error("Error handling subscription deletion:", err)
  }
}

async function handleInvoicePaymentSucceeded(invoice) {
  try {
    if (invoice.subscription) {
      // Find subscription in database
      const dbSubscription = await Subscription.findOne({
        stripeSubscriptionId: invoice.subscription,
      })

      if (dbSubscription) {
        // Update subscription status to active
        dbSubscription.status = "active"
        await dbSubscription.save()

        // Find user and send email
        const user = await User.findById(dbSubscription.userId)
        if (user) {
          try {
            await sendEmail({
              email: user.email,
              subject: "Payment Successful",
              message: `Your payment of $${(invoice.amount_paid / 100).toFixed(2)} for your ${dbSubscription.plan} subscription was successful.`,
            })
          } catch (err) {
            console.error("Email error:", err)
          }
        }
      }
    }
  } catch (err) {
    console.error("Error handling payment success:", err)
  }
}

async function handleInvoicePaymentFailed(invoice) {
  try {
    if (invoice.subscription) {
      // Find subscription in database
      const dbSubscription = await Subscription.findOne({
        stripeSubscriptionId: invoice.subscription,
      })

      if (dbSubscription) {
        // Update subscription status
        dbSubscription.status = "past_due"
        await dbSubscription.save()

        // Find user and send email
        const user = await User.findById(dbSubscription.userId)
        if (user) {
          try {
            await sendEmail({
              email: user.email,
              subject: "Payment Failed",
              message: `Your payment of $${(invoice.amount_due / 100).toFixed(2)} for your ${dbSubscription.plan} subscription failed. Please update your payment method to continue your subscription.`,
            })
          } catch (err) {
            console.error("Email error:", err)
          }
        }
      }
    }
  } catch (err) {
    console.error("Error handling payment failure:", err)
  }

  }
