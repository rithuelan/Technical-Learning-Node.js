// src/models/Course.js
const { Schema, model, Types } = require("mongoose");
const LessonEmbeddedSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, default: "" },
  duration: {
    type: Number,
    required: true,
    validate: {
      validator: v => typeof v === "number" && v > 0,
      message: props => `Embedded lesson duration must be > 0 (got ${props.value})`
    }
  }
}, { _id: true }); // give each embedded lesson an _id

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  category: { type: String, index: true },

  // TWO approaches:
  lessonsEmbedded: { type: [LessonEmbeddedSchema], default: [] }, // embedded documents
  lessonsRef: [{ type: Types.ObjectId, ref: "Lesson" }],           // referenced lessons

  instructor: { type: Types.ObjectId, ref: "User", required: true },
  students: [{ type: Types.ObjectId, ref: "User", default: [] }]

}, { timestamps: true });

module.exports = model("Course", courseSchema);
