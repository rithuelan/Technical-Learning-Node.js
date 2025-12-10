import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import User from "../src/models/User.js";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("User API", () => {
  it("should create a valid user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Test", email: "test@mail.com", role: "student" });
    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe("test@mail.com");
  });

  it("should fail invalid email", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Invalid", email: "invalidemail", role: "student" });
    expect(res.statusCode).toBe(400);
    expect(res.body.errors).toContain("Email is invalid");
  });

  it("should handle bulk insert errors gracefully", async () => {
    const users = [
      { name: "A", email: "a@mail.com", role: "student" },
      { name: "B", email: "a@mail.com", role: "student" } // duplicate email
    ];
    const res = await request(app).post("/users/bulk").send(users);
    expect(res.statusCode).toBe(409); // Duplicate key error
  });
});
