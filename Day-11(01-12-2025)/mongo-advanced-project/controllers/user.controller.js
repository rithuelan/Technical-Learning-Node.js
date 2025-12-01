const User = require('../models/user.model');
const asyncHandler = require('../middleware/asyncHandler');

exports.createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user });
});

exports.getUsers = asyncHandler(async (req, res) => {
  const { page, limit, skip } = require('../utils/pagination').parsePagination(req.query);
  const filter = {};
  if (req.query.q) filter.name = { $regex: req.query.q, $options: 'i' };
  const [data, total] = await Promise.all([
    User.find(filter).skip(skip).limit(limit),
    User.countDocuments(filter)
  ]);
  res.json({ success: true, meta: { total, page, limit }, data });
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ success:false, message:'User not found' });
  res.json({ success:true, data: user });
});

exports.updateUser = asyncHandler(async (req, res) => {
  const u = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!u) return res.status(404).json({ success:false, message:'User not found' });
  res.json({ success:true, data: u });
});

exports.deleteUser = asyncHandler(async (req, res) => {
  const u = await User.findByIdAndDelete(req.params.id);
  if (!u) return res.status(404).json({ success:false, message:'User not found' });
  res.json({ success:true, message:'Deleted' });
});
