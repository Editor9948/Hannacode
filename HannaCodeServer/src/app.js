const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const colors = require("colors")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")
const mongoSanitize = require("express-mongo-sanitize")
const helmet = require("helmet")
const xss = require("xss-clean")
const rateLimit = require("express-rate-limit")
const hpp = require("hpp")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
const YAML = require("yamljs")
const path = require("path")

const errorHandler = require("./middleware/errorMiddleware")
const connectDB = require("./config/database")
const logger = require("./utils/logger")
require("./models/Module");
const socketService = require("./services/socketService");
const compilerRoutes = require("./routes/compilerRoutes");

// Load env vars
dotenv.config()

// Validate required environment variables
const requiredEnvVars = ['NODE_ENV', 'MONGO_URI', 'JWT_SECRET', 'CLIENT_URL'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  logger.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`.red);
  process.exit(1);
}

// Connect to database
connectDB()

// Route files
const authRoutes = require("./routes/auth")
const courseRoutes = require("./routes/courses")
const lessonRoutes = require("./routes/lessons")
const subscriptionRoutes = require("./routes/subscriptions")
const mentorshipRoutes = require("./routes/mentorship")
const progressRoutes = require("./routes/progress")
const paymentsRoutes = require("./routes/payments")
const premiumRoutes = require("./routes/premium")
const blogRoutes = require("./routes/blog")


const app = express()

// Enable CORS with proper settings for production
app.use(cors({
  origin: process.env.CLIENT_URL , // Use specific origin in production
  credentials: true, // Enable credentials for authentication
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept", "X-Requested-With"],
  exposedHeaders: ["Content-Type", "Authorization"],
  maxAge: 86400 // 24 hours
}));

// Body parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())

app.use('/images/courses', express.static('public/images/courses'));

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// File uploading
app.use(
  fileUpload({
    limits: { fileSize: process.env.MAX_FILE_UPLOAD * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  }),
)

// Sanitize data
app.use(mongoSanitize())

// Set security headers with more permissive settings for development
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginOpenerPolicy: false
}));

// Prevent XSS attacks
app.use(xss())

// Prevent http param pollution
app.use(hpp())

// Set static folder
app.use(express.static(path.join(__dirname, "public")))

// Swagger documentation
const swaggerDocument = YAML.load("./docs/swagger.yaml")
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Attach io to every request (will be set in server.js)
app.use((req, res, next) => {
  req.io = app.get('io');
  next();  
});

// Test endpoint
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// Mount routers
app.use("/api/v1/compiler", compilerRoutes)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/courses", courseRoutes)
app.use("/api/v1/lessons", lessonRoutes)
app.use("/api/v1/subscriptions", subscriptionRoutes)
app.use("/api/v1/mentorship", mentorshipRoutes)
app.use("/api/v1/progress", progressRoutes) 
app.use("/api/v1/payments", paymentsRoutes)
app.use("/api/v1/premium", premiumRoutes)
app.use("/api/v1/blog", blogRoutes)
app.use("/api/v1/admin", require("./routes/admin"));
app.use("/api/v1/mentors", require("./routes/mentors")); 
app.use("/api/v1/chats", require("./routes/mentors"));   
app.use("/api/v1/code", require("./routes/codeExecution"));



// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" })
})

// Error handler middleware
app.use(errorHandler)

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  logger.error(`Error: ${err.message}`.red)
  // Close server & exit process
  process.exit(1)
})

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  logger.error(`Uncaught Exception: ${err.message}`);
  // Close server & exit process
  process.exit(1);
});

module.exports = app 
