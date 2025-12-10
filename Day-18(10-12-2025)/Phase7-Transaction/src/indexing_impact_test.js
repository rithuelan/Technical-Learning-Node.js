// src/indexing_impact_test.js
import { connectDB } from "./db.js";
import Enrollment from "./models/Enrollment.js";

async function test() {
  await connectDB();
  const idxName = "course_progress_idx";

  // remove index if exists
  try { await Enrollment.collection.dropIndex(idxName); } catch (e) {}

  console.time("without_index_query");
  await Enrollment.find({ course: (await Enrollment.findOne()).course }).sort({ progress: -1 }).limit(50).exec();
  console.timeEnd("without_index_query");

  // create index to support sort and filter
  await Enrollment.collection.createIndex({ course: 1, progress: -1 }, { name: idxName });

  console.time("with_index_query");
  await Enrollment.find({ course: (await Enrollment.findOne()).course }).sort({ progress: -1 }).limit(50).exec();
  console.timeEnd("with_index_query");

  console.log("Now see the explain() to confirm index usage");
  const explained = await Enrollment.find({ course: (await Enrollment.findOne()).course }).sort({ progress: -1 }).limit(50).explain("executionStats");
  console.log(JSON.stringify(explained.queryPlanner, null, 2));
  process.exit(0);
}

test().catch(e => { console.error(e); process.exit(1); });
