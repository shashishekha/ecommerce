/* eslint-disable import/newline-after-import */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const mongoose = require("mongoose");
const config = "./config";

const express = require("express");
const cors = require("cors");

// const { Router } = require("express");
const data = require("./data");
// const { default: userRouter } = require("./routers/userRouter");

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((error) => {
    console.log(error.reason);
  });

const app = express();

app.use(cors());
// app.use("/api/users", userRouter);

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
  // eslint-disable-next-line no-console
  console.log("serve at http://localhost:5000");
});
