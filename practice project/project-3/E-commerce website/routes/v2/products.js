const express = require("express");
const multer = require("multer");
const { body } = require("express-validator");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../../controllers/productController");

const router = express.Router();

// Multer storage
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Validation
const productValidator = [
  body("name").notEmpty().withMessage("Name required"),
  body("price").isNumeric().withMessage("Price must be number")
];

// Routes
router.get("/", getProducts);
router.post("/", upload.single("image"), productValidator, createProduct);
router.put("/:id", productValidator, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
