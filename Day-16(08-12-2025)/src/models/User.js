const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ["student", "instructor"] },
  lastActive: Date
});

module.exports = mongoose.model("User", userSchema);
