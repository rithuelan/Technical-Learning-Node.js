import mongoose from "mongoose";

const lessonSubSchema = new mongoose.Schema({
  title: String,
  duration: Number
});

const courseSchema = new mongoose.Schema({
  title: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lessons: [lessonSubSchema]   // Embedded
});

export default mongoose.model("Course", courseSchema);
