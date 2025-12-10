import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Email is invalid"]
  },
  role: { type: String, enum: ["student", "instructor"], required: true }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
