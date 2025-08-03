const ErrorResponse = require("../utils/errorResponse")
const logger = require("../utils/logger")
const { errorResponse } = require("../utils/response")

/**
 * Error handler middleware
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const errorHandler = (err, req, res, next) => {
  let error = { ...err }
  error.message = err.message

  // Log error
  logger.error(`${err.name}: ${err.message}`, { stack: err.stack })

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = "Resource not found"
    error = new ErrorResponse(message, 404)
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = "Duplicate field value entered"
    error = new ErrorResponse(message, 400)
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ")
    error = new ErrorResponse(message, 400)
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    error = new ErrorResponse("Invalid token", 401)
  }

  if (err.name === "TokenExpiredError") {
    error = new ErrorResponse("Token expired", 401)
  }

  // Default response
  res.status(error.statusCode || 500).json(errorResponse(error.message || "Server Error", error.statusCode || 500))
}

module.exports = errorHandler
