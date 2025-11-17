// app.js
// Demonstration of Node.js OS module

const os = require("os"); // Import built-in os module

// Get OS platform (Windows, Linux, macOS)
console.log("OS Platform:", os.platform());

// OS Type (Windows_NT, Darwin, Linux)
console.log("OS Type:", os.type());

// OS Architecture (x64, arm, etc.)
console.log("Architecture:", os.arch());

// Total system memory (in MB)
console.log("Total Memory:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");

// Free memory (in MB)
console.log("Free Memory:", (os.freemem() / 1024 / 1024).toFixed(2), "MB");

//System uptime (in hours)
console.log("System Uptime:", (os.uptime() / 3600).toFixed(2), "hours");

// CPU Info
console.log("CPU Info:");
console.log(os.cpus());

// Home directory
console.log("Home Directory:", os.homedir());

// Hostname
console.log("Hostname:", os.hostname());

// Temporary directory
console.log(" Temp Directory:", os.tmpdir());
