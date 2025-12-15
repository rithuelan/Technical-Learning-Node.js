import express from "express";

const app = express();

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");

  let counter = 0;
  const interval = setInterval(() => {
    res.write(`data: Message ${counter}\n\n`);
    counter++;
  }, 1000);

  req.on("close", () => clearInterval(interval));
});

app.listen(3000, () => console.log("SSE server running on port 3000"));
