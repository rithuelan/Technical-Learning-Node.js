// architecture-demo.js
// 🧠 Node.js Architecture Demonstration
// Shows: synchronous execution, async I/O, timer, and event loop order

const fs = require("fs");

console.log("1️⃣  Start of script (Synchronous)");

// --- Asynchronous File Read (handled by libuv thread pool) ---
fs.readFile(__filename, () => {
  console.log("3️⃣  File read complete (Async - libuv thread pool)");
});

// --- Timer callback (executed in Event Loop: Timers Phase) ---
setTimeout(() => {
  console.log("4️⃣  setTimeout callback (Event Loop - Timers Phase)");
}, 0);

// --- setImmediate callback (Event Loop: Check Phase) ---
setImmediate(() => {
  console.log("5️⃣  setImmediate callback (Event Loop - Check Phase)");
});

// --- Promise Microtask (runs before timers) ---
Promise.resolve().then(() => {
  console.log("2️⃣  Promise resolved (Microtask Queue)");
});

console.log("💡 End of script (Main Thread still running other tasks)");
