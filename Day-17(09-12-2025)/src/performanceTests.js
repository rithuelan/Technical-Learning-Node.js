import { connectDB } from "./db.js";
import User from "./models/User.js";
import Course from "./models/Course.js";

const measure = async () => {
  await connectDB();

  console.log("\n=== 1. Slow query WITHOUT index ===");
  console.time("slow_query");
  await User.find({ email: "user999@mail.com" }).hint({ email: 0 });
  console.timeEnd("slow_query");

  console.log("\n=== 2. Fast query WITH index ===");
  console.time("fast_query");
  await User.find({ email: "user999@mail.com" });
  console.timeEnd("fast_query");

  console.log("\n=== 3. Explain() output ===");
  const explain = await User.find({ email: "user999@mail.com" }).explain("executionStats");
  console.log(JSON.stringify(explain.executionStats, null, 2));

  console.log("\n=== 4. Test text index ===");
  console.time("text_search");
  await Course.find({ $text: { $search: "performance" } });
  console.timeEnd("text_search");

  process.exit();
};

measure();
