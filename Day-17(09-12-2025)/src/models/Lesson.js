import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: String,
  duration: Number
});

export default mongoose.model("Lesson", lessonSchema);
