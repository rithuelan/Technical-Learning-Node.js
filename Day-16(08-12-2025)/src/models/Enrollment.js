const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  progress: Number,          // between 0–100
  completedLessons: [String] // lesson IDs as strings
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
