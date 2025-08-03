const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const User = require("../models/User")
const Subscription = require("../models/Subscription")
const logger = require("../utils/logger")
const { SUBSCRIPTION_PLANS, SUBSCRIPTION_STATUSES } = require("../utils/constants")
const emailService = require("./emailService")

/**
 * Create a Stripe customer
 * @param {Object} user - User object
 * @returns {Object} Stripe customer
 */
exports.createCustomer = async (user) => {
  try {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      metadata: {
        userId: user._id.toString(),
      },
    })

    logger.info(`Stripe customer created for user ${user._id}: ${customer.id}`)
    return customer
  } catch (error) {
    logger.error(`Error creating Stripe customer: ${error.message}`)
    throw error
  }
}

/**
 * Get product details by plan
 * @param {string} plan - Subscription plan
 * @returns {string} Product ID
 */
const getProductIdByPlan = (plan) => {
  switch (plan) {
    case SUBSCRIPTION_PLANS.MONTHLY:
      return process.env.STRIPE_MONTHLY_PRODUCT_ID
    case SUBSCRIPTION_PLANS.ANNUAL:
      return process.env.STRIPE_ANNUAL_PRODUCT_ID
    case SUBSCRIPTION_PLANS.LIFETIME:
      return process.env.STRIPE_LIFETIME_PRODUCT_ID
    default:
      throw new Error(`Invalid plan: ${plan}`)
  }
}

/**
 * Create a checkout session
 * @param {Object} options - Checkout options
 * @param {string} options.userId - User ID
 * @param {string} options.plan - Subscription plan
 * @param {string} options.customerId - Stripe customer ID
 * @returns {Object} Checkout session
 */
exports.createCheckoutSession = async ({ userId, plan, customerId }) => {
  try {
    const productId = getProductIdByPlan(plan)

    // Get price ID for the product
    const prices = await stripe.prices.list({
      product: productId,
      active: true,
      limit: 1,
    })

    if (prices.data.length === 0) {
      throw new Error(`No active price found for product ${productId}`)
    }

    const priceId = prices.data[0].id

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: plan === SUBSCRIPTION_PLANS.LIFETIME ? "payment" : "subscription",
      success_url: `${process.env.CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payment/cancel`,
      metadata: {
        userId,
        plan,
      },
    })

    logger.info(`Checkout session created for user ${userId}: ${session.id}`)
    return session
  } catch (error) {
    logger.error(`Error creating checkout session: ${error.message}`)
    throw error
  }
}

/**
 * Handle successful checkout
 * @param {string} sessionId - Checkout session ID
 * @returns {Object} Subscription object
 */
exports.handleSuccessfulCheckout = async (sessionId) => {
  try {
    // Retrieve checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    const { userId, plan } = session.metadata

    // Get user
    const user = await User.findById(userId)

    if (!user) {
      throw new Error(`User not found: ${userId}`)
    }

    // Calculate subscription dates
    const startDate = new Date()
    let endDate = null

    if (plan === SUBSCRIPTION_PLANS.MONTHLY) {
      endDate = new Date()
      endDate.setMonth(endDate.getMonth() + 1)
    } else if (plan === SUBSCRIPTION_PLANS.ANNUAL) {
      endDate = new Date()
      endDate.setFullYear(endDate.getFullYear() + 1)
    }
    // Lifetime subscription has no end date

    // Create or update subscription
    let subscription = await Subscription.findOne({ user: userId })

    if (subscription) {
      // Update existing subscription
      subscription.plan = plan
      subscription.startDate = startDate
      subscription.endDate = endDate
      subscription.status = SUBSCRIPTION_STATUSES.ACTIVE
      subscription.stripeCustomerId = session.customer

      if (plan !== SUBSCRIPTION_PLANS.LIFETIME && session.subscription) {
        subscription.stripeSubscriptionId = session.subscription
      }

      await subscription.save()
    } else {
      // Create new subscription
      subscription = await Subscription.create({
        user: userId,
        plan,
        startDate,
        endDate,
        status: SUBSCRIPTION_STATUSES.ACTIVE,
        stripeCustomerId: session.customer,
        stripeSubscriptionId: plan !== SUBSCRIPTION_PLANS.LIFETIME ? session.subscription : null,
      })
    }

    // Update user role to premium
    user.role = "premium"
    await user.save()

    // Send confirmation email
    await emailService.sendSubscriptionConfirmationEmail(user, subscription)

    logger.info(`Subscription created/updated for user ${userId}: ${subscription._id}`)
    return subscription
  } catch (error) {
    logger.error(`Error handling successful checkout: ${error.message}`)
    throw error
  }
}

/**
 * Cancel subscription
 * @param {string} userId - User ID
 * @returns {Object} Canceled subscription
 */
exports.cancelSubscription = async (userId) => {
  try {
    // Get subscription
    const subscription = await Subscription.findOne({ user: userId })

    if (!subscription) {
      throw new Error(`Subscription not found for user: ${userId}`)
    }

    // Only cancel active subscriptions with a Stripe subscription ID
    if (subscription.status === SUBSCRIPTION_STATUSES.ACTIVE && subscription.stripeSubscriptionId) {
      // Cancel subscription in Stripe
      await stripe.subscriptions.cancel(subscription.stripeSubscriptionId)

      // Update subscription status
      subscription.status = SUBSCRIPTION_STATUSES.CANCELED
      await subscription.save()

      logger.info(`Subscription canceled for user ${userId}: ${subscription._id}`)
    }

    return subscription
  } catch (error) {
    logger.error(`Error canceling subscription: ${error.message}`)
    throw error
  }
}

