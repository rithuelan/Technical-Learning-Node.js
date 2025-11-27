const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  dept: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"     // REFERENCE
  }
});

module.exports = mongoose.model("Student", studentSchema);
