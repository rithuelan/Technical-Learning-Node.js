
# Node.js Performance & Advanced APIs

This guide covers key concepts and examples for **scaling, performance optimization, caching, and real-time APIs** in Node.js.

---

## **1. Clustering and Load Balancing**
Node.js runs on a single thread. CPU-heavy tasks can block the event loop. Clustering allows running multiple Node.js processes across CPU cores.

**Key Points:**
- Uses `cluster` module.
- Each worker is a separate process but shares the same server port.
- Works well on multi-core systems.

**Example:**

import cluster from "cluster";
import os from "os";
import http from "http";

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  http.createServer((req, res) => res.end("Hello from worker")).listen(3000);
}
# 2. Child Processes
Run external processes without blocking Node.js.

Key Methods:

spawn → stream data continuously.

exec → run command and get full output.

fork → run another Node.js script as a child.

Example:

javascript
Copy code
import { exec } from "child_process";

exec("ls -la", (err, stdout, stderr) => {
  console.log(stdout);
});
# 3. Worker Threads
Runs JavaScript code in parallel threads—ideal for CPU-intensive tasks.

Example:

javascript
Copy code
import { Worker } from "worker_threads";

const worker = new Worker("./worker.js");
worker.on("message", console.log);
worker.postMessage("Start");
# 4. PM2 Process Manager
Advanced process manager for Node.js apps.

Installation:

bash
Copy code
npm install -g pm2
Commands:

bash
Copy code
pm2 start server.js --name "app"
pm2 list
pm2 logs app
pm2 restart app
# 5. Performance Profiling
Identify slow parts of code.

Tools:

Node.js built-in profiler: node --inspect server.js

Chrome DevTools: chrome://inspect

clinic.js for advanced profiling

# 6. Memory Leak Detection
Monitor memory usage:

javascript
Copy code
console.log(process.memoryUsage());
Tools:

clinic doctor, heapdump
Common Causes:

Unreleased event listeners

Global variables

Long-lived closures

# 7. Event Loop Optimization
Avoid blocking operations.

Use async I/O for DB or file operations.

Offload CPU-heavy tasks to Worker Threads or Child Processes.

Measure event loop delay:

javascript
Copy code
import { monitorEventLoopDelay } from "perf_hooks";
# 8. Caching
In-Memory Caching
Store frequently-used data in memory (e.g., Map, node-cache).

Pros: Fast, simple.

Cons: Resets on server restart.

Redis Basics
External key-value store.

Can persist data and share cache across servers.

bash
Copy code
npm install redis
Cache Strategies
LRU: Evict least recently used items.

TTL: Expire items after fixed time.

Session Storage in Redis
Central storage for sessions across clustered servers.

javascript
Copy code
import session from "express-session";
import connectRedis from "connect-redis";
Caching Patterns
Read-through: Load from cache; if miss, fetch DB.

Write-through: Update cache immediately with DB changes.

Cache-aside: App explicitly handles cache updates.

# 9. Real-Time & Advanced APIs
WebSockets with Socket.io
Full-duplex communication (client ↔ server).

javascript
Copy code
import { Server } from "socket.io";
const io = new Server(3000);
io.on("connection", socket => console.log("User connected"));
Server-Sent Events (SSE)
Simple, unidirectional (server → client) event streaming over HTTP.

GraphQL with Apollo Server
Define types, queries, and mutations.

javascript
Copy code
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`type Query { hello: String }`;
const resolvers = { Query: { hello: () => "Hi" } };

new ApolloServer({ typeDefs, resolvers }).listen();
GraphQL Schemas & Resolvers
Schema → Defines data structure.

Resolver → Defines how to fetch data.

DataLoader for Batching
Avoid N+1 query problem by batching DB requests.

Subscriptions
