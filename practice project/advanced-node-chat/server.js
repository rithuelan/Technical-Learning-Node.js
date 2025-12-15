// server.js
import express from "express";
import http from "http";
import { initSocket } from "./sockets/socket.js";
import { initSSE } from "./sse/sse.js";
import { startGraphQL } from "./graphql/schema.js";
import { runWorker } from "./workers/cpuWorker.js";
import "./child/logProcess.js";

const app = express();
const server = http.createServer(app);

app.use(express.json());

// Event loop safe async route
app.get("/heavy", async (req, res) => {
  const result = await runWorker(45);
  res.json({ result });
});

// Memory monitoring (leak detection)
setInterval(() => {
  console.log("Memory:", process.memoryUsage().heapUsed / 1024 / 1024, "MB");
}, 5000);

initSocket(server);
initSSE(app);
startGraphQL(app, server);

server.listen(3000, () => {
  console.log(`Worker ${process.pid} running on 3000`);
});
