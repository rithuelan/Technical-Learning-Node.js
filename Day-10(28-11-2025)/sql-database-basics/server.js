import express from "express";
import studentRoutes from "./routes/students.js";

const app = express();
app.use(express.json());

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("SQL Database API Running...");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
