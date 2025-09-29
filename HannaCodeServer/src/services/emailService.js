const nodemailer = require("nodemailer")
const logger = require("../utils/logger")
const { sendViaZohoApi, isZohoApiConfigured } = require('./zohoApiMailer');

/**
 * Create HannaCode email template with branding
 * @param {string} content - Email HTML content
 * @param {string} [title="HannaCode"] - Email title
 * @param {string} [preheader=""] - Short preview text shown in inbox clients
 * @returns {string} Complete HTML email template
 */
const createEmailTemplate = (content, title = "HannaCode", preheader = "") => {
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
        .footer-links { margin: 10px 0; }
        .footer-links a { margin: 0 10px; color: #22c55e; text-decoration: none; }
        .preheader { display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0; overflow: hidden; mso-hide: all; }
      </style>
    </head>
    <body>
      <span class="preheader">${preheader}</span>
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
          <div class="footer-links">
            <a href="${process.env.CLIENT_URL}">Website</a>
            <a href="mailto:support@hannacode.com">Support</a>
          </div>
          <p>© ${new Date().getFullYear()} HannaCode. All rights reserved.</p>
          <p>You’re receiving this email because you interacted with HannaCode.</p>
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// --- Transporter Singleton + Health State ---
let _transporter = null;
let _lastVerify = { ok: false, at: null, error: null };

function buildTransporter() {
  if (_transporter) return _transporter;

  const port = Number(process.env.EMAIL_PORT) || 465;
  const secure = port === 465; // implicit SSL for 465
  const host = process.env.EMAIL_HOST || "smtp.zoho.com";
  const needsStartTLS = port === 587; // Zoho STARTTLS

  if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
    logger.warn("[mail] EMAIL_USERNAME or EMAIL_PASSWORD missing – emails will fail.");
  }

  _transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    pool: true,
    maxConnections: 4,
    maxMessages: 40,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 25000,
    requireTLS: needsStartTLS, // STARTTLS upgrade on 587
  });

  // Asynchronous verify (non-blocking)
  _transporter.verify().then(() => {
    _lastVerify = { ok: true, at: new Date(), error: null };
    logger.info(`[mail] SMTP verified host=${host} port=${port} secure=${secure}`);
  }).catch(err => {
    _lastVerify = { ok: false, at: new Date(), error: err.message };
    logger.error(`[mail] SMTP verify failed code=${err.code || 'n/a'} msg=${err.message}`);
  });

  return _transporter;
}

exports.getEmailHealth = () => ({ ..._lastVerify });

async function sendWithRetry(message, attempts = 2) {
  const t = buildTransporter();
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await t.sendMail(message);
    } catch (e) {
      lastErr = e;
      const transient = ['ETIMEDOUT','ECONNECTION','ESOCKET','ECONNRESET','EAI_AGAIN'].includes(e.code);
      if (transient && i < attempts - 1) {
        const delay = 500 * (i + 1);
        logger.warn(`[mail] send attempt ${i+1} failed (${e.code}); retrying in ${delay}ms`);
        await new Promise(r => setTimeout(r, delay));
        continue;
      }
      break;
    }
  }
  throw lastErr;
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
/**
 * Core email send orchestrator
 * Env flags:
 *  MAIL_API_FIRST = 'true'  -> attempt Zoho HTTP API before SMTP
 *  (SMTP still used as fallback if API fails with transport errors not related to content)
 */
