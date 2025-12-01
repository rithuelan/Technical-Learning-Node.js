const router = require('express').Router();
const ctrl = require('../controllers/warehouse.controller');

router.post('/', ctrl.createWarehouse);
router.get('/', ctrl.getWarehouses);
router.get('/:id', ctrl.getWarehouse);
router.post('/:id/inventory', ctrl.addInventory);
router.get('/stats/inventory-value', ctrl.inventoryValue);
router.delete('/:id', async (req, res, next) => {
  const Warehouse = require('../models/warehouse.model');
  try {
    const w = await Warehouse.findByIdAndDelete(req.params.id);
    if (!w) return res.status(404).json({ success:false, message:'Not found' });
    res.json({ success:true, message:'Deleted' });
  } catch (err) { next(err); }
});

module.exports = router;
