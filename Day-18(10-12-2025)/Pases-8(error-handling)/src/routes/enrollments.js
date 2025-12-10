import express from "express";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

// Create Enrollment
router.post("/", async (req, res, next) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (err) {
    next(err);
  }
});

// Get all enrollments
router.get("/", async (req, res, next) => {
  try {
    const enrollments = await Enrollment.find().populate("student course");
    res.json(enrollments);
  } catch (err) {
    next(err);
  }
});

export default router;
