// app.js
// Demonstration of Node.js OS module

const os = require("os"); // Import built-in os module

// 1️⃣ Get OS platform (Windows, Linux, macOS)
console.log("🖥️ OS Platform:", os.platform());

// 2️⃣ OS Type (Windows_NT, Darwin, Linux)
console.log("📦 OS Type:", os.type());

// 3️⃣ OS Architecture (x64, arm, etc.)
console.log("⚙️ Architecture:", os.arch());

// 4️⃣ Total system memory (in MB)
console.log("💾 Total Memory:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");

// 5️⃣ Free memory (in MB)
console.log("📉 Free Memory:", (os.freemem() / 1024 / 1024).toFixed(2), "MB");

// 6️⃣ System uptime (in hours)
console.log("⏱️ System Uptime:", (os.uptime() / 3600).toFixed(2), "hours");

// 7️⃣ CPU Info
console.log("🧠 CPU Info:");
console.log(os.cpus());

// 8️⃣ Home directory
console.log("🏠 Home Directory:", os.homedir());

// 9️⃣ Hostname
console.log("💻 Hostname:", os.hostname());

// 🔟 Temporary directory
console.log("📂 Temp Directory:", os.tmpdir());
