import { connectDB } from "./src/db.js";
import User from "./src/models/User.js";
import Course from "./src/models/Course.js";
import Enrollment from "./src/models/Enrollment.js";

await connectDB();

console.log("Clearing old data...");
await User.deleteMany();
await Course.deleteMany();
await Enrollment.deleteMany();

// 1. Create Instructor
const instructor = await User.create({
  name: "Alice",
  email: "alice@mail.com",
  role: "instructor"
});

// 2. Create Students
const students = await User.insertMany([
  { name: "John", email: "john@mail.com", role: "student" },
  { name: "Mary", email: "mary@mail.com", role: "student" }
]);

// 3. Create a Course with embedded lessons
const course = await Course.create({
  title: "Node.js Mastery",
  instructor: instructor._id,
  lessons: [
    { title: "Intro", duration: 5 },
    { title: "Modules", duration: 10 },
    { title: "Async JS", duration: 15 }
  ]
});

// Extract correct ObjectId of the intro lesson
const introLessonId = course.lessons[0]._id;

// 4. Create Many-to-Many Enrollments
await Enrollment.insertMany([
  {
    student: students[0]._id,
    course: course._id,
    progress: [{ lessonId: introLessonId, completed: true }]
  },
  {
    student: students[1]._id,
    course: course._id,
    progress: []
  }
]);

console.log(" Seed Data Inserted Successfully!");
process.exit();
