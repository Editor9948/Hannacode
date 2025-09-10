const nodemailer = require("nodemailer")
const logger = require("../utils/logger")

/**
 * Create HannaCode email template with banner
 * @param {string} content - Email content     <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="color: #dc2626; margin-bottom: 8px;">🔐 Reset Your Password</h2>
      <p style="font-size: 18px; color: #000;">Hi ${user.name},</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #fef7f7 0%, #fee2e2 100%); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #dc2626;">
      <p style="margin: 0; font-size: 16px; color: #000;">
         <strong>Password Reset Request</strong><br>
        We received a request to reset your password for your HannaCode account.
      </p>
    </div>
    
    <p style="color: #000; line-height: 1.6; margin: 15px 0;">
      If you requested this password reset, click the button below to create a new password:
    </p>
    
    <div style="text-align: center; margin: 25px 0;">string} title - Email title
 * @returns {string} Complete HTML email template
 */
const createEmailTemplate = (content, title = "HannaCode") => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9fafb; }
        .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { padding: 15px; text-align: center; background-color: #ffffff; border-bottom: 1px solid #e5e7eb; }
        .logo-img { max-width: 200px; height: auto; }
        .content { padding: 20px; background-color: #ffffff; }
        .footer { background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #000; border-top: 1px solid #e5e7eb; }
        .footer a { color: #22c55e; text-decoration: none; }
        .social-links { margin: 15px 0; }
        .social-links a { margin: 0 10px; color: #22c55e; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header with Logo -->
        <div class="header">
          <!-- Logo image with fallback -->
          <div style="color: #22c55e; padding: 15px; text-align: center; margin: 0; border-radius: 0;">
            <img src="https://hannacode.com/hannabanner.jpg" alt="HannaCode Logo" class="logo-img" style="max-width: 450px; height: auto; margin-bottom: 5px; display: block; margin-left: auto; margin-right: auto;" />
          </div>
        </div>
        
        <!-- Content -->
        <div class="content">
          ${content}
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <div class="social-links">
            <a href="${process.env.CLIENT_URL}">🌐 Website</a>
            <a href="mailto:support@hannacode.com">📧 Email</a>
            <a href="#">💼 LinkedIn</a>
            <a href="#">🐦 Twitter</a>
          </div>
          <p>© ${new Date().getFullYear()} HannaCode. All rights reserved.</p>
          <p>You're receiving this email because you're part of the HannaCode community.</p>
          <p><a href="#">Unsubscribe</a> | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Create email transporter
 * @returns {Object} Nodemailer transporter
 */
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: true, // true for 465, false for 587
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
  const content = `
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="color: #22c55e; margin-bottom: 8px;">Welcome to HannaCode!</h2>
      <p style="font-size: 18px; color: #000;">Hi ${user.name}, 👋</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #22c55e;">
      <p style="margin: 0; font-size: 16px; color: #000;">
        <strong>Congratulations!</strong> You've just joined thousands of developers who are accelerating their coding journey with HannaCode.
      </p>
    </div>
    
    <p style="color: #000; line-height: 1.6; margin: 15px 0;">
      Thank you for joining our community! We're excited to have you on board and can't wait to see what amazing projects you'll build.
    </p>
    
    <p style="color: #000; line-height: 1.6; margin: 15px 0;">
      To get started, please verify your email address by clicking the button below:
    </p>
    
    <div style="text-align: center; margin: 25px 0;">
      <a href="${verificationUrl}" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3); transition: transform 0.2s;">
        Verify Email Address
      </a>
    </div>
    
    <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
      <p style="margin: 0 0 8px 0; color: #000; font-weight: bold;">What's next?</p>
      <ul style="color: #000; line-height: 1.6; margin: 0; padding-left: 20px;">
        <li>Explore our comprehensive coding courses</li>
        <li>Join our vibrant developer community</li>
        <li>Access premium mentorship programs</li>
        <li>Build real-world projects with guided tutorials</li>
      </ul>
    </div>
    
    <p style="color: #000; font-size: 14px; margin: 20px 0;">
      <strong>Having trouble with the button?</strong> Copy and paste this link into your browser:<br>
      <a href="${verificationUrl}" style="color: #22c55e; word-break: break-all;">${verificationUrl}</a>
    </p>
    
    <div style="text-align: center; margin: 25px 0; padding-top: 20px; border-top: 2px solid #dcfce7;">
      <p style="color: #000; margin-bottom: 15px; font-weight: bold;">Ready to start your coding journey?</p>
      <a href="${process.env.CLIENT_URL}/courses" style="display: inline-block; background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; box-shadow: 0 4px 12px rgba(132, 204, 22, 0.3);">
         Explore Courses
      </a>
    </div>
  `;

  const html = createEmailTemplate(content, "Welcome to HannaCode!");
  console.log("Sending welcome email with branded template");

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
  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #22c55e; margin-bottom: 10px;"> Reset Your Password</h2>
      <p style="font-size: 18px; color: #000;">Hi ${user.name},</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #e7feef 0%, #dcfce7 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #22c55e;">
      <p style="margin: 0; font-size: 16px; color: #000;">
         <strong>Password Reset Request</strong><br>
        We received a request to reset your password for your HannaCode account.
      </p>
    </div>
    
    <p style="color: #000; line-height: 1.6;">
      If you requested this password reset, click the button below to create a new password:
    </p>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="${resetUrl}" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);">
         Reset Password
      </a>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #22c55e;">
  <p style="margin: 0 0 8px 0; color: #000; font-weight: bold;">⚠️ Security Notice:</p>
  <ul style="color: #000; line-height: 1.5; margin: 0; padding-left: 20px;">
        <li>This link will expire in 1 hour for security reasons</li>
        <li>If you didn't request this reset, please ignore this email</li>
        <li>Your password will remain unchanged if you don't click the link</li>
        <li>Contact support if you have concerns about your account security</li>
      </ul>
    </div>
    
    <p style="color: #000; font-size: 14px; margin: 20px 0;">
      <strong>Having trouble with the button?</strong> Copy and paste this link into your browser:<br>
      <a href="${resetUrl}" style="color: #22c55e; word-break: break-all;">${resetUrl}</a>
    </p>
    
    <div style="text-align: center; margin: 25px 0; padding-top: 20px; border-top: 2px solid #dcfce7;">
      <p style="color: #000; font-size: 14px;">
        Need help? Contact our support team at <a href="mailto:support@hannacode.com" style="color: #22c55e;">support@hannacode.com</a>
      </p>
    </div>
  `;

  const html = createEmailTemplate(content, "Reset Your Password - HannaCode");

  return this.sendEmail({
    to: user.email,
    subject: "HannaCode - Password Reset Request",
    html,
  });
};

/**
 * Send subscription confirmation email
 * @param {Object} user - User object
 * @param {Object} subscription - Subscription object
 * @returns {Promise} Promise with email info
 */
exports.sendSubscriptionConfirmationEmail = async (user, subscription) => {
  const planName = subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1);

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #22c55e; margin-bottom: 10px;">Subscription Confirmed!</h2>
      <p style="font-size: 18px; color: #000;">Hi ${user.name},</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #22c55e;">
      <p style="margin: 0; font-size: 16px; color: #000; text-align: center;">
        <strong>Welcome to HannaCode ${planName} Plan!</strong><br>
        Your subscription is now active and ready to accelerate your coding journey.
      </p>
    </div>
    
    <div style="background-color: #ffffff; border: 2px solid #22c55e; border-radius: 12px; padding: 25px; margin: 25px 0;">
      <h3 style="margin: 0 0 20px 0; color: #22c55e; text-align: center;">Subscription Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #000;">Plan:</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #22c55e; font-weight: bold;">${planName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #000;">Start Date:</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #000;">${new Date(subscription.startDate).toLocaleDateString()}</td>
        </tr>
        ${subscription.endDate ? `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #000;">End Date:</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #000;">${new Date(subscription.endDate).toLocaleDateString()}</td>
        </tr>
        ` : ""}
        <tr>
          <td style="padding: 12px; font-weight: bold; color: #000;">Status:</td>
          <td style="padding: 12px; color: #22c55e; font-weight: bold;">✅ Active</td>
        </tr>
      </table>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #22c55e;">
      <p style="margin: 0 0 15px 0; color: #000; font-weight: bold;">What's included in your ${planName} plan:</p>
      <ul style="color: #000; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li>✅ Access to all premium courses and tutorials</li>
        <li>✅ 1-on-1 mentorship sessions with expert developers</li>
        <li>✅ Completion certificates for all courses</li>
        <li>✅ Priority support from our team</li>
        <li>✅ Access to Code reviews by experts</li>
        <li>✅ Mobile app access for learning on-the-go</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="${process.env.CLIENT_URL}/courses" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3); margin: 10px;">
        🎓 Explore Premium Courses
      </a>
      <br>
      <a href="${process.env.CLIENT_URL}/mentorship" style="display: inline-block; background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(132, 204, 22, 0.3); margin: 10px;">
        🤝 Book Mentorship Session
      </a>
    </div>
    
    <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 2px solid #dcfce7;">
      <p style="color: #000; font-size: 14px;">
        Questions about your subscription? Contact us at <a href="mailto:support@hannacode.com" style="color: #22c55e;">support@hannacode.com</a>
      </p>
    </div>
  `;

  const html = createEmailTemplate(content, `${planName} Subscription Confirmed - HannaCode`);

  return this.sendEmail({
    to: user.email,
    subject: `HannaCode - ${planName} Subscription Confirmation`,
    html,
  });
};

/**
 * Send mentorship booking confirmation email
 * @param {Object} user - User object
 * @param {Object} mentor - Mentor object
 * @param {Object} session - Mentorship session object
 * @returns {Promise} Promise with email info
 */
exports.sendMentorshipBookingEmail = async (user, mentor, session) => {
  const sessionDate = new Date(session.date).toLocaleString();

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #22c55e; margin-bottom: 10px;">Mentorship Session Confirmed!</h2>
      <p style="font-size: 18px; color: #15803d;">Hi ${user.name},</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #22c55e;">
      <p style="margin: 0; font-size: 16px; color: #15803d; text-align: center;">
        ✅ <strong>Your mentorship session has been successfully booked!</strong><br>
        Get ready for an amazing learning experience with one of our expert mentors.
      </p>
    </div>
    
    <div style="background-color: #ffffff; border: 2px solid #22c55e; border-radius: 12px; padding: 25px; margin: 25px 0;">
      <h3 style="margin: 0 0 20px 0; color: #22c55e; text-align: center;">Session Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; font-weight: bold; color: #15803d;">👨‍💻 Mentor:</td>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; color: #22c55e; font-weight: bold;">${mentor.name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; font-weight: bold; color: #15803d;">📅 Date & Time:</td>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; color: #16a34a;">${sessionDate}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; font-weight: bold; color: #15803d;">⏱️ Duration:</td>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; color: #16a34a;">${session.duration} minutes</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; color: #15803d;">Topic:</td>
          <td style="padding: 12px; color: #16a34a;">${session.topic}</td>
        </tr>
      </table>
    </div>
    
    <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #84cc16;">
      <p style="margin: 0 0 15px 0; color: #15803d; font-weight: bold;">Important Reminders:</p>
      <ul style="color: #16a34a; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li>📍 Please join the session on time - your mentor will be waiting</li>
        <li>📧 You'll receive a reminder email 30 minutes before the session</li>
        <li>💻 Make sure you have a stable internet connection</li>
        <li>📝 Prepare any specific questions or topics you'd like to discuss</li>
        <li>🔄 Need to reschedule? Please do so at least 24 hours in advance</li>
      </ul>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #22c55e;">
      <p style="margin: 0 0 15px 0; color: #15803d; font-weight: bold;"> Make the most of your session:</p>
      <ul style="color: #16a34a; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li>Come prepared with specific goals and questions</li>
        <li>Have your development environment ready if it's a coding session</li>
        <li>Take notes during the session for future reference</li>
        <li>Don't hesitate to ask for clarification on any topic</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="${process.env.CLIENT_URL}/mentorship/${session._id}" style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
         View Session Details
      </a>
    </div>
    
    <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 2px solid #f1f5f9;">
      <p style="color: #64748b; font-size: 14px;">
        Questions about your session? Contact us at <a href="mailto:support@hannacode.com" style="color: #22c55e;">support@hannacode.com</a>
      </p>
    </div>
  `;

  const html = createEmailTemplate(content, "Mentorship Session Confirmed - HannaCode");

  return this.sendEmail({
    to: user.email,
    subject: "HannaCode - Mentorship Session Confirmation",
    html,
  });
};

/**
 * Send course completion certificate email
 * @param {Object} user - User object
 * @param {Object} course - Course object
 * @param {string} certificateUrl - Certificate URL
 * @returns {Promise} Promise with email info
 */
exports.sendCourseCompletionEmail = async (user, course, certificateUrl) => {
  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #22c55e; margin-bottom: 10px;">🎉 Congratulations!</h2>
      <p style="font-size: 18px; color: #374151;">Hi ${user.name},</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #22c55e; text-align: center;">
      <p style="margin: 0; font-size: 18px; color: #15803d;">
        🏆 <strong>Course Completed Successfully!</strong>
      </p>
      <p style="margin: 15px 0 0 0; font-size: 20px; font-weight: bold; color: #22c55e;">
        "${course.title}"
      </p>
    </div>
    
    <p style="color: #374151; line-height: 1.6; font-size: 16px;">
      This is a significant achievement, and we're incredibly proud of your dedication to learning and growth! 
      You've shown commitment, perseverance, and the drive to expand your coding skills.
    </p>
    
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #e2e8f0;">
      <p style="margin: 0 0 15px 0; color: #374151; font-weight: bold;">🎯 What you've accomplished:</p>
      <ul style="color: #64748b; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li>✅ Completed all course modules and exercises</li>
        <li>💡 Gained practical coding skills and knowledge</li>
        <li>🚀 Built real-world projects to showcase your abilities</li>
        <li>🏆 Earned an official certificate of completion</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin: 40px 0; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 12px;">
      <h3 style="margin: 0 0 20px 0; color: #22c55e;">Your Certificate is Ready!</h3>
      <p style="color: #374151; margin-bottom: 25px;">Download your official certificate of completion and add it to your professional portfolio.</p>
      <a href="${certificateUrl}" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);">
        📥 Download Certificate
      </a>
    </div>
    
    <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #3b82f6;">
      <p style="margin: 0 0 15px 0; color: #1e40af; font-weight: bold;"> Keep the momentum going!</p>
      <p style="color: #1e40af; margin: 0 0 15px 0;">
        Don't stop here! Continue building your skills with our other courses and take your career to the next level.
      </p>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="${process.env.CLIENT_URL}/courses" style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3); margin: 10px;">
        🎓 Explore More Courses
      </a>
      <br>
      <a href="${process.env.CLIENT_URL}/mentorship" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3); margin: 10px;">
        Get 1-on-1 Mentorship
      </a>
    </div>
    
    <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 2px solid #f1f5f9;">
      <p style="color: #374151; font-size: 16px; font-weight: bold;">
         Share your achievement with the world!
      </p>
      <p style="color: #64748b; font-size: 14px;">
        Post about your accomplishment on social media and inspire others to start their coding journey.
      </p>
    </div>
  `;

  const html = createEmailTemplate(content, `Course Completed: ${course.title} - HannaCode`);

  return this.sendEmail({
    to: user.email,
    subject: `HannaCode - Course Completion Certificate: ${course.title}`,
    html,
  });
};

/**
 * Send mentorship completion email
 * @param {Object} user - User object
 * @param {Object} mentor - Mentor object
 * @param {Object} session - Mentorship session object
 * @returns {Promise} Promise with email info
 */
exports.sendMentorshipCompletionEmail = async (user, mentor, session) => {
  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #22c55e; margin-bottom: 10px;">✅ Session Completed!</h2>
      <p style="font-size: 18px; color: #15803d;">Hi ${user.name},</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #22c55e;">
      <p style="margin: 0; font-size: 16px; color: #15803d; text-align: center;">
        🎉 <strong>Your mentorship session has been completed!</strong><br>
        We hope it was a valuable and enriching experience for your learning journey.
      </p>
    </div>
    
    <div style="background-color: #ffffff; border: 2px solid #22c55e; border-radius: 12px; padding: 25px; margin: 25px 0;">
      <h3 style="margin: 0 0 20px 0; color: #22c55e; text-align: center;"> Session Summary</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; font-weight: bold; color: #15803d;">👨‍💻 Mentor:</td>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; color: #22c55e; font-weight: bold;">${mentor.name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; font-weight: bold; color: #15803d;">📅 Date & Time:</td>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; color: #16a34a;">${new Date(session.scheduledDate).toLocaleString()}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; font-weight: bold; color: #15803d;">⏱️ Duration:</td>
          <td style="padding: 12px; border-bottom: 1px solid #dcfce7; color: #16a34a;">${session.duration} minutes</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; color: #15803d;"> Topic:</td>
          <td style="padding: 12px; color: #16a34a;">${session.topic}</td>
        </tr>
      </table>
    </div>
    
    <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #84cc16;">
      <p style="margin: 0 0 15px 0; color: #15803d; font-weight: bold;">Your feedback matters!</p>
      <p style="color: #16a34a; margin: 0;">
        Help us improve our mentorship program and assist other students by sharing your experience. 
        Your feedback is valuable and will help us maintain the quality of our mentorship sessions.
      </p>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="${process.env.CLIENT_URL}/mentorship/${session._id}/feedback" style="display: inline-block; background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(132, 204, 22, 0.3); margin: 10px;">
        ⭐ Provide Feedback
      </a>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #22c55e;">
      <p style="margin: 0 0 15px 0; color: #15803d; font-weight: bold;">Continue your growth journey:</p>
      <ul style="color: #16a34a; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li>📚 Apply what you learned in your projects</li>
        <li>🎯 Set new learning goals based on the session insights</li>
        <li>🤝 Book another session when you're ready for the next step</li>
        <li>🌟 Share your progress with the HannaCode community</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="${process.env.CLIENT_URL}/mentorship" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3); margin: 10px;">
        Book Another Session
      </a>
      <br>
      <a href="${process.env.CLIENT_URL}/courses" style="display: inline-block; background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 12px rgba(132, 204, 22, 0.3); margin: 10px;">
        Explore Courses
      </a>
    </div>
    
    <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 2px solid #f1f5f9;">
      <p style="color: #374151; font-size: 16px; font-weight: bold;">
        Thank you for choosing HannaCode mentorship! 
      </p>
      <p style="color: #64748b; font-size: 14px;">
        Questions or need support? Contact us at <a href="mailto:support@hannacode.com" style="color: #22c55e;">support@hannacode.com</a>
      </p>
    </div>
  `;

  const html = createEmailTemplate(content, "Mentorship Session Completed - HannaCode");

  return this.sendEmail({
    to: user.email,
    subject: "HannaCode - Mentorship Session Completed",
    html,
  });
};

/**
 * Send payment initiation email
 * @param {Object} user - User object
 * @param {string} plan - Subscription plan
 * @param {number} amount - Payment amount in kobo
 * @returns {Promise} Promise with email info
 */
exports.sendPaymentInitiationEmail = async (user, plan, amount) => {
  const planNames = {
    monthly: "Monthly",
    annual: "Annual", 
    lifetime: "Lifetime"
  };
  
  const planDisplayName = planNames[plan] || plan;
  const amountInNaira = (amount / 100).toLocaleString();

  const content = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #22c55e; margin-bottom: 10px;">💳 Payment Processing</h2>
      <p style="font-size: 18px; color: #374151;">Hi ${user.name || 'there'},</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #22c55e;">
      <p style="margin: 0; font-size: 16px; color: #15803d; text-align: center;">
         <strong>Payment Initiated Successfully!</strong><br>
        Your ${planDisplayName} plan payment is being processed.
      </p>
    </div>  
    
    <div style="background-color: #ffffff; border: 2px solid #22c55e; border-radius: 12px; padding: 25px; margin: 25px 0;">
      <h3 style="margin: 0 0 20px 0; color: #22c55e; text-align: center;">💳 Payment Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Plan:</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #22c55e; font-weight: bold;">${planDisplayName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Amount:</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; color: #374151;">₦${amountInNaira}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; color: #374151;">Status:</td>
          <td style="padding: 12px; color: #22c55e; font-weight: bold;">⏳ Processing</td>
        </tr>
      </table>
    </div>
    
    <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #ef4444;">
  <p style="margin: 0 0 15px 0; color: #000; font-weight: bold;">🚨 Security Notice:</p>
  <ul style="color: #000; line-height: 1.6; margin: 0; padding-left: 20px;">
        <li>Complete your payment within 15 minutes to avoid session timeout</li>
        <li>If you didn't initiate this payment, contact support immediately</li>
        <li>Never share your payment details with anyone</li>
        <li>Our team will never ask for your payment details via email</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin: 40px 0;">
      <p style="color: #374151; font-size: 16px; font-weight: bold;">
        Complete your payment to unlock premium features! 🚀
      </p>
    </div>
  `;

  const html = createEmailTemplate(content, `Payment Processing - ${planDisplayName} Plan`);

  return this.sendEmail({
    to: user.email,
    subject: `HannaCode - Payment Processing - ${planDisplayName} Plan`,
    html,
  });
};


/**
 * Send submission review feedback email
 * @param {Object} user - { name, email }
 * @param {Object} submission - { challengeId, score, passed, feedback, reviewedAt, _id|id, reviewedBy }
 * @param {Object} [reviewer] - { name }
 * @returns {Promise} Promise with email info
 */
exports.sendSubmissionFeedback = async (user, submission, reviewer = {}) => {
  const to = user?.email;
  if (!to) throw new Error("sendSubmissionFeedback: missing recipient email");

  const name = user?.name || "there";
  const challengeId = submission?.challengeId || "challenge";
  const score = typeof submission?.score === "number" ? submission.score : "N/A";
  const passed = submission?.passed ? "✅ Passed" : "❌ Not Passed";
  const feedback = (submission?.feedback || "").trim() || "No feedback provided.";
  const reviewedBy = reviewer?.name || submission?.reviewedBy || "Admin";
  const reviewedAt = submission?.reviewedAt ? new Date(submission.reviewedAt).toLocaleString() : new Date().toLocaleString();
  const submissionId = submission?._id || submission?.id;
  const viewUrl = submissionId
    ? `${process.env.CLIENT_URL}/submissions?highlight=${encodeURIComponent(submissionId)}`
    : `${process.env.CLIENT_URL}/submissions`;

  const content = `
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="color: #22c55e; margin-bottom: 8px;">Submission Reviewed</h2>
      <p style="font-size: 18px; color: #000;">Hi ${user.name},</p>
      <p style="color: #000;">Your submission has been reviewed. See the details below.</p>
    </div>

    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #22c55e;">
      <table style="width: 100%; border-collapse: collapse; color: #000;">
        <tr>
          <td style="padding: 8px; font-weight: bold;">Challenge:</td>
          <td style="padding: 8px;">${challengeId}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Status:</td>
          <td style="padding: 8px;">${passed}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Score:</td>
          <td style="padding: 8px;">${score}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Reviewed By:</td>
          <td style="padding: 8px;">${reviewedBy}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Reviewed At:</td>
          <td style="padding: 8px;">${reviewedAt}</td>
        </tr>
      </table>
    </div>

    <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
      <p style="margin: 0 0 8px 0; color: #000; font-weight: bold;">Feedback</p>
      <div style="white-space: pre-wrap; color: #000; line-height: 1.6;">${feedback.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
    </div>

    <div style="text-align: center; margin: 25px 0;">
      <a href="${viewUrl}" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
        View Submission
      </a>
    </div>
  `;

  const html = createEmailTemplate(content, "Submission Reviewed - HannaCode");
  return this.sendEmail({
    to,
    subject: `Challenge Review • ${challengeId}`,
    html,
  });
};


/**
 * Send new feature announcement email ("Daily Coding Challenge")
 * @param {Object} user - { name, email }
 * @returns {Promise} Promise with email info
 */
exports.sendDailyChallengeAnnouncement = async (user) => {
  const challengesUrl = `${process.env.CLIENT_URL}/challenges`;

  const content = `
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="color: #22c55e; margin-bottom: 8px;"> Daily Coding Challenge is Live!</h2>
      <p style="font-size: 18px; color: #000;">Hi ${user.name || "there"},</p>
    </div>

    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #22c55e;">
      <p style="margin: 0; font-size: 16px; color: #000;">
        We just launched <strong>Daily Coding Challenge</strong> on HannaCode!<br>
        Solve a fresh problem every day, build consistency, and climb the leaderboard.
      </p>
    </div>

    <ul style="color: #000; line-height: 1.8; margin: 20px 0 0 0; padding-left: 20px;">
      <li>🧩 New problem every day across multiple languages</li>
      <li>📈 Track streaks and progress</li>
      <li>✅ Earn badges and get featured</li>
      <li>✅ Learn from community solutions</li>
    </ul>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${challengesUrl}" style="display: inline-block; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
        Try Today's Challenge
      </a>
    </div>

    <p style="color: #000; font-size: 14px; margin: 20px 0;">
      Tip: Bookmark the page and come back daily to keep your streak alive!
    </p>
  `;

  const html = createEmailTemplate(content, "New Feature: Daily Coding Challenge ");

  return this.sendEmail({
    to: user.email,
    subject: "New Feature: Daily Coding Challenge on HannaCode",
    html,
  });
};

