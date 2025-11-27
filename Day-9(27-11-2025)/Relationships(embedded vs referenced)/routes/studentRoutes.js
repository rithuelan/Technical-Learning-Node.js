const express = require("express");
const Student = require("../models/studentModel");
const Department = require("../models/departmentModel");
const router = express.Router();

// Create department
router.post("/department", async (req, res) => {
  res.json(await Department.create(req.body));
});

// Create student with dept reference
router.post("/", async (req, res) => {
  res.json(await Student.create(req.body));
});

// Get students + populate referenced department
router.get("/", async (req, res) => {
  const students = await Student.find().populate("dept");
  res.json(students);
});

module.exports = router;
