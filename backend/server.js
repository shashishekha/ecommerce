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

// const Router  = require("express");

const config = require("./config");
const userRouter = require("./routers/userRouter");
// mongoose
//   .connect(config.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("Connected to mongodb.");
//   })
//   .catch((error) => {
//     console.log(error.reason);
//   });

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
app.use((err, req, res, next) => {
  const status = err.name && err.name === "ValidationError" ? 400 : 500;
  res.status(status).send({ message: err.message });
});
app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log("serve at http://localhost:5000");
});
