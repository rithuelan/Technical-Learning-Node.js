// app.js
// Path Module Demo

const path = require("path");

//Current file path
console.log("__filename:", __filename);

// Current directory path
console.log("__dirname:", __dirname);

// Get the base file name (like app.js)
console.log("Basename:", path.basename(__filename));

// Get the directory name (the folder)
console.log(" Dirname:", path.dirname(__filename));

//  Get the file extension
console.log("Extension:", path.extname(__filename));

// Join paths (safely creates correct OS paths)
const fullPath = path.join(__dirname, "files", "notes.txt");
console.log(" Joined Path:", fullPath);

// Resolve to absolute path (always returns full path)
const resolvedPath = path.resolve("notes.txt");
console.log(" Resolved Path:", resolvedPath);

// Normalize a messy path
const messyPath = "C:\\temp\\\\folder\\..\\file.txt";
console.log(" Normalized Path:", path.normalize(messyPath));


//node app.js
