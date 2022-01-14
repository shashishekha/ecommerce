/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */

const express = require("express");
const cors = require("cors");

const data = require("./data");

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send();
  } else {
    res.status(404).send({ message: "Product Not Found!" });
  }
});

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log("serve at http:localhost:5000");
});
