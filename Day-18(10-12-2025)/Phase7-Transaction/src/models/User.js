// src/models/User.js
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  role: { type: String, enum: ["student", "instructor"], default: "student" },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("User", userSchema);


