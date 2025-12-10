// src/transaction_example.js
import { connectDB } from "./db.js";
import mongoose from "mongoose";
import User from "./models/User.js";
import Course from "./models/Course.js";
import Enrollment from "./models/Enrollment.js";

async function doTransaction(studentId, courseId) {
  const conn = await connectDB();
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // create enrollment
    await Enrollment.create([{
      student: studentId,
      course: courseId,
      progress: 0
    }], { session });

    // increment denormalized field atomically
    await Course.updateOne({ _id: courseId }, { $inc: { studentCount: 1 } }, { session });

    // intentionally read latest doc inside transaction
    const course = await Course.findById(courseId).session(session);
    console.log("Course studentCount (in tx):", course.studentCount);

    await session.commitTransaction();
    console.log("Transaction committed.");
  } catch (err) {
    console.error("Transaction error, aborting:", err.message);
    await session.abortTransaction();
  } finally {
    session.endSession();
    process.exit(0);
  }
}

// call with actual IDs or run a quick sample
if (require.main === module) {
  // naive sample: find one student and one course
  (async () => {
    const conn = await connectDB();
    const s = await User.findOne({ role: "student" });
    const c = await Course.findOne({});
    if (!s || !c) {
      console.error("Need data seeded first.");
      process.exit(1);
    }
    await doTransaction(s._id, c._id);
  })();
}
