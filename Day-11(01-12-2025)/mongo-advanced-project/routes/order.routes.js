const router = require('express').Router();
const ctrl = require('../controllers/order.controller');

router.post('/', ctrl.createOrder);
router.get('/:id/details', ctrl.getOrderWithDetails);
router.patch('/:id', ctrl.updateOrder);
router.put('/:id', ctrl.updateOrder);
router.delete('/:id', ctrl.deleteOrder);

module.exports = router;
