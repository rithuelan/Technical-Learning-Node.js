const { body } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("Name is required"),
  body("price").isNumeric().withMessage("Price must be numeric")
];
