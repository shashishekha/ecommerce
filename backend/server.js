const express = require("express");
const data = require("./data.js");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("serve at http:localhost:5000");
});
