const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: String,
  duration: Number, // minutes
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
});

module.exports = mongoose.model("Lesson", lessonSchema);
