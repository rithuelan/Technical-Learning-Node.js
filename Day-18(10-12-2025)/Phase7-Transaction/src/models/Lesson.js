import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema({
  title: String,
  duration: Number, // seconds
  content: String
});
export default mongoose.model("Lesson", lessonSchema);