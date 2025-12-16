import express from "express";
import jobQueue from "./queue.js";

const app = express();

app.get("/send-email", async (req, res) => {
  await jobQueue.add({ to: "user@mail.com", subject: "Welcome" });
  res.send("Email job added to queue");
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
