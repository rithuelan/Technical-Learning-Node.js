// src/failed_transaction_sim.js
import { connectDB } from "./db.js";
import mongoose from "mongoose";
import User from "./models/User.js";
import Course from "./models/Course.js";
import Enrollment from "./models/Enrollment.js";

async function simulateFail(studentId, courseId) {
  await connectDB();
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    console.log("Creating enrollment...");
    await Enrollment.create([{
      student: studentId,
      course: courseId
    }], { session });

    console.log("Incrementing course...");
    await Course.updateOne({ _id: courseId }, { $inc: { studentCount: 1 } }, { session });

    // simulate a failure
    throw new Error("Simulated failure after DB ops.");

    await session.commitTransaction();
  } catch (err) {
    console.warn("Caught error -> aborting tx:", err.message);
    await session.abortTransaction();
    // Verify rollback: try to find the enrollment created above (should be absent)
    const found = await Enrollment.findOne({ student: studentId, course: courseId });
    console.log("Enrollment found after rollback? ->", !!found);
  } finally {
    session.endSession();
    process.exit(0);
  }
}

if (require.main === module) {
  (async () => {
    await connectDB();
    const s = await User.findOne({ role: "student" });
    const c = await Course.findOne({});
    await simulateFail(s._id, c._id);
  })();
}
