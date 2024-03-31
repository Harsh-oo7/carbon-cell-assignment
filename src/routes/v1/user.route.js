const express = require("express");
// const { auth } = require('../../middlewares/auth')
const { expressValidate } = require("../../middlewares/validate.js");
const { userController } = require("../../controllers/v1/index.js");
const { userValidation } = require("../../validations/index.js");

const router = express.Router();

/**
 * @swagger
 * /v1/users/sign-up:
 *   post:
 *     tags:
 *       - User
 *     summary: Register a new user
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *               name:
 *                 type: string
 *                 description: The user's name.
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: User with this Email is already registered
 *       500:
 *         description: Failed to create user
 */
router
  .route("/sign-up")
  .post(expressValidate(userValidation.signUp), userController.signUp);

/**
 * @swagger
 * /v1/users/sign-in:
 *   post:
 *     tags:
 *       - User
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *     responses:
 *       200:
 *         description: Logged in successfully
 *       400:
 *         description: Invalid login data
 *       401:
 *         description: Invalid password
 *       404:
 *         description: User with this email not found
 */
router
  .route("/sign-in")
  .post(expressValidate(userValidation.signIn), userController.signIn);

/**
 * @swagger
 * /v1/users/sign-out:
 *   post:
 *     tags:
 *       - User
 *     summary: Logout a user
  *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 description: The user's token.
 *     responses:
 *       200:
 *         description: Logged out successfully
 */
router
  .route("/sign-out")
  .post(expressValidate(userValidation.signOut), userController.signOut);

module.exports = router;
