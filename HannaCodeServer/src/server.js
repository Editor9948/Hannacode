const http = require("http")
const app = require("./app")
const socketService = require("./services/socketService")
const logger = require("./utils/logger")

// Create HTTP server
const server = http.createServer(app)

// Initialize socket.io
const io = socketService.initializeSocket(server)
app.set('io', io)

// Set port
const PORT = process.env.PORT || 5000

// Start server
server.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  logger.error(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})
