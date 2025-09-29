const User = require("../models/User")
const asyncHandler = require("../middleware/async")
const ErrorResponse = require("../utils/errorResponse")
const { sendWelcomeEmail,
        sendMentorshipBookingEmail,
       sendSubscriptionConfirmationEmail,
       sendPasswordResetEmail,
       sendCourseCompletionEmail} = require("../services/emailService")
const crypto = require("crypto")
const { generateToken, setCookieOptions } = require("../utils/auth")
const path = require("path")
const fs = require("fs")

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body

  // Create user
  const user = await User.create({
    name,
    email,
    password,
  
  })

  // Generate email verification token
  const verificationToken = user.getEmailVerificationToken()
  await user.save({ validateBeforeSave: false })

  // Create verification URL
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email/${verificationToken}`

  // Send email
  try {
    await sendWelcomeEmail(user, verificationUrl); 
    sendTokenResponse(user, 201, res, "Registration successful. Please verify your email.")
  } catch (err) {
    user.emailVerificationToken = undefined
    await user.save({ validateBeforeSave: false })

    return next(new ErrorResponse("Email could not be sent", 500))
  }
})

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400))
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password")

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401))
  }

  // Check if account is locked
  if (user.isLocked()) {
    return next(new ErrorResponse("Account is locked. Please try again later", 401))
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password)

  if (!isMatch) {
    // Increment login attempts
    await user.incrementLoginAttempts()
    
    // Check if account should be locked
    if (user.loginAttempts >= 5) {
      return next(new ErrorResponse("Account is locked due to too many failed attempts. Please try again later", 401))
    }
    
    return next(new ErrorResponse("Invalid credentials", 401))
  }

  // Check if email is verified
  if (!user.emailVerified) {
    return next(new ErrorResponse("Please verify your email before logging in. Check your email for verification link.", 401))
  }

  // Reset login attempts on successful login
  user.loginAttempts = 0
  user.lockUntil = undefined
  user.lastLogin = Date.now()
  await user.save({ validateBeforeSave: false })

  sendTokenResponse(user, 200, res)
})

// @desc    Log user out / clear cookie
// @route   GET /api/v1/auth/logout
// @access  Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  })

  res.status(200).json({
    success: true,
    data: {},
  })
})

// @desc    Get current logged in user
// @route   GET /api/v1/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
    .select("-password -resetPasswordToken -resetPasswordExpire -emailVerificationToken -emailVerificationExpire")
    .populate({
      path: "subscription",
      select: "plan status currentPeriodEnd",
    });

  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Update user details
// @route   PUT /api/v1/auth/updatedetails
// @access  Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email,
    bio: req.body.bio,
    phone: req.body.phone, 
    location: req.body.location,
  }

  // Remove undefined fields
  Object.keys(fieldsToUpdate).forEach((key) => fieldsToUpdate[key] === undefined && delete fieldsToUpdate[key])

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: user,
  })
})

// @desc    Update password
// @route   PUT /api/v1/auth/updatepassword
// @access  Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password")

  // Check current password
  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(new ErrorResponse("Password is incorrect", 401))
  }

  user.password = req.body.newPassword
  await user.save()

  sendTokenResponse(user, 200, res)
})

// @desc    Forgot password
// @route   POST /api/v1/auth/forgotpassword
// @access  Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if (!user) {
    return next(new ErrorResponse("There is no user with that email", 404))
  }

  // Get reset token
  const resetToken = user.getResetPasswordToken()

  await user.save({ validateBeforeSave: false })

  // Create reset url
  const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`

  try {
    await sendPasswordResetEmail(user, resetUrl)
    res.status(200).json({ success: true, data: "Email sent" })
  } catch (err) {
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save({ validateBeforeSave: false })
    return next(new ErrorResponse("Email could not be sent", 500))
  }
})

// @desc    Reset password
// @route   PUT /api/v1/auth/resetpassword/:resettoken
// @access  Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
  // Get hashed token
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.resettoken).digest("hex")

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  })

  if (!user) {
    return next(new ErrorResponse("Invalid token", 400))
  }

  // Set new password
  user.password = req.body.password
  user.resetPasswordToken = undefined
  user.resetPasswordExpire = undefined
  await user.save()

  sendTokenResponse(user, 200, res)
})

