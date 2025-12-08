require("./db");
const Enrollment = require("./models/Enrollment");
const Course = require("./models/Course");
const Lesson = require("./models/Lesson");
const User = require("./models/User");

// ---------- 1. Top 5 Courses by Student Count ----------
async function topCourses() {
  const data = await Enrollment.aggregate([
    { $group: { _id: "$courseId", studentCount: { $sum: 1 } } },
    { $sort: { studentCount: -1 } },
    { $limit: 5 },
    {
      $lookup: {
        from: "courses",
        localField: "_id",
        foreignField: "_id",
        as: "course"
      }
    }
  ]);

  console.log("\n1️⃣ Top 5 Courses:", data);
}

// ---------- 2. Average student progress per course ----------
async function avgProgress() {
  const data = await Enrollment.aggregate([
    { $group: { _id: "$courseId", avgProgress: { $avg: "$progress" } } }
  ]);

  console.log("\n2️⃣ Avg Progress:", data);
}

// ---------- 3. Total lesson duration per course ----------
async function totalDuration() {
  const data = await Lesson.aggregate([
    { $group: { _id: "$courseId", totalDuration: { $sum: "$duration" } } }
  ]);

  console.log("\n3️⃣ Total Lesson Duration:", data);
}

// ---------- 4. Students who completed ALL lessons ----------
async function completedAllLessons() {
  const lessons = await Lesson.countDocuments({});

  const data = await Enrollment.aggregate([
    {
      $project: {
        studentId: 1,
        courseId: 1,
        allCompleted: {
          $eq: [{ $size: "$completedLessons" }, lessons]
        }
      }
    },
    { $match: { allCompleted: true } }
  ]);

  console.log("\n4️⃣ Completed All Lessons:", data);
}

// ---------- 5. Number of enrollments per instructor ----------
async function enrollmentsPerInstructor() {
  const data = await Course.aggregate([
    {
      $lookup: {
        from: "enrollments",
        localField: "_id",
        foreignField: "courseId",
        as: "enrollments"
      }
    },
    {
      $group: {
        _id: "$instructorId",
        totalEnrollments: { $sum: { $size: "$enrollments" } }
      }
    }
  ]);

  console.log("\n5️⃣ Enrollments Per Instructor:", data);
}

// ---------- 6. Inactive students (no activity in 30 days) ----------
async function inactiveStudents() {
  const DATE_30 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const data = await User.aggregate([
    { $match: { role: "student" } },
    { $match: { lastActive: { $lt: DATE_30 } } }
  ]);

  console.log("\n6️⃣ Inactive Students:", data);
}

// ---------- 7. $facet: course stats + top students ----------
async function facetQuery() {
  const data = await Enrollment.aggregate([
    {
      $facet: {
        courseStats: [
          { $group: { _id: "$courseId", avgProgress: { $avg: "$progress" } } }
        ],
        topStudents: [
          { $sort: { progress: -1 } },
          { $limit: 3 }
        ]
      }
    }
  ]);

  console.log("\n7️⃣ $facet Output:", data);
}

// ---------- 8. $bucket: group courses by duration ----------
async function bucketDuration() {
  const durations = await Lesson.aggregate([
    {
      $group: {
        _id: "$courseId",
        totalDuration: { $sum: "$duration" }
      }
    },
    {
      $bucket: {
        groupBy: "$totalDuration",
        boundaries: [0, 15, 30, 60, 999],
        default: "Others",
        output: { count: { $sum: 1 }, courses: { $push: "$_id" } }
      }
    }
  ]);

  console.log("\n8️⃣ Duration Bucket:", durations);
}

// ---------- 9. $lookup + $group: Student progress per course ----------
async function studentProgressLookup() {
  const data = await Enrollment.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "studentId",
        foreignField: "_id",
        as: "student"
      }
    },
    {
      $group: {
        _id: "$courseId",
        avgProgress: { $avg: "$progress" },
        students: { $push: "$student.name" }
      }
    }
  ]);

  console.log("\n9️⃣ Lookup + Group:", data);
}

// ---------- 10. Run All + Explanation ----------
async function runAll() {
  await topCourses();
  await avgProgress();
  await totalDuration();
  await completedAllLessons();
  await enrollmentsPerInstructor();
  await inactiveStudents();
  await facetQuery();
  await bucketDuration();
  await studentProgressLookup();

  console.log("\n🔟 All pipelines executed successfully!");
  process.exit();
}

runAll();
