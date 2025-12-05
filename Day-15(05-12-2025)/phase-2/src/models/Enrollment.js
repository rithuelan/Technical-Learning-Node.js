// src/models/Enrollment.js
const { Schema, model, Types } = require("mongoose");

const enrollmentSchema = new Schema({
  course: { type: Types.ObjectId, ref: "Course", required: true },
  student: { type: Types.ObjectId, ref: "User", required: true },
  progress: {
    type: Number,
    default: 0,
    validate: {
      validator: function (v) {
        return typeof v === "number" && v >= 0 && v <= 100;
      },
      message: props => `Progress must be between 0 and 100 (got ${props.value})`
    }
  },
  enrolledAt: { type: Date, default: () => new Date() }
}, { timestamps: true });

enrollmentSchema.index({ course: 1, student: 1 }, { unique: true }); // one enrollment per student per course

module.exports = model("Enrollment", enrollmentSchema);
