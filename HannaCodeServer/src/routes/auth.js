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



module.exports = router
