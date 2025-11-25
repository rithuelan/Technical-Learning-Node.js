const express = require("express");
//body → used to validate fields in the request body, Example: check if email is valid, password length is correct.
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

// User Registration API
app.post(
  "/register",
  [
    body("username")
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters"),
    body("email").isEmail().withMessage("Must be a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Simulate saving user
    res.json({
      message: "User registered successfully",
      user: {
        username: req.body.username,
        email: req.body.email,
      },
    });
  }
);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));