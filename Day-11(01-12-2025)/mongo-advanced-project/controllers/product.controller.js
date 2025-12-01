const Product = require('../models/product.model');
const asyncHandler = require('../middleware/asyncHandler');
const mongoose = require('mongoose');

// Create
exports.createProduct = asyncHandler(async (req, res) => {
  const payload = req.body;
  if (!payload.sku) payload.sku = 'SKU-' + Date.now();
  const p = await Product.create(payload);
  res.status(201).json({ success:true, data: p });
});

// List with pagination & sort & filter
exports.getProducts = asyncHandler(async (req, res) => {
  const { page, limit, skip } = require('../utils/pagination').parsePagination(req.query);
  const sortField = req.query.sort || 'createdAt';
  const sortOrder = req.query.order === 'asc' ? 1 : -1;
  const filter = {};
  if (req.query.q) filter.name = { $regex: req.query.q, $options: 'i' };
  if (req.query.category) filter.category = req.query.category;

  const [data, total] = await Promise.all([
    Product.find(filter).sort({ [sortField]: sortOrder }).skip(skip).limit(limit),
    Product.countDocuments(filter)
  ]);
  res.json({ success:true, meta:{ total, page, limit }, data });
});

// Get single
exports.getProduct = asyncHandler(async (req, res) => {
  const p = await Product.findById(req.params.id).populate('warehouseIds', 'name location');
  if (!p) return res.status(404).json({ success:false, message:'Product not found' });
  res.json({ success:true, data: p });
});

// Update (partial)
exports.updateProduct = asyncHandler(async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!p) return res.status(404).json({ success:false, message:'Product not found' });
  res.json({ success:true, data: p });
});

// Replace (PUT)
exports.replaceProduct = asyncHandler(async (req, res) => {
  // findOneAndReplace available in MongoDB > use findByIdAndUpdate with overwrite
  const newDoc = req.body;
  const p = await Product.findByIdAndUpdate(req.params.id, newDoc, { new: true, overwrite: true });
  if (!p) return res.status(404).json({ success:false, message:'Product not found' });
  res.json({ success:true, data: p });
});

// Delete
exports.deleteProduct = asyncHandler(async (req, res) => {
  const p = await Product.findByIdAndDelete(req.params.id);
  if (!p) return res.status(404).json({ success:false, message:'Product not found' });
  res.json({ success:true, message: 'Deleted' });
});

// Aggregation examples
exports.categoryStats = asyncHandler(async (req, res) => {
  const agg = [
    { $match: {} },
    { $group: { _id: '$category', total: { $sum: 1 }, avgPrice: { $avg: '$price' } } },
    { $sort: { total: -1 } },
    { $project: { _id: 0, category: '$_id', total: 1, avgPrice: 1 } }
  ];
  const resAgg = await Product.aggregate(agg);
  res.json({ success:true, data: resAgg });
});

// Complex lookup example: products with warehouses & total inventory quantity across warehouses
exports.productsWithWarehouseInventory = asyncHandler(async (req, res) => {
  const agg = [
    { $lookup: {
        from: 'warehouses',
        localField: '_id',
        foreignField: 'inventory.productId',
        as: 'warehouses'
    }},
    { $addFields: {
        totalInventory: {
          $sum: {
            $map: {
              input: '$warehouses',
              as: 'w',
              in: {
                $reduce: {
                  input: {
                    $filter: {
                      input: '$$w.inventory',
                      as: 'inv',
                      cond: { $eq: ['$$inv.productId', '$_id'] }
                    }
                  },
                  initialValue: 0,
                  in: { $add: ['$$value', '$$this.qty'] }
                }
              }
            }
          }
        }
    }},
    { $project: { sku:1, name:1, price:1, totalInventory:1 } }
  ];
  const out = await Product.aggregate(agg);
  res.json({ success:true, data: out });
});
