// src/models/Lesson.js
const { Schema, model } = require("mongoose");

const lessonSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, default: "" },
  duration: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return typeof v === "number" && v > 0; // duration > 0
      },
      message: props => `Lesson duration must be > 0 (got ${props.value})`
    }
  }
}, { timestamps: true });

module.exports = model("Lesson", lessonSchema);