exports.sendEmail = async (options) => {
  try {
    const message = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: options.to,
      subject: options.subject,
      text: options.text || "",
      html: options.html || "",
      replyTo: options.replyTo || undefined,
    }
    const apiFirst = String(process.env.MAIL_API_FIRST || '').toLowerCase() === 'true';
    if (apiFirst && isZohoApiConfigured()) {
      try {
        const apiInfo = await sendViaZohoApi({
          to: message.to,
          subject: message.subject,
          html: message.html,
          text: message.text
        });
        return { channel: 'zoho-api', ...apiInfo };
      } catch (apiErr) {
        logger.warn(`[mail] API-first attempt failed (${apiErr.message}); falling back to SMTP`);
      }
    }

    const info = await sendWithRetry(message, 2);
    logger.info(`Email sent via SMTP: id=${info.messageId} to=${message.to}`);
    return { channel: 'smtp', ...info };
  } catch (error) {
    logger.error(`Email error: code=${error.code || 'n/a'} command=${error.command || 'n/a'} msg=${error.message}`)
    const fallbackEligible = ['ETIMEDOUT','ECONNECTION','ESOCKET','ECONNRESET','EAI_AGAIN','EAUTH'].includes(error.code);
    if (fallbackEligible) {
      try {
        logger.warn('[mail] Attempting Zoho API fallback...');
        const apiInfo = await sendViaZohoApi({
          to: message.to,
            subject: message.subject,
            html: message.html,
            text: message.text
        });
        return { channel: 'zoho-api-fallback', ...apiInfo };
      } catch (apiErr) {
        logger.error(`[mail] Fallback Zoho API failed msg=${apiErr.message}`);
      }
    }
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
        We’re excited to announce that <strong>Daily Coding Challenges</strong> are now live on <strong>HannaCode</strong>!  
       Sharpen your skills, stay consistent, and grow step by step—one challenge a day.
      </p>
    </div>

    <ul style="color: #000; line-height: 1.8; margin: 20px 0 0 0; padding-left: 20px;">
      <li>🧩 Fresh problems every day across multiple languages</li>
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

const safeText = (v) => String(v ?? "").slice(0, 5000);
const fmtDate = (d) => {
  try {
    if (!d) return "";
    const date = d instanceof Date ? d : new Date(d);
    return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
  } catch { return ""; }
};

function applicationSummaryPlain(app, includeId = false) {
  return [
    includeId ? `ID: ${app.id || app._id}` : null,
    `Surname: ${safeText(app.surname)}`,
    `First name: ${safeText(app.firstName)}`,
    `Other name: ${safeText(app.otherName || "")}`,
    `Date of birth: ${fmtDate(app.dob)}`,
    app.gender ? `Gender: ${safeText(app.gender)}` : null,
    `Role: ${safeText(app.role)}`,
    `Qualification: ${safeText(app.qualification)}`,
    `Address: ${safeText(app.address)}`,
    `Country: ${safeText(app.country)}`,
    `Email: ${safeText(app.email)}`,
    `Phone: ${safeText(app.phone)}`,
    `Other fields: ${safeText(app.otherProfessionalFields || "")}`,
    app.portfolioUrl ? `Portfolio: ${safeText(app.portfolioUrl)}` : null,
    app.resumeUrl ? `Resume: ${safeText(app.resumeUrl)}` : null,
    "",
    "Message:",
    safeText(app.message || ""),
  ].filter(Boolean).join("\n");
}

function applicationSummaryHtml(app) {
  const escapeHtml = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");
  const rowText = (k, v) => `
    <tr>
      <td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#000;">${escapeHtml(k)}</td>
      <td style="padding:8px;border-bottom:1px solid #e5e7eb;color:#000;">${escapeHtml(v)}</td>
    </tr>`;
  const rowHtml = (k, html) => `
    <tr>
      <td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#000;">${escapeHtml(k)}</td>
      <td style="padding:8px;border-bottom:1px solid #e5e7eb;color:#000;">${html || ""}</td>
    </tr>`;
  const linkHtml = (url) => {
    const s = String(url || "");
    if (!/^https?:\/\//i.test(s)) return escapeHtml(s);
    const href = s.replace(/\"/g, "&quot;");
    const label = escapeHtml(s);
    return `<a href="${href}" style="color:#22c55e;word-break:break-all;">${label}</a>`;
  };
  const messageHtml = escapeHtml(app.message || "").replace(/\n/g, "<br/>");
  return `
    <h3 style="margin:0 0 12px 0;color:#22c55e;">Application Summary</h3>
    <table style="width:100%;border-collapse:collapse;">
      ${rowText("Surname", app.surname)}
      ${rowText("First name", app.firstName)}
      ${rowText("Other name", app.otherName || "")}
      ${rowText("Date of birth", fmtDate(app.dob))}
      ${app.gender ? rowText("Gender", app.gender) : ""}
      ${rowText("Role", app.role)}
      ${rowText("Qualification", app.qualification)}
      ${rowText("Address", app.address)}
      ${rowText("Country", app.country)}
      ${rowText("Email", app.email)}
      ${rowText("Phone", app.phone)}
      ${rowText("Other fields", app.otherProfessionalFields || "")}
      ${app.portfolioUrl ? rowHtml("Portfolio", linkHtml(app.portfolioUrl)) : ""}
      ${app.resumeUrl ? rowHtml("Resume", linkHtml(app.resumeUrl)) : ""}
      ${rowHtml("Message", messageHtml)}
    </table>
  `;
}

/**
 * Notify admin on new application
 * @param {Object} app
 */
exports.sendApplicationAdminNotification = async (app) => {
  const to = process.env.FROM_EMAIL || process.env.EMAIL_USERNAME;
  if (!to) {
    logger.warn("[mail] FROM_EMAIL not set; skipping admin notification");
    return;
  }
  await exports.sendEmail({
    to,
    subject: `New Application – ${safeText(app.role)} – ${safeText(app.surname)} ${safeText(app.firstName)} [${app.id || app._id}]`,
    text: applicationSummaryPlain(app, true),
    html: createEmailTemplate(applicationSummaryHtml(app), "New Application - HannaCode"),
    replyTo: app?.email,
  });
};

/**
 * Acknowledge applicant submission
 * @param {Object} app
 */
exports.sendApplicationAcknowledgement = async (app) => {
  const first = app.firstName || (app.name || "").split(" ")[0] || "there";
  const content = `
    <div style="text-align:center;margin-bottom:16px;">
      <h2 style="color:#22c55e;margin:0 0 8px 0;">We received your application</h2>
      <p style="font-size:16px;color:#000;margin:0;">Hi ${safeText(first)}, thanks for applying for <strong>${safeText(app.role)}</strong>.</p>
    </div>
    <p style="color:#000;line-height:1.6;margin:12px 0;">
      Our team will review your application and get back to you by email.
    </p>
    <div style="margin-top:16px;">${applicationSummaryHtml(app)}</div>
  `;
  const preheader = `Thanks, ${safeText(first)} — your application for ${safeText(app.role)} has been received.`;
  const html = createEmailTemplate(content, "Application received - HannaCode", preheader);
  await exports.sendEmail({
    to: app.email,
    subject: `We received your application – ${safeText(app.role)}`,
    text: applicationSummaryPlain(app, false),
    html,
  });
};

/**
 * Notify applicant on decision
 * @param {Object} app
 * @param {"accepted"|"rejected"} status
 * @param {string} [reason]
 */
exports.sendApplicationDecision = async (app, status, reason = "") => {
  const first = app.firstName || (app.name || "").split(" ")[0] || "there";
  if (status === "accepted") {
    const content = `
      <div style="text-align:center;margin-bottom:16px;">
        <h2 style="color:#22c55e;margin:0 0 8px 0;">Your application was accepted</h2>
        <p style="font-size:16px;color:#000;margin:0;">Hi ${safeText(first)},</p>
      </div>
      <p style="color:#000;line-height:1.6;margin:12px 0;">
        Congratulations! You’ve been accepted for the role of <strong>${safeText(app.role)}</strong>.
        Our team will contact you with onboarding details.
      </p>
    `;
    const html = createEmailTemplate(content, "Application accepted - HannaCode", `Congratulations — you’ve been accepted for ${safeText(app.role)}.`);
    await exports.sendEmail({
      to: app.email,
      subject: `Application accepted – ${safeText(app.role)} at HannaCode`,
      text: `Hi ${safeText(first)},\n\nYour application for ${safeText(app.role)} has been accepted. Our team will contact you with next steps.`,
      html,
    });
    return;
  }

  const content = `
    <div style="text-align:center;margin-bottom:16px;">
      <h2 style="color:#ef4444;margin:0 0 8px 0;">Application update</h2>
      <p style="font-size:16px;color:#000;margin:0;">Hi ${safeText(first)},</p>
    </div>
    <p style="color:#000;line-height:1.6;margin:12px 0;">
      Thank you for applying. We’re unable to proceed at this time.
      ${reason ? `<br/><strong>Reason:</strong> ${(safeText(reason)).replace(/\n/g,"<br/>")}` : ""}
    </p>
    <p style="color:#000;line-height:1.6;margin:12px 0;">
      We encourage you to apply again in the future.
    </p>
  `;
  const preheader = `Decision update for your ${safeText(app.role)} application.`;
  const html = createEmailTemplate(content, "Application update - HannaCode", preheader);
  await exports.sendEmail({
    to: app.email,
    subject: `Application update – ${safeText(app.role)} at HannaCode`,
    text: `Hi ${safeText(first)},\n\nThank you for applying for ${safeText(app.role)}. We’re unable to proceed at this time.${reason ? `\n\nReason: ${safeText(reason)}` : ""}\n\nWe encourage you to apply again in the future.`,
    html,
  });
};

/**
 * ENVIRONMENT VARIABLES SUMMARY
 *
 * Core SMTP:
 *  EMAIL_HOST=smtp.zoho.com
 *  EMAIL_PORT=465|587
 *  EMAIL_USERNAME=you@domain.com
 *  EMAIL_PASSWORD=app_password_or_secret
 *
 * Branding / From:
 *  FROM_NAME=HannaCode
 *  FROM_EMAIL=noreply@hannacode.com (must exist / be verified in Zoho)
 *  CLIENT_URL=https://hannacode.com
 *
 * Zoho Mail API (HTTP) + OAuth:
 *  ZOHO_ACCOUNT_ID=######## (from Zoho Mail API console)
 *  ZOHO_REGION=us|eu|in|au|jp|ca (default us)
 *  ZOHO_CLIENT_ID=xxxxxxxx
 *  ZOHO_CLIENT_SECRET=xxxxxxxx
 *  ZOHO_REFRESH_TOKEN=xxxxxxxx (generated with offline access scope)
 *  ZOHO_ACCOUNTS_DOMAIN=accounts.zoho.com (override for region if needed)
 *
 * Behavior Flags:
 *  MAIL_API_FIRST=true  -> attempt HTTP API first; fall back to SMTP
 *
 * Notes:
 *  - If MAIL_API_FIRST not set, SMTP attempted first then API on eligible errors.
 *  - API requires FROM_EMAIL to be an allowed sender in Zoho Mail.
 */