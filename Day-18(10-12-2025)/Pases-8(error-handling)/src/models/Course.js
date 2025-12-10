import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }]
});

courseSchema.index({ title: 1 }, { unique: true }); // uniqueness constraint

export default mongoose.model("Course", courseSchema);
