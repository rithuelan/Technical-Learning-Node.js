import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", index: true },
  enrolledAt: { type: Date, default: Date.now },
  progress: { type: Number, default: 0 },
});
enrollmentSchema.index({ course: 1, student: 1 }, { unique: true }); // one enrollment per student/course
export default mongoose.model("Enrollment", enrollmentSchema);
