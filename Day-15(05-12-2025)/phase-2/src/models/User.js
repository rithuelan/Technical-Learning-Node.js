// src/models/User.js
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,            // unique index on email
    validate: {
      validator: function (v) {
        // custom validator: must include '@'
        return typeof v === "string" && v.includes("@");
      },
      message: props => `Invalid email (${props.value}): must contain '@'`
    }
  },
  role: { type: String, enum: ["student","instructor","admin"], default: "student" }
}, { timestamps: true });

// Ensure index creation
userSchema.index({ email: 1 }, { unique: true });

module.exports = model("User", userSchema);
