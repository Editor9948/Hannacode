const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HannaCode API",
      version: "1.0.0",
      description: "API documentation for HannaCode e-learning platform",
      contact: {
        name: "HannaCode Support",
        email: "support@hannacode.com",
      },
    },
    servers: [
      {
        url: process.env.NODE_ENV === "production" ? "https://api.hannacode.com" : "http://localhost:5000",
        description: process.env.NODE_ENV === "production" ? "Production server" : "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js", "./docs/swagger.yaml"],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}

module.exports = setupSwagger
