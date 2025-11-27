const express = require("express");
const cors = require("cors");
const connectDB = require("./config");

const userRoutes = require("./routes/userRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
