const { userService } = require("../../services");
const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const { asyncMiddleware } = require("../../utility/error-handler");

const signUp = asyncMiddleware(async (req, res, next) => {
  let body = req.body;
  let isUserExist = await User.exists({ email: body.email });
  if (isUserExist) {
    return res
      .status(400)
      .json({ message: "User already exist with that email." });
  }
  let user = await userService.createUser(body);
  res.status(201).json(user);
});

const signIn = asyncMiddleware(async (req, res, next) => {
  let body = req.body;
  const existingUser = await User.findOne({
    email: body?.email || "",
  });

  if (!existingUser) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isValidPassword = await bcrypt.compare(
    body?.password,
    existingUser?.password
  );

  if (!isValidPassword) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const user = await userService.signIn(existingUser);
  res.status(200).json(user);
});

const signOut = asyncMiddleware(async (req, res) => {
  let body = req.body;
  const tokenDeleted = await userService.signOut(body);
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = {
  signUp,
  signIn,
  signOut,
};
