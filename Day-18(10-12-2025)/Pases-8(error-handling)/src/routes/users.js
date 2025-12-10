import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Create User
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

// Bulk Insert Users
router.post("/bulk", async (req, res, next) => {
  try {
    const users = await User.insertMany(req.body, { ordered: false });
    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
});

export default router;
