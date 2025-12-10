// src/explain_slow_queries.js
import { connectDB } from "./db.js";
import Enrollment from "./models/Enrollment.js";
import Course from "./models/Course.js";

async function explain() {
  await connectDB();

  // an example slow-ish query: find enrollments for a course and sort by progress
  const course = await Course.findOne({});
  if (!course) return process.exit(1);

  // Use the native collection to access explain
  const q = Enrollment.find({ course: course._id }).sort({ progress: -1 }).limit(100);
  const explained = await q.explain("executionStats");
  // Print important fields
  console.log("Query planSummary:", explained.queryPlanner?.winningPlan?.stage || explained.queryPlanner?.winningPlan);
  console.log("Total docs examined:", explained.executionStats?.totalDocsExamined);
  console.log("Total keys examined:", explained.executionStats?.totalKeysExamined);
  console.log("Execution time (ms):", explained.executionStats?.executionMillis);
  process.exit(0);
}

explain().catch(e => { console.error(e); process.exit(1); });
