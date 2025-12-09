import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }]
});

// Text index on title + description
courseSchema.index({ title: "text", description: "text" });

export default mongoose.model("Course", courseSchema);
