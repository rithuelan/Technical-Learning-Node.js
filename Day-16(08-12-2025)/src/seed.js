const User = require("./models/User");
const Course = require("./models/Course");
const Lesson = require("./models/Lesson");
const Enrollment = require("./models/Enrollment");
require("./db");

async function seed() {
  await User.deleteMany();
  await Course.deleteMany();
  await Lesson.deleteMany();
  await Enrollment.deleteMany();

  const instructor = await User.create({
    name: "Instructor A",
    role: "instructor",
    lastActive: new Date()
  });

  const students = await User.insertMany([
    { name: "Student 1", role: "student", lastActive: new Date() },
    { name: "Student 2", role: "student", lastActive: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000) },
    { name: "Student 3", role: "student", lastActive: new Date() }
  ]);

  const course = await Course.create({
    title: "Node.js Masterclass",
    instructorId: instructor._id
  });

  const lessons = await Lesson.insertMany([
    { title: "Intro", duration: 10, courseId: course._id },
    { title: "Modules", duration: 20, courseId: course._id },
    { title: "Express", duration: 30, courseId: course._id }
  ]);

  await Enrollment.insertMany([
    {
      studentId: students[0]._id,
      courseId: course._id,
      progress: 90,
      completedLessons: [lessons[0]._id.toString(), lessons[1]._id.toString()]
    },
    {
      studentId: students[1]._id,
      courseId: course._id,
      progress: 10,
      completedLessons: []
    }
  ]);

  console.log("Seed completed");
  process.exit();
}

seed();