/**
 * Handle webhook events
 * @param {Object} event - Stripe event
 */
exports.handleWebhookEvent = async (event) => {
  try {
    const { type, data } = event

    switch (type) {
      case "checkout.session.completed":
        await this.handleSuccessfulCheckout(data.object.id)
        break

      case "customer.subscription.updated":
        await this.handleSubscriptionUpdate(data.object)
        break

      case "customer.subscription.deleted":
        await this.handleSubscriptionCancellation(data.object)
        break

      case "invoice.payment_failed":
        await this.handleFailedPayment(data.object)
        break

      default:
        logger.info(`Unhandled event type: ${type}`)
    }
  } catch (error) {
    logger.error(`Error handling webhook event: ${error.message}`)
    throw error
  }
}

/**
 * Handle subscription update
 * @param {Object} subscriptionData - Stripe subscription data
 */
exports.handleSubscriptionUpdate = async (subscriptionData) => {
  try {
    // Find subscription by Stripe subscription ID
    const subscription = await Subscription.findOne({
      stripeSubscriptionId: subscriptionData.id,
    })

    if (!subscription) {
      logger.warn(`Subscription not found for Stripe subscription ID: ${subscriptionData.id}`)
      return
    }

    // Update subscription status
    subscription.status =
      subscriptionData.status === "active" ? SUBSCRIPTION_STATUSES.ACTIVE : SUBSCRIPTION_STATUSES.CANCELED

    await subscription.save()

    logger.info(`Subscription updated: ${subscription._id}, status: ${subscription.status}`)
  } catch (error) {
    logger.error(`Error handling subscription update: ${error.message}`)
    throw error
  }
}

/**
 * Handle subscription cancellation
 * @param {Object} subscriptionData - Stripe subscription data
 */
exports.handleSubscriptionCancellation = async (subscriptionData) => {
  try {
    // Find subscription by Stripe subscription ID
    const subscription = await Subscription.findOne({
      stripeSubscriptionId: subscriptionData.id,
    })

    if (!subscription) {
      logger.warn(`Subscription not found for Stripe subscription ID: ${subscriptionData.id}`)
      return
    }

    // Update subscription status
    subscription.status = SUBSCRIPTION_STATUSES.CANCELED
    await subscription.save()

    // Get user
    const user = await User.findById(subscription.user)

    if (user) {
      // Downgrade user role if they have no other active subscriptions
      const activeSubscriptions = await Subscription.countDocuments({
        user: user._id,
        status: SUBSCRIPTION_STATUSES.ACTIVE,
      })

      if (activeSubscriptions === 0) {
        user.role = "user"
        await user.save()

        logger.info(`User ${user._id} downgraded to regular user`)
      }
    }

    logger.info(`Subscription canceled: ${subscription._id}`)
  } catch (error) {
    logger.error(`Error handling subscription cancellation: ${error.message}`)
    throw error
  }
}

/**
 * Handle failed payment
 * @param {Object} invoiceData - Stripe invoice data
 */
exports.handleFailedPayment = async (invoiceData) => {
  try {
    // Find subscription by Stripe subscription ID
    const subscription = await Subscription.findOne({
      stripeSubscriptionId: invoiceData.subscription,
    })

    if (!subscription) {
      logger.warn(`Subscription not found for Stripe subscription ID: ${invoiceData.subscription}`)
      return
    }

    // Get user
    const user = await User.findById(subscription.user)

    if (!user) {
      logger.warn(`User not found for subscription: ${subscription._id}`)
      return
    }

    // Send payment failed email
    // Implementation depends on your email service
    await emailService.sendEmail({
      to: user.email,
      subject: "HannaCode - Payment Failed",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">Payment Failed</h2>
          <p>Hi ${user.name},</p>
          <p>We were unable to process your subscription payment. Please update your payment method to continue enjoying premium features.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.CLIENT_URL}/settings/billing" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Update Payment Method</a>
          </div>
          <p>If you need any assistance, please contact our support team.</p>
          <p>Best regards,<br>The HannaCode Team</p>
        </div>
      `,
    })

    logger.info(`Payment failed email sent to user ${user._id}`)
  } catch (error) {
    logger.error(`Error handling failed payment: ${error.message}`)
    throw error
  }
}

/**
 * Create a payment intent
 * @param {Object} options - Payment intent options
 * @param {number} options.amount - Amount in cents
 * @param {string} options.currency - Currency code
 * @param {Object} options.metadata - Additional metadata
 * @returns {Object} Payment intent
 */
exports.createPaymentIntent = async ({ amount, currency, metadata }) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata,
    })

    logger.info(`Payment intent created: ${paymentIntent.id}`)
    return paymentIntent
  } catch (error) {
    logger.error(`Error creating payment intent: ${error.message}`)
    throw error
  }
}
