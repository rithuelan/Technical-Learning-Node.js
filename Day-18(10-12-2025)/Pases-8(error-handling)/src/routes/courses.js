import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// Create Course
router.post("/", async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
});

// Conditional Delete
router.delete("/:id", async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const enrolledStudents = 0; // simulate check
    if (enrolledStudents > 0) throw new Error("Cannot delete course with enrolled students");

    await course.remove();
    res.json({ message: "Course deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
