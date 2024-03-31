const express = require("express");
const routes = require("./src/routes/v1");
const {errorHandler} = require('./src/utility/error-handler')

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use("/v1", routes);

// handle errors globally
app.use(errorHandler);


module.exports = app;
