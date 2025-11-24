const express = require('express');
const router = express.Router();

const { getProducts, addProduct } = require('../controllers/productController');

// GET /products/
router.get('/', getProducts);

// POST /products/
router.post('/', addProduct);

module.exports = router;
