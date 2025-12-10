import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  studentCount: { type: Number, default: 0 }, // denormalized field for quick reads
  createdAt: { type: Date, default: Date.now }
});
// example compound index for queries by createdAt + studentCount
courseSchema.index({ createdAt: 1, studentCount: -1 });
export default mongoose.model("Course", courseSchema);

