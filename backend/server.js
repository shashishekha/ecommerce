/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable vars-on-top */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const cors = require("cors");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const data = require("./data");
const express = require("express");

const config = require("./config");
const userRouter = require("./routers/userRouter");
const { default: orderRouter } = require("./routers/orderRouter");

mongoose.connect(config.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected!");
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", userRouter);
// app.use("/api/orders", orderRouter);
app.get("/api/paypal/clientId", (req, res) => {
  res.send({ clientId: config.PAYPAL_CLIENT_ID });
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found!" });
  }
});

app.listen(5000, () => {
  console.log("serve at http://localhost:5000");
});
