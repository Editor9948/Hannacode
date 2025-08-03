const jwt = require("jsonwebtoken")

/**
 * Generate JWT token
 * @param {string} id - User ID
 * @param {string} role - User role
 * @returns {string} JWT token
 */
exports.generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
}

/**
 * Set cookie options for JWT
 * @returns {object} Cookie options
 */
exports.setCookieOptions = () => {
  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }

  // Set secure flag in production
  if (process.env.NODE_ENV === "production") {
    options.secure = true
    options.sameSite = "none"
  }

  return options
}

/**
 * Verify JWT token
 * @param {string} token - JWT token
 * @returns {object} Decoded token payload
 */
exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return null
  }
}
