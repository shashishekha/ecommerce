/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
const jwt = require("jsonwebtoken");
const config = require("./config");

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET
  );
};
module.exports = generateToken;
