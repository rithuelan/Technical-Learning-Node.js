const Order = require('../models/order.model');
const asyncHandler = require('../middleware/asyncHandler');

// create
exports.createOrder = asyncHandler(async (req, res) => {
  const o = await Order.create(req.body);
  res.status(201).json({ success:true, data: o });
});

// get with lookups
exports.getOrderWithDetails = asyncHandler(async (req, res) => {
  const id = require('mongoose').Types.ObjectId(req.params.id);
  const agg = [
    { $match: { _id: id } },
    { $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'user'}},
    { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
    { $unwind: '$items' },
    { $lookup: { from: 'products', localField: 'items.productId', foreignField: '_id', as: 'items.product' }},
    { $unwind: { path: '$items.product', preserveNullAndEmptyArrays: true } },
    { $group: {
        _id: '$_id',
        user: { $first: '$user' },
        items: { $push: '$items' },
        assignedEmployeeId: { $first: '$assignedEmployeeId' },
        warehouseId: { $first: '$warehouseId' },
        status: { $first: '$status' },
        createdAt: { $first: '$createdAt' }
    }},
    { $lookup: { from: 'warehouses', localField: 'warehouseId', foreignField: '_id', as: 'warehouse' }},
    { $unwind: { path: '$warehouse', preserveNullAndEmptyArrays: true } },
    { $project: { user: { name:1, email:1 }, items:1, warehouse: { name:1, location:1 }, status:1, createdAt:1 } }
  ];
  const [doc] = await Order.aggregate(agg);
  if (!doc) return res.status(404).json({ success:false, message:'Order not found' });
  res.json({ success:true, data: doc });
});

// update status
exports.updateOrder = asyncHandler(async (req, res) => {
  const o = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!o) return res.status(404).json({ success:false, message:'Order not found' });
  res.json({ success:true, data: o });
});

// delete
exports.deleteOrder = asyncHandler(async (req, res) => {
  const o = await Order.findByIdAndDelete(req.params.id);
  if (!o) return res.status(404).json({ success:false, message:'Order not found' });
  res.json({ success:true, message:'Deleted' });
});
