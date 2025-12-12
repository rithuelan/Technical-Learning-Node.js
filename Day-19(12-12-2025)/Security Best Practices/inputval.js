import { body, validationResult } from "express-validator";

app.post(
  "/register",
  [
    body("email").isEmail(),
    body("name").trim().escape(),
    body("password").isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    res.send("User Validated");
  }
);
