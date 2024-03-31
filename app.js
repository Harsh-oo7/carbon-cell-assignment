const express = require("express");
const routes = require("./src/routes/v1");
const {errorHandler} = require('./src/utility/error-handler')
const swaggerUi = require('swagger-ui-express');
const { swaggerDocument } =  require('./src/utility/swagger');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

//@swagger
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

// v1 api routes
app.use("/v1", routes);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// handle errors globally
app.use(errorHandler);


module.exports = app;
