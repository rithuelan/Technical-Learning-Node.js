// src/index.js
const dotenv = require("dotenv");
dotenv.config();
const { connect, disconnect } = require("./db");
const Course = require("./models/Course");

async function main() {
  await connect();
  console.log("Connected.");

  // Show the first 5 courses and populate instructor & lessonsRef
  const courses = await Course.find({})
    .limit(5)
    .populate("instructor", "name email")
    .populate("lessonsRef")
    .lean();

  console.log(`Found ${courses.length} course(s). Example:`);
  for (const c of courses) {
    console.log({
      id: c._id.toString(),
      title: c.title,
      instructor: c.instructor ? c.instructor.name : null,
      lessonsEmbedded: c.lessonsEmbedded?.length || 0,
      lessonsRef: c.lessonsRef?.length || 0
    });
  }

  await disconnect();
  console.log("Disconnected.");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
