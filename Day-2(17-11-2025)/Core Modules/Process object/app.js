// app.js
// Demonstration of Node.js process object and environment variables

// print general process info
console.log("=== Process Information ===");
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Current Directory:", process.cwd());
console.log("Memory Usage:", process.memoryUsage());
console.log("----------------------------------\n");

// Command-line arguments
// You can pass extra arguments when running Node
console.log("=== Command Line Arguments ===");
console.log(process.argv); // Array of arguments
console.log("----------------------------------\n");

// Example: Access custom argument
const args = process.argv.slice(2); // Skip first 2 default args
if (args.length > 0) {
  console.log("Hello,", args[0]);
} else {
  console.log("No arguments passed.");
}
console.log("----------------------------------\n");

// Environment variables
// Access built-in environment variables
console.log("=== Environment Variables ===");
console.log("PATH:", process.env.PATH);
console.log("USER:", process.env.USER || process.env.USERNAME);
console.log("----------------------------------\n");

// Set your own environment variable (for testing)
process.env.APP_MODE = "development";
console.log("Custom ENV Variable (APP_MODE):", process.env.APP_MODE);
console.log("----------------------------------\n");

//  Exit process example
console.log("=== Exiting Process Example ===");
if (process.env.APP_MODE === "development") {
  console.log("Running in development mode, exiting...");
  process.exit(0); // Exit normally
}

//node app.js
//node app.js Rithiha
