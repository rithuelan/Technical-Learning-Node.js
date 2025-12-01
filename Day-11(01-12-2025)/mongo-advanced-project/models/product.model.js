const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number
}, { timestamps: true });

productSchema.index({ name: 1 }); // INDEX

module.exports = mongoose.model("Product", productSchema);
