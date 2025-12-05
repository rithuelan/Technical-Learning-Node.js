// src/seed.js
const dotenv = require("dotenv");
dotenv.config(); // dotenv-cli also sets env; this is safe fallback
const { connect, disconnect } = require("./db");
const User = require("./models/User");
const Lesson = require("./models/Lesson");
const Course = require("./models/Course");
const Enrollment = require("./models/Enrollment");

async function run() {
  await connect();
  console.log("Connected to DB.");

  // clear (for demo) - be careful on prod
  await Promise.all([
    User.deleteMany({}),
    Lesson.deleteMany({}),
    Course.deleteMany({}),
    Enrollment.deleteMany({})
  ]);

  // 1) create users
  const instructor = await User.create({ name: "Alice Instructor", email: "alice@school.io", role: "instructor" });
  const student1 = await User.create({ name: "Bob Student", email: "bob@student.com", role: "student" });
  const student2 = await User.create({ name: "Cathy Student", email: "cathy@student.com", role: "student" });

  console.log("Users created:", instructor.email, student1.email, student2.email);

  // 2) create referenced lessons
  const lessonRef1 = await Lesson.create({ title: "Intro", content: "Welcome", duration: 5 });
  const lessonRef2 = await Lesson.create({ title: "Deep Dive", content: "Details", duration: 30 });

  console.log("Referenced lessons created:", lessonRef1._id.toString(), lessonRef2._id.toString());

  // 3) create a course with embedded lessons + references
  const course = await Course.create({
    title: "My Course",
    description: "A demo course",
    category: "programming",
    instructor: instructor._id,
    students: [student1._id, student2._id],
    lessonsEmbedded: [
      { title: "Embedded 1", content: "Embedded content", duration: 10 },
      { title: "Embedded 2", content: "More embedded", duration: 15 }
    ],
    lessonsRef: [lessonRef1._id, lessonRef2._id]
  });

  console.log("Course created:", course._id.toString());

  // 4) create enrollments
  const enr1 = await Enrollment.create({ course: course._id, student: student1._id, progress: 12 });
  const enr2 = await Enrollment.create({ course: course._id, student: student2._id, progress: 0 });

  console.log("Enrollments created:", enr1._id.toString(), enr2._id.toString());

  // Validate: try to insert invalid email (uncomment to see error)
  // await User.create({ name: "Bad", email: "bad.email.without.at", role: "student" });

  // Validate: try to create lesson with duration 0 (uncomment to see error)
  // await Lesson.create({ title: "Bad Lesson", content: "", duration: 0 });

  // Validate: try to create enrollment with progress 101 (uncomment to see error)
  // await Enrollment.create({ course: course._id, student: student1._id, progress: 101 });

  // Example: fetch course and populate refs
  const found = await Course.findById(course._id)
    .populate("instructor", "name email role")
    .populate("lessonsRef")
    .populate("students", "name email")
    .lean();

  console.log("Populated Course (summary):");
  console.log({
    title: found.title,
    instructor: found.instructor,
    lessonsEmbeddedCount: found.lessonsEmbedded.length,
    lessonsRefCount: found.lessonsRef.length,
    studentsCount: found.students.length
  });

  await disconnect();
  console.log("Disconnected.");
}

run().catch(err => {
  console.error("Seed error:", err);
  process.exit(1);
});