// @desc    Verify email
// @route   GET /api/v1/auth/verifyemail/:verificationtoken
// @access  Public
exports.verifyEmail = asyncHandler(async (req, res, next) => {
  // Get hashed token
  const emailVerificationToken = crypto.createHash("sha256").update(req.params.verificationtoken).digest("hex")

  const user = await User.findOne({ 
    emailVerificationToken,
    emailVerificationExpire: { $gt: Date.now() }
  })

  if (!user) {
    return next(new ErrorResponse("Invalid or expired verification token", 400))
  }

  // Set email as verified
  user.emailVerified = true
  user.emailVerificationToken = undefined
  user.emailVerificationExpire = undefined
  await user.save()

  sendTokenResponse(user, 200, res)
})

// @desc    Resend verification email
// @route   POST /api/v1/auth/resendverification
// @access  Private
exports.resendVerification = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)

  if (user.emailVerified) {
    return next(new ErrorResponse("Email is already verified", 400))
  }

  // Check if user has requested verification email recently (rate limiting)
  const now = new Date()
  const lastEmailSent = user.emailVerificationExpire
  if (lastEmailSent && (now - lastEmailSent) < 60000) { // 1 minute cooldown
    return next(new ErrorResponse("Please wait before requesting another verification email", 429))
  }

  // Generate new verification token
  const verificationToken = user.getEmailVerificationToken()
  await user.save({ validateBeforeSave: false })

  // Create verification URL
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email/${verificationToken}`

  try {
    await sendWelcomeEmail(user, verificationUrl)

    res.status(200).json({ 
      success: true, 
      message: "Verification email sent successfully. Please check your email inbox." 
    })
  } catch (err) {
    console.error("Error sending verification email:", err)
    user.emailVerificationToken = undefined
    user.emailVerificationExpire = undefined
    await user.save({ validateBeforeSave: false })

    return next(new ErrorResponse("Email could not be sent. Please try again later.", 500))
  }
})

// @desc    Resend verification email (public - using email)
// @route   POST /api/v1/auth/resendverification/email
// @access  Public
exports.resendVerificationByEmail = asyncHandler(async (req, res, next) => {
  const { email } = req.body

  if (!email) {
    return next(new ErrorResponse("Please provide an email address", 400))
  }

  const user = await User.findOne({ email })

  if (!user) {
    // Don't reveal if email exists or not for security
    return res.status(200).json({ 
      success: true, 
      message: "If the email exists in our system, a verification email will be sent." 
    })
  }

  if (user.emailVerified) {
    return res.status(200).json({ 
      success: true, 
      message: "Email is already verified. You can log in now." 
    })
  }

  // Check rate limiting
  const now = new Date()
  const lastEmailSent = user.emailVerificationExpire
  if (lastEmailSent && (now - lastEmailSent) < 60000) { // 1 minute cooldown
    return next(new ErrorResponse("Please wait before requesting another verification email", 429))
  }

  // Generate new verification token
  const verificationToken = user.getEmailVerificationToken()
  await user.save({ validateBeforeSave: false })

  // Create verification URL
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email/${verificationToken}`

  try {
    await sendWelcomeEmail(user, verificationUrl)

    res.status(200).json({ 
      success: true, 
      message: "If the email exists in our system, a verification email has been sent." 
    })
  } catch (err) {
    console.error("Error sending verification email:", err)
    user.emailVerificationToken = undefined
    user.emailVerificationExpire = undefined
    await user.save({ validateBeforeSave: false })

    // Still return success to avoid revealing email existence
    res.status(200).json({ 
      success: true, 
      message: "If the email exists in our system, a verification email will be sent." 
    })
  }
})

// @desc    Upload profile image
// @route   PUT /api/v1/auth/uploadprofile
// @access  Private
exports.uploadProfileImage = asyncHandler(async (req, res, next) => {
  if (!req.files || !req.files.file) {
    return next(new ErrorResponse("Please upload a file", 400))
  }

  const file = req.files.file

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse("Please upload an image file", 400))
  }

  // Check file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
  if (!allowedTypes.includes(file.mimetype)) {
    return next(new ErrorResponse('Please upload an image file (JPEG, PNG, GIF)', 400))
  }

  // Check file size
  if (file.size > process.env.MAX_FILE_UPLOAD * 1024 * 1024) {
    return next(new ErrorResponse(`File size cannot be more than ${process.env.MAX_FILE_UPLOAD}MB`, 400))
  }

  // Create custom filename
  file.name = `profile_${req.user.id}${path.parse(file.name).ext}`

  // Move file to uploads directory
  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err)
      return next(new ErrorResponse("Problem with file upload", 500))
    }

    // Delete old profile image if it exists and is not the default
    const user = await User.findById(req.user.id)
    if (user.profileImage && user.profileImage !== 'default-avatar.jpg') {
      const oldImagePath = `${process.env.FILE_UPLOAD_PATH}/${user.profileImage}`
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath)
      }
    }

    // Update user profile image
    await User.findByIdAndUpdate(req.user.id, { profileImage: file.name })

    res.status(200).json({
      success: true,
      data: file.name,
    })
  })
})

