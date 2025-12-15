// memory-leak.js
setInterval(() => {
  const used = process.memoryUsage();
  console.log(`Heap Used: ${(used.heapUsed / 1024 / 1024).toFixed(2)} MB`);
}, 1000);

// Simulate leak
const leak = [];
setInterval(() => leak.push(new Array(1e5).fill('*')), 5000);
