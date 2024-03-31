const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Token } = require("../models");
const config = require("../config");
const moment = require('moment')

const createUser = async (body) => {
  body.password = await bcrypt.hash(body.password, 8);
  const createdUser = await User.create(body);
  return createdUser;
};

const signIn = async (existingUser) => {

  const token = jwt.sign({ user: existingUser }, config.SECRET_KEY, {
    expiresIn: "7d",
  });
  const expires = moment().add(
    7,
    'days'
  )


  // token save in database
  const createdToken = await Token.create({
    token,
    user: existingUser._id,
    expires
  })

  return {
    user: existingUser,
    token,
  };
};

const signOut = async (body) => {
    return await Token.deleteOne({token: body.token});
}

module.exports = {
  createUser,
  signIn,
  signOut,
};
