const router = require('express').Router();
const ctrl = require('../controllers/product.controller');

// CRUD
router.post('/', ctrl.createProduct);
router.get('/', ctrl.getProducts);
router.get('/stats/category', ctrl.categoryStats);
router.get('/inventory/warehouse', ctrl.productsWithWarehouseInventory);
router.get('/:id', ctrl.getProduct);
router.patch('/:id', ctrl.updateProduct);
router.put('/:id', ctrl.replaceProduct);
router.delete('/:id', ctrl.deleteProduct);

module.exports = router;
