/**
 * Standard API response formatter
 * @param {boolean} success - Whether the request was successful
 * @param {string} message - Message to return to the client
 * @param {object} data - Data to return to the client
 * @param {number} statusCode - HTTP status code
 * @returns {object} Formatted response object
 */
const formatResponse = (success, message = "", data = null, statusCode = 200) => {
  const response = {
    success,
    message,
    statusCode,
  }

  if (data) {
    response.data = data
  }

  return response
}

/**
 * Success response
 * @param {string} message - Success message
 * @param {object} data - Data to return
 * @param {number} statusCode - HTTP status code (default: 200)
 * @returns {object} Formatted success response
 */
const successResponse = (message, data = null, statusCode = 200) => {
  return formatResponse(true, message, data, statusCode)
}

/**
 * Error response
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code (default: 400)
 * @param {object} data - Additional error data
 * @returns {object} Formatted error response
 */
const errorResponse = (message, statusCode = 400, data = null) => {
  return formatResponse(false, message, data, statusCode)
}

/**
 * Pagination response
 * @param {Array} data - Array of items
 * @param {number} page - Current page
 * @param {number} limit - Items per page
 * @param {number} total - Total number of items
 * @param {string} message - Success message
 * @returns {object} Formatted pagination response
 */
const paginationResponse = (data, page, limit, total, message = "Data retrieved successfully") => {
  const totalPages = Math.ceil(total / limit)
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  return successResponse(message, {
    items: data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage,
      hasPrevPage,
      nextPage: hasNextPage ? page + 1 : null,
      prevPage: hasPrevPage ? page - 1 : null,
    },
  })
}

module.exports = {
  successResponse,
  errorResponse,
  paginationResponse,
}
