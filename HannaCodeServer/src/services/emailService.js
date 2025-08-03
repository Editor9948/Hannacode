const nodemailer = require("nodemailer")
const logger = require("../utils/logger")

/**
 * Create email transporter
 * @returns {Object} Nodemailer transporter
 */
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: false, // For port 587, secure should be false
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

/**
 * Send email
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text content
 * @param {string} options.html - HTML content
 * @returns {Promise} Promise with email info
 */
exports.sendEmail = async (options) => {
  try {
    const transporter = createTransporter()

    const message = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: options.to,
      subject: options.subject,
      text: options.text || "",
      html: options.html || "",
    }

    const info = await transporter.sendMail(message)
    logger.info(`Email sent: ${info.messageId}`)
    return info
  } catch (error) {
    logger.error(`Email error: ${error.message}`)
    throw error
  }
}

/**
 * Send welcome email
 * @param {Object} user - User object
 * @param {string} verificationUrl - Email verification URL
 * @returns {Promise} Promise with email info
 */
exports.sendWelcomeEmail = async (user, verificationUrl) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #22c55e;">Welcome to HannaCode!</h2>
      <p>Hi ${user.name},</p>
      <p>Thank you for joining HannaCode. We're excited to have you on board!</p>
      <p>Please verify your email address by clicking the button below:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationUrl}" style="background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email</a>
      </div>
      <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
      <p>${verificationUrl}</p>
      <p>Start exploring our courses and begin your coding journey today!</p>
      <p>Best regards,<br>The HannaCode Team</p>
    </div>
  `;
  console.log("Sending email with HTML:", html); // <-- Add this line


  return this.sendEmail({
    to: user.email,
    subject: "Welcome to HannaCode - Verify Your Email",
    html: html,
  });
};

/**
 * Send password reset email
 * @param {Object} user - User object
 * @param {string} resetUrl - Password reset URL
 * @returns {Promise} Promise with email info
 */
exports.sendPasswordResetEmail = async (user, resetUrl) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #22c55e;">Reset Your Password</h2>
      <p>Hi ${user.name},</p>
      <p>You are receiving this email because you (or someone else) has requested the reset of your password.</p>
      <p>Please click the button below to reset your password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reset Password</a>
      </div>
      <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
      <p>${resetUrl}</p>
      <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
      <p>Best regards,<br>The HannaCode Team</p>
    </div>
  `

  return this.sendEmail({
    to: user.email,
    subject: "HannaCode - Password Reset Request",
    html,
  })
}

/**
 * Send subscription confirmation email
 * @param {Object} user - User object
 * @param {Object} subscription - Subscription object
 * @returns {Promise} Promise with email info
 */
