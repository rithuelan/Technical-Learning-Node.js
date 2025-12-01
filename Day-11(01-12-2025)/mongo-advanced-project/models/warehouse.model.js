const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({
  location: String,
  capacity: Number,
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
}, { timestamps: true });

module.exports = mongoose.model("Warehouse", warehouseSchema);
