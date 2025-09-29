const express = require("express")
const router = express.Router()
const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
  verifyEmail,
  uploadProfileImage,
  resendVerification,
  resendVerificationByEmail,
} = require("../controllers/authController")
const { protect } = require("../middleware/authMiddleware")
const {
  initGoogle,
  callbackGoogle,
  initGithub,
  callbackGithub,
  exchangeEphemeral,
} = require("../controllers/oauthController")

router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/me", protect, getMe)
router.post("/forgotpassword", forgotPassword)
router.put("/resetpassword/:resettoken", resetPassword)
router.put("/updatedetails", protect, updateDetails)
router.put("/updatepassword", protect, updatePassword)
router.get("/verifyemail/:verificationtoken", verifyEmail)
router.put("/uploadprofile", protect, uploadProfileImage)
router.post("/resendverification", protect, resendVerification)
router.post("/resendverification/email", resendVerificationByEmail)

// OAuth provider flows
router.get('/oauth/google/init', initGoogle)
router.get('/oauth/google/callback', callbackGoogle)
router.get('/oauth/github/init', initGithub)
router.get('/oauth/github/callback', callbackGithub)
// Exchange ephemeral code for JWT
router.get('/oauth/exchange', exchangeEphemeral)



module.exports = router
