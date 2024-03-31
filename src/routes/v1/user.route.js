const express = require("express");
// const { auth } = require('../../middlewares/auth')
const { expressValidate } = require("../../middlewares/validate.js");
const { userController } = require("../../controllers/v1/index.js");
const { userValidation } = require("../../validations/index.js");

const router = express.Router();

router
  .route("/sign-up")
  .post(expressValidate(userValidation.signUp), userController.signUp);

router
  .route("/sign-in")
  .post(expressValidate(userValidation.signIn), userController.signIn);

router
  .route("/sign-out")
  .post(expressValidate(userValidation.signOut), userController.signOut);

module.exports = router;