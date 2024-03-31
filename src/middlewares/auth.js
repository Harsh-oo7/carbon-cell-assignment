const config = require("../config");
const { Token } = require("../models");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const signature = req.get("Authorization");

  if (signature) {
    const payload = await jwt.verify(
      signature.split(" ")[1],
      config.SECRET_KEY
    );

    const tokenExist = await Token.exists({ token: signature.split(" ")[1] });
    if (!tokenExist) {
      return res.status(401).json({ message: "User not authorised" });
    }

    req.user = payload;

    next();
    return;
  }

  return res.status(401).json({ message: "User not authorised" });
};

module.exports = {
  auth,
};
