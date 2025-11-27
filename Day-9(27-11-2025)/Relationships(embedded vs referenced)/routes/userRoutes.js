const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

// Create user with embedded address
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Add new address to an existing user
router.put("/:id/address", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.addresses.push(req.body); // push new address
  await user.save();
  res.json(user);
});

// Get all users
router.get("/", async (req, res) => {
  res.json(await User.find());
});

module.exports = router;
