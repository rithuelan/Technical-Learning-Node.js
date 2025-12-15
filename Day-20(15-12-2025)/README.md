Clustering and Load Balancing

Node.js runs on a single thread, so CPU-intensive tasks can block the event loop. Clustering allows multiple Node.js processes to run across CPU cores.

Key points:

Uses cluster module.

Each worker is a separate process but shares the same server port.

Works well with multi-core systems.

Example concept:

import cluster from "cluster";
import os from "os";
import http from "http";

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  http.createServer((req, res) => res.end("Hello from worker")).listen(3000);
}

Child Processes

Child processes allow running external processes (like shell commands) without blocking Node.js.

Key methods:

spawn → Stream data continuously.

exec → Run command and get full output.

fork → Run another Node.js script as a child.

Example:

import { exec } from "child_process";

exec("ls -la", (err, stdout, stderr) => {
  console.log(stdout);
});

Worker Threads

Runs JS code in parallel threads.

Good for CPU-intensive tasks.

Uses worker_threads module.

Example:

import { Worker } from "worker_threads";

const worker = new Worker("./worker.js");
worker.on("message", console.log);
worker.postMessage("Start");

PM2 Process Manager

Advanced process manager for Node.js.

Handles clustering, process monitoring, restarts, logs.

Installation:

npm install -g pm2


Start server:

pm2 start server.js --name "app"
pm2 list
pm2 logs app
pm2 restart app

Performance Profiling

Helps identify slow parts of code.

Tools:

Node.js built-in profiler: node --inspect server.js

Chrome DevTools (connect via chrome://inspect)

clinic.js for advanced profiling

Memory Leak Detection

Check memory usage via process.memoryUsage().

Use tools like:

clinic doctor

heapdump

Common causes:

Unreleased event listeners

Global variables

Long-lived closures

Event Loop Optimization

Avoid blocking operations.

Use async I/O for DB or file operations.

CPU-heavy tasks → offload to Worker Threads or Child Processes.

Measure event loop delay using perf_hooks:

import { monitorEventLoopDelay } from "perf_hooks";

Caching
In-Memory Caching

Store frequently-used data in memory.

Example: node-cache, Map.

Pros: fast, simple.

Cons: resets on server restart.

Redis Basics

External key-value store.

Can persist data, share cache between multiple servers.

Install: npm install redis.

Cache Strategies

LRU (Least Recently Used) → Evict least recently used items.

TTL (Time to Live) → Expire items after fixed time.

Session Storage in Redis

Store user sessions centrally.

Useful for clustered servers.

import session from "express-session";
import connectRedis from "connect-redis";

Caching Patterns

Read-through cache: Load from cache; if miss, fetch from DB.

Write-through cache: Update cache immediately when DB changes.

Cache-aside: Application handles cache updates explicitly.

Real-Time & Advanced APIs
WebSockets with Socket.io

Full-duplex communication between client & server.

Example:

import { Server } from "socket.io";
const io = new Server(3000);
io.on("connection", socket => console.log("User connected"));

Server-Sent Events (SSE)

Server pushes events over HTTP.

Simple & unidirectional (server → client).

GraphQL with Apollo Server

Query language for APIs.

Define types, queries, mutations.

Example:

import { ApolloServer, gql } from "apollo-server";
const typeDefs = gql`type Query { hello: String }`;
const resolvers = { Query: { hello: () => "Hi" } };
new ApolloServer({ typeDefs, resolvers }).listen();

GraphQL Schemas and Resolvers

Schema: Defines data structure.

Resolver: Defines how to fetch data.

DataLoader for Batching

Avoid N+1 problem.

Batches multiple DB requests into one.

Subscriptions

Real-time updates in GraphQL.

Uses PubSub to push data to clients.
