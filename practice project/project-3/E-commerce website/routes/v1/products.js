const express = require("express");
const { getProducts } = require("../../controllers/productController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ version: "v1", message: "Basic product list", data: getProducts });
});

module.exports = router;

