// src/seed.js
import { faker } from "@faker-js/faker";
import { connectDB } from "./db.js";
import User from "./models/User.js";
import Course from "./models/Course.js";
import Lesson from "./models/Lesson.js";
import Enrollment from "./models/Enrollment.js";

async function seed({ students = 1200, courses = 60 } = {}) {
  await connectDB();

  console.log("Clearing small collections...");
  await Promise.all([
    User.deleteMany({}),
    Course.deleteMany({}),
    Lesson.deleteMany({}),
    Enrollment.deleteMany({})
  ]);

  console.log(`Creating ${students} users...`);
  const users = [];
  for (let i = 0; i < students; i++) {
    users.push({
      name: faker.person.fullName(),
      email: `user${i}_${Date.now()}@example.com`,
      role: i % 10 === 0 ? "instructor" : "student"
    });
  }
  const createdUsers = await User.insertMany(users, { ordered: false });

  console.log(`Creating ${courses} courses and lessons...`);
  const lessonsBulk = [];
  const coursesDocs = [];
  for (let i = 0; i < courses; i++) {
    const numLessons = faker.number.int({ min: 5, max: 20 });
    const lessonIds = [];
    for (let j = 0; j < numLessons; j++) {
      lessonsBulk.push({
        title: `Course${i}-Lesson${j} ${faker.lorem.words(3)}`,
        duration: faker.number.int({ min: 60, max: 3600 }),
        content: faker.lorem.paragraph()
      });
    }
  }
  const createdLessons = await Lesson.insertMany(lessonsBulk, { ordered: true });

  // now create courses referencing lessons
  let lessonCursor = 0;
  const instructors = createdUsers.filter(u => u.role === "instructor");
  for (let i = 0; i < courses; i++) {
    const numLessons = faker.number.int({ min: 5, max: 20 });
    const lessonIds = createdLessons.slice(lessonCursor, lessonCursor + numLessons).map(l => l._id);
    lessonCursor += numLessons;
    const course = {
      title: `Course ${i} - ${faker.lorem.words(4)}`,
      description: faker.lorem.sentences(2),
      lessons: lessonIds,
      instructors: [instructors[i % instructors.length]._id],
      studentCount: 0
    };
    coursesDocs.push(course);
  }
  const createdCourses = await Course.insertMany(coursesDocs);

  console.log("Randomly enrolling students...");
  // Enroll random students in courses
  const enrollOps = [];
  const studentsList = createdUsers.filter(u => u.role === "student");
  for (const s of studentsList) {
    // each student enrolls in 0-5 courses
    const enrollCount = faker.number.int({ min: 0, max: 5 });
    const picked = faker.helpers.arrayElements(createdCourses, enrollCount);
    for (const c of picked) {
      enrollOps.push({
        student: s._id,
        course: c._id,
        progress: faker.number.int({ min: 0, max: 100 })
      });
    }
  }
  // bulk insert enrollments (ignore duplicate key errors)
  try {
    await Enrollment.insertMany(enrollOps, { ordered: false });
  } catch (e) {
    console.warn("Some enrollments failed (likely unique constraints) — continuing");
  }

  // update denormalized counts quickly (aggregation)
  const agg = await Enrollment.aggregate([
    { $group: { _id: "$course", count: { $sum: 1 } } }
  ]);
  const bulkCourse = Course.collection.initializeUnorderedBulkOp();
  for (const row of agg) {
    bulkCourse.find({ _id: row._id }).updateOne({ $set: { studentCount: row.count } });
  }
  if (agg.length) await bulkCourse.execute();

  console.log("Seed complete.");
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