// Helper function to get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res, message = "") => {
  // Create token
  const token = user.getSignedJwtToken()

  const options = setCookieOptions()

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.resetPasswordToken;
  delete userObj.resetPasswordExpire;
  delete userObj.emailVerificationToken;
  delete userObj.emailVerificationExpire;


  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    token,
    user: userObj,
  })
}

exports.bookMentorship = asyncHandler(async (req, res, next) => {
  // ...booking logic...
  const user = await User.findById(req.user.id);
  const mentor = await User.findById(req.body.mentorId);
  const session = { date: req.body.date, topic: req.body.topic };

  try {
    await sendMentorshipBookingEmail(user, mentor, session);
    res.status(200).json({ success: true, message: "Mentorship session booked and email sent." });
  } catch (err) {
    return next(new ErrorResponse("Mentorship booked, but email could not be sent", 500));
  }
});

// @desc    Verify email (idempotent)
// @route   GET /api/v1/auth/verifyemail/:verificationtoken
// @access  Public
// Notes:
//  * Endpoint is now idempotent: repeated use of the same link after success returns 200 with an "already verified" message.
//  * We purposely retain the hashed token after verification (and mark it expired) so we can detect replays gracefully.
exports.verifyEmail = asyncHandler(async (req, res, next) => {
  const rawToken = req.params.verificationtoken || '';
  const verificationToken = crypto.createHash('sha256').update(rawToken).digest('hex');

  // Look up by token first (regardless of expiry) so we can differentiate states
  const user = await User.findOne({ emailVerificationToken: verificationToken });

  if (!user) {
    return next(new ErrorResponse('Invalid or expired verification token', 400));
  }

  // Already verified path (idempotent)
  if (user.emailVerified) {
    return res.status(200).json({
      success: true,
      message: 'Email already verified.'
    });
  }

  // Not verified yet – check expiry explicitly
  if (!user.emailVerificationExpire || user.emailVerificationExpire.getTime() < Date.now()) {
    return next(new ErrorResponse('Verification link has expired. Please request a new one.', 400));
  }

  user.emailVerified = true;
  // Retain token but mark as expired for replay detection while keeping idempotency
  user.emailVerificationExpire = new Date(Date.now() - 1000);
  await user.save({ validateBeforeSave: false });

  return res.status(200).json({
    success: true,
    message: 'Email verified successfully. You can now login.'
  });
});

// @desc    Resend verification email
// @route   POST /api/v1/auth/resendverification
// @access  Private
exports.resendVerification = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)

  if (user.emailVerified) {
    return next(new ErrorResponse("Email is already verified", 400))
  }

  // Generate new verification token
  const verificationToken = user.getEmailVerificationToken()
  await user.save({ validateBeforeSave: false })

  // Create verification URL
  const verificationUrl = `${process.env.CLIENT_URL}/verify-email/${verificationToken}`

  try {
    await sendWelcomeEmail(user, verificationUrl)
    
    res.status(200).json({
      success: true,
      message: "Verification email sent"
    })
  } catch (err) {
    user.emailVerificationToken = undefined
    user.emailVerificationExpire = undefined
    await user.save({ validateBeforeSave: false })

    return next(new ErrorResponse("Email could not be sent", 500))
  }
})


exports.subscribe = asyncHandler(async (req, res, next) => {
  // ...subscription logic...
  const user = await User.findById(req.user.id);
  const subscription = { plan: req.body.plan, status: "active" };

  try {
    await sendSubscriptionConfirmationEmail(user, subscription);
    res.status(200).json({ success: true, message: "Subscription successful and email sent." });
  } catch (err) {
    return next(new ErrorResponse("Subscription created, but email could not be sent", 500));
  }
});


exports.completeCourse = asyncHandler(async (req, res, next) => {
  // ...course completion logic...
  const user = await User.findById(req.user.id);
  const course = await Course.findById(req.params.courseId);
  const certificateUrl = `${process.env.CLIENT_URL}/certificates/${user._id}/${course._id}`;

  try {
    await sendCourseCompletionEmail(user, course, certificateUrl);
    res.status(200).json({ success: true, message: "Course completed and email sent." });
  } catch (err) {
    return next(new ErrorResponse("Course completed, but email could not be sent", 500));
  }
});