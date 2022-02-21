const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};
