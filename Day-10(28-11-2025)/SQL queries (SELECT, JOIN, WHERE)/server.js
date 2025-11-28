import express from "express";
import { runQueries } from "./queries.js";

const app = express();

app.get("/", async (req, res) => {
  await runQueries();
  res.send("SQL queries executed. Check terminal output!");
});

app.listen(5000, () =>
  console.log("Server running at http://localhost:5000")
);
