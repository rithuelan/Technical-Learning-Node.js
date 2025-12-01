const Warehouse = require('../models/warehouse.model');
const Product = require('../models/product.model');
const asyncHandler = require('../middleware/asyncHandler');

// create
exports.createWarehouse = asyncHandler(async (req, res) => {
  const w = await Warehouse.create(req.body);
  res.status(201).json({ success:true, data: w });
});

// list
exports.getWarehouses = asyncHandler(async (req, res) => {
  const { page, limit, skip } = require('../utils/pagination').parsePagination(req.query);
  const data = await Warehouse.find().skip(skip).limit(limit);
  const total = await Warehouse.countDocuments();
  res.json({ success:true, meta: { total, page, limit }, data });
});

// get one
exports.getWarehouse = asyncHandler(async (req, res) => {
  const w = await Warehouse.findById(req.params.id).populate('inventory.productId', 'name price');
  if (!w) return res.status(404).json({ success:false, message:'Not found' });
  res.json({ success:true, data: w });
});

// add inventory item
exports.addInventory = asyncHandler(async (req, res) => {
  const { productId, qty } = req.body;
  const w = await Warehouse.findById(req.params.id);
  if (!w) return res.status(404).json({ success:false, message:'Not found' });
  const idx = w.inventory.findIndex(i => i.productId?.toString() === productId);
  if (idx >= 0) {
    w.inventory[idx].qty += Number(qty);
  } else {
    w.inventory.push({ productId, qty: Number(qty) });
  }
  await w.save();
  res.json({ success:true, data: w });
});

// inventory value aggregation
exports.inventoryValue = asyncHandler(async (req, res) => {
  const agg = [
    { $unwind: '$inventory' },
    { $lookup: {
        from: 'products',
        localField: 'inventory.productId',
        foreignField: '_id',
        as: 'product'
      }
    },
    { $unwind: '$product' },
    { $project: {
        warehouseId: '$_id',
        warehouseName: '$name',
        productId: '$product._id',
        qty: '$inventory.qty',
        value: { $multiply: ['$inventory.qty', '$product.price'] }
    }},
    { $group: {
        _id: '$warehouseId',
        warehouseName: { $first: '$warehouseName' },
        totalValue: { $sum: '$value' }
    }},
    { $sort: { totalValue: -1 } }
  ];
  const out = await Warehouse.aggregate(agg);
  res.json({ success:true, data: out });
});