exports.sendSubscriptionConfirmationEmail = async (user, subscription) => {
  const planName = subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1)

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #22c55e;">Subscription Confirmation</h2>
      <p>Hi ${user.name},</p>
      <p>Thank you for subscribing to HannaCode ${planName} Plan!</p>
      <p>Your subscription is now active and you have full access to all premium features.</p>
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Subscription Details:</h3>
        <p><strong>Plan:</strong> ${planName}</p>
        <p><strong>Start Date:</strong> ${new Date(subscription.startDate).toLocaleDateString()}</p>
        ${subscription.endDate ? `<p><strong>End Date:</strong> ${new Date(subscription.endDate).toLocaleDateString()}</p>` : ""}
        <p><strong>Status:</strong> Active</p>
      </div>
      <p>Start exploring our premium courses and accelerate your learning journey today!</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.CLIENT_URL}/courses" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Explore Courses</a>
      </div>
      <p>If you have any questions about your subscription, please contact our support team.</p>
      <p>Best regards,<br>The HannaCode Team</p>
    </div>
  `

  return this.sendEmail({
    to: user.email,
    subject: `HannaCode - ${planName} Subscription Confirmation`,
    html,
  })
}

/**
 * Send mentorship booking confirmation email
 * @param {Object} user - User object
 * @param {Object} mentor - Mentor object
 * @param {Object} session - Mentorship session object
 * @returns {Promise} Promise with email info
 */
exports.sendMentorshipBookingEmail = async (user, mentor, session) => {
  const sessionDate = new Date(session.date).toLocaleString()

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #22c55e;">Mentorship Session Confirmed</h2>
      <p>Hi ${user.name},</p>
      <p>Your mentorship session has been successfully booked!</p>
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Session Details:</h3>
        <p><strong>Mentor:</strong> ${mentor.name}</p>
        <p><strong>Date & Time:</strong> ${sessionDate}</p>
        <p><strong>Duration:</strong> ${session.duration} minutes</p>
        <p><strong>Topic:</strong> ${session.topic}</p>
      </div>
      <p>Please make sure to join the session on time. You'll receive a reminder email 30 minutes before the session starts.</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.CLIENT_URL}/mentorship/${session._id}" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Session Details</a>
      </div>
      <p>If you need to reschedule or cancel, please do so at least 24 hours in advance.</p>
      <p>Best regards,<br>The HannaCode Team</p>
    </div>
  `

  return this.sendEmail({
    to: user.email,
    subject: "HannaCode - Mentorship Session Confirmation",
    html,
  })
}

/**
 * Send course completion certificate email
 * @param {Object} user - User object
 * @param {Object} course - Course object
 * @param {string} certificateUrl - Certificate URL
 * @returns {Promise} Promise with email info
 */
exports.sendCourseCompletionEmail = async (user, course, certificateUrl) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color:#22c55e;">Congratulations on Completing Your Course!</h2>
      <p>Hi ${user.name},</p>
      <p>We're excited to let you know that you've successfully completed the course:</p>
      <p style="font-size: 18px; font-weight: bold; color: #22c55e;">${course.title}</p>
      <p>This is a significant achievement, and we're proud of your dedication to learning and growth.</p>
      <p>Your certificate of completion is attached to this email. You can also download it by clicking the button below:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${certificateUrl}" style="background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Download Certificate</a>
      </div>
      <p>We hope you enjoyed the course and found it valuable. Don't forget to check out our other courses to continue your learning journey!</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.CLIENT_URL}/courses" style="background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Explore More Courses</a>
      </div>
      <p>Best regards,<br>The HannaCode Team</p>
    </div>
  `

  return this.sendEmail({
    to: user.email,
    subject: `HannaCode - Course Completion Certificate: ${course.title}`,
    html,
  })
}

/**
 * Send mentorship completion email
 * @param {Object} user - User object
 * @param {Object} mentor - Mentor object
 * @param {Object} session - Mentorship session object
 * @returns {Promise} Promise with email info
 */
exports.sendMentorshipCompletionEmail = async (user, mentor, session) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #22c55e;">Mentorship Session Completed</h2>
      <p>Hi ${user.name},</p>
      <p>Your mentorship session with ${mentor.name} has been marked as completed.</p>
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Session Details:</h3>
        <p><strong>Mentor:</strong> ${mentor.name}</p>
        <p><strong>Date & Time:</strong> ${new Date(session.scheduledDate).toLocaleString()}</p>
        <p><strong>Duration:</strong> ${session.duration} minutes</p>
        <p><strong>Topic:</strong> ${session.topic}</p>
      </div>
      <p>We hope you found this session valuable! Please take a moment to provide feedback on your experience.</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.CLIENT_URL}/mentorship/${session._id}/feedback" style="background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Provide Feedback</a>
      </div>
      <p>If you'd like to book another session, you can do so through your dashboard.</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.CLIENT_URL}/mentorship" style="background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Book Another Session</a>
      </div>
      <p>Best regards,<br>The HannaCode Team</p>
    </div>
  `

  return this.sendEmail({
    to: user.email,
    subject: "HannaCode - Mentorship Session Completed",
    html,
  })
}
