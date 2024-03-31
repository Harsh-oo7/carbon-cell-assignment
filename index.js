const dotenv = require('dotenv')
dotenv.config()

const mongoose = require("mongoose");
const app = require("./app.js");
const config = require("./src/config");

mongoose.connect(config.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(config.PORT, () => {
    console.log(`Listening to port ${config.PORT}`);
  });
});