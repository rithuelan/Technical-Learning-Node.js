// app.js
// Demonstrating fs: read, write, and append operations

const fs = require("fs"); // Import built-in fs module

// WRITE a new file (creates file if not exists)
fs.writeFileSync("example.txt", "Hello, this is the first line.\n");
console.log("File created and written successfully!");

// APPEND new content to the same file
fs.appendFileSync("example.txt", "This line is appended later.\n");
console.log("Content appended successfully!");

//  READ the file content
const data = fs.readFileSync("example.txt", "utf8"); // utf8 makes it readable as string
console.log(" File content:\n", data);


//node app.js
