// app.js
// Path Module Demo

const path = require("path");

// 1️⃣ Current file path
console.log("➡️ __filename:", __filename);

// 2️⃣ Current directory path
console.log("➡️ __dirname:", __dirname);

// 3️⃣ Get the base file name (like app.js)
console.log("📄 Basename:", path.basename(__filename));

// 4️⃣ Get the directory name (the folder)
console.log("📂 Dirname:", path.dirname(__filename));

// 5️⃣ Get the file extension
console.log("📑 Extension:", path.extname(__filename));

// 6️⃣ Join paths (safely creates correct OS paths)
const fullPath = path.join(__dirname, "files", "notes.txt");
console.log("🛠 Joined Path:", fullPath);

// 7️⃣ Resolve to absolute path (always returns full path)
const resolvedPath = path.resolve("notes.txt");
console.log("🧭 Resolved Path:", resolvedPath);

// 8️⃣ Normalize a messy path
const messyPath = "C:\\temp\\\\folder\\..\\file.txt";
console.log("🧹 Normalized Path:", path.normalize(messyPath));


//node app.js
