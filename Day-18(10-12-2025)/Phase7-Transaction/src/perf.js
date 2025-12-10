// src/perf.js
import { connectDB } from "./db.js";
import Course from "./models/Course.js";
import Enrollment from "./models/Enrollment.js";
import User from "./models/User.js";

async function perf() {
  await connectDB();

  console.time("courses_find_populate");
  const courses = await Course.find({})
    .limit(1000)
    .populate("instructors", "name email")
    .lean()
    .exec();
  console.timeEnd("courses_find_populate");
  console.log("Loaded courses:", courses.length);

  // For each course compute student count by query (bad approach)
  console.time("naive_count_each_course");
  for (let i = 0; i < Math.min(50, courses.length); i++) {
    const c = courses[i];
    await Enrollment.countDocuments({ course: c._id });
  }
  console.timeEnd("naive_count_each_course");

  // Better: aggregation
  console.time("aggregation_count_all_courses");
  const agg = await Enrollment.aggregate([
    { $group: { _id: "$course", count: { $sum: 1 } } }
  ]);
  console.timeEnd("aggregation_count_all_courses");
  console.log("Aggregated counts for", agg.length, "courses");

  // Read/write perf comparison sample: measure single document update vs bulk updates
  console.time("single_doc_updates_100");
  for (let i = 0; i < 100; i++) {
    await Course.updateOne({}, { $inc: { studentCount: 1 } });
  }
  console.timeEnd("single_doc_updates_100");

  console.time("bulk_update_many_100");
  const updates = [];
  for (let i = 0; i < 100; i++) {
    updates.push(Course.updateOne({}, { $inc: { studentCount: 1 } }));
  }
  await Promise.all(updates);
  console.timeEnd("bulk_update_many_100");

  process.exit(0);
}

perf().catch(e => { console.error(e); process.exit(1); });
