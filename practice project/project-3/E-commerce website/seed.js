require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');

(async () => {
  await connectDB();
  const ProductSchema = new mongoose.Schema({
    name: String, description: String, price: Number, stock: Number, images: [String], createdAt: Date
  });
  let Product;
  try { Product = mongoose.model('Product'); } catch (e) { Product = mongoose.model('Product', ProductSchema); }

  await Product.deleteMany({});
  await Product.create([
    { name: 'Phone X', description: 'Fantastic phone', price: 19999, stock: 12, images: [] },
    { name: 'Laptop Pro', description: 'Powerful laptop', price: 79999, stock: 5, images: [] }
  ]);
  console.log('Seeded sample products');
  process.exit(0);
})();
