/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 11,
  },
  rules: {
    "no-console": 0,
  },
};
