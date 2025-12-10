import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId },
  completed: { type: Boolean, default: false }
});

const enrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  progress: [progressSchema]
});

export default mongoose.model("Enrollment", enrollmentSchema);
