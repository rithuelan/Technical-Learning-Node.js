// app.js
// Using dotenv to load environment variables

// Step 1: Import and configure dotenv
require("dotenv").config();

// Step 2: Access environment variables
console.log("=== Custom Environment Variables ===");
console.log("MY_APP_MODE:", process.env.MY_APP_MODE);
console.log("MY_SECRET_KEY:", process.env.MY_SECRET_KEY);
console.log("PORT:", process.env.PORT);
console.log("-------------------------------------");

// Step 3: Use them in your app logic
if (process.env.MY_APP_MODE === "development") {
  console.log("🧪 Running in DEVELOPMENT mode — showing debug logs...");
} else if (process.env.MY_APP_MODE === "production") {
  console.log("🚀 Running in PRODUCTION mode — performance optimized.");
} else {
  console.log("⚙️ No mode specified — running in default mode.");
}
