/**
 * Application-wide constants
 */

// User roles
const USER_ROLES = {
  ADMIN: "admin",
  PREMIUM: "premium",
  USER: "user",
}

// Subscription plans
const SUBSCRIPTION_PLANS = {
  MONTHLY: "monthly",
  ANNUAL: "annual",
  LIFETIME: "lifetime",
}

// Subscription statuses
const SUBSCRIPTION_STATUSES = {
  ACTIVE: "active",
  CANCELED: "canceled",
  EXPIRED: "expired",
  PENDING: "pending",
}

// Course difficulty levels
const COURSE_LEVELS = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
}

// Programming languages
const PROGRAMMING_LANGUAGES = ["javascript", "python", "java", "csharp", "ruby", "go", "php"]

// Mentorship session statuses
const MENTORSHIP_STATUSES = {
  SCHEDULED: "scheduled",
  COMPLETED: "completed",
  CANCELED: "canceled",
}

// Mentorship session types
const MENTORSHIP_SESSION_TYPES = {
  ONE_TIME: "one-time",
  PACKAGE: "package",
}

// Resource types
const RESOURCE_TYPES = {
  PDF: "pdf",
  CODE: "code",
  LINK: "link",
  IMAGE: "image",
}

// Error messages
const ERROR_MESSAGES = {
  NOT_FOUND: "Resource not found",
  UNAUTHORIZED: "Not authorized to access this resource",
  INVALID_CREDENTIALS: "Invalid credentials",
  SERVER_ERROR: "Server error",
  VALIDATION_ERROR: "Validation error",
  DUPLICATE_RESOURCE: "Resource already exists",
}

module.exports = {
  USER_ROLES,
  SUBSCRIPTION_PLANS,
  SUBSCRIPTION_STATUSES,
  COURSE_LEVELS,
  PROGRAMMING_LANGUAGES,
  MENTORSHIP_STATUSES,
  MENTORSHIP_SESSION_TYPES,
  RESOURCE_TYPES,
  ERROR_MESSAGES,
}
