const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  addresses: [addressSchema]   // EMBEDDED documents
});

module.exports = mongoose.model("User", userSchema);
