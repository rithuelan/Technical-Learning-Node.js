import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, index: true },
  role: { type: String, enum: ["student", "instructor"], index: true }
});

// Compound index
userSchema.index({ role: 1, email: 1 });

// Text index
userSchema.index({ name: "text" });

export default mongoose.model("User", userSchema);
