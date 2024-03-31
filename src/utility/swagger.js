const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: "API Doc",
    version: "1.0.1",
    description: "API Description For Carbon Cell Assignment",
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

const options = {
    swaggerDefinition,
  apis: ["./src/routes/v1/*.js"], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = { swaggerDocument: swaggerSpec };
