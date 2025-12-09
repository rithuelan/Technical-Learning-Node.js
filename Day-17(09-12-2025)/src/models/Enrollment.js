import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
});

// Index to speed up course → student lookups
enrollmentSchema.index({ course: 1, user: 1 });

export default mongoose.model("Enrollment", enrollmentSchema);
