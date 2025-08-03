// Load environment variables based on NODE_ENV
const loadEnv = () => {
  require("dotenv").config()

  // Validate required environment variables
  const requiredEnvVars = [
    "MONGO_URI",
    "JWT_SECRET",
    "JWT_EXPIRE",
    "STRIPE_SECRET_KEY",
    "STRIPE_WEBHOOK_SECRET",
    "EMAIL_SERVICE",
    "EMAIL_USERNAME",
    "EMAIL_PASSWORD",
    "EMAIL_FROM",
    "NODE_ENV",
  ]

  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])

  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`)
  }
}

module.exports = { loadEnv }
