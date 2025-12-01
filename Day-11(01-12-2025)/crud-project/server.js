import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import studentRoutes from "./routes/studentRoutes.js";

// Load env
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/students", studentRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("MongoDB Atlas CRUD API Running...");
});

// Start Server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});

