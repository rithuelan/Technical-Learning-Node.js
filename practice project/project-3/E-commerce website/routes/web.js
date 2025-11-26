const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  const dataPath = path.join(__dirname, "../data/products.json");
  const products = JSON.parse(fs.readFileSync(dataPath));

  res.render("home", { products });
});

module.exports = router;
