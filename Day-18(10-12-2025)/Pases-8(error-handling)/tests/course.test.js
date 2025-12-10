import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import Course from "../src/models/Course.js";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Course API", () => {
  it("should create a course", async () => {
    const res = await request(app).post("/courses").send({ title: "Math", description: "Math Course" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Math");
  });

  it("should fail duplicate title", async () => {
    await Course.create({ title: "Physics" });
    const res = await request(app).post("/courses").send({ title: "Physics" });
    expect(res.statusCode).toBe(409);
  });
});
