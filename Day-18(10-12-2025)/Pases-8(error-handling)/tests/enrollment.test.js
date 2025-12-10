import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import User from "../src/models/User.js";
import Course from "../src/models/Course.js";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Enrollment API", () => {
  it("should create enrollment", async () => {
    const user = await User.create({ name: "S", email: "s@mail.com", role: "student" });
    const course = await Course.create({ title: "Chemistry" });

    const res = await request(app).post("/enrollments").send({ student: user._id, course: course._id });
    expect(res.statusCode).toBe(201);
    expect(res.body.progress).toBe(0);
  });
});
