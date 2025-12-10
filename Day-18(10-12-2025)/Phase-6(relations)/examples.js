import User from "./models/User.js";
import Course from "./models/Course.js";
import Enrollment from "./models/Enrollment.js";

//
// 1. Fetch course with ALL enrolled students (populate)
//
const courseWithStudents = await Enrollment.find({ course: courseId })
  .populate("student")
  .populate("course");

console.log("Students enrolled:", courseWithStudents);

//
// 2. Student progress with nested populate
//

const studentProgress = await Enrollment.findOne({ student: studentId })
  .populate({
    path: "course",
    populate: {
      path: "instructor",
      model: "User"
    }
  });

console.log("Student Progress:", studentProgress);

//
// 3. Compare populate vs separate queries
//
console.time("populate");
await Enrollment.find().populate("student").populate("course");
console.timeEnd("populate");

console.time("separate");
const e = await Enrollment.find();
const s = await User.find({ _id: e.map(i => i.student) });
const c = await Course.find({ _id: e.map(i => i.course) });
console.timeEnd("separate");

//
// 4. Cascading delete (remove course → delete enrollments)
//
await Course.deleteOne({ _id: courseId });
await Enrollment.deleteMany({ course: courseId }); // done via hook too

//
// 5. Cascading update (course instructor changed)
//
await Course.updateOne(
  { _id: courseId },
  { instructor: newInstructorId }
);

console.log("Instructor updated.");

//
// 6. Shallow populate vs Deep populate
//

// SHALLOW
await Enrollment.find().populate("student");

// DEEP
await Enrollment.find().populate({
  path: "course",
  populate: { path: "instructor" }
});

//
// 7. Virtual field example
//
const cons = await Course.findOne();
console.log("Completion %:", cons.completion);

//
// 8. Embedded + Referenced data together
//
const hybridData = await Course.find().populate("instructor");
console.log("Lessons embedded & enrollments referenced:", hybridData);
