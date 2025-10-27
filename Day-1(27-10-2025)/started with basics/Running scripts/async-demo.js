// async-demo.js
// Demonstrating Asynchronous Script Execution

const fs = require('fs');

console.log("1️⃣ Start of script");

fs.readFile(__filename, 'utf-8', (err, data) => {
  if (err) return console.error(err);
  console.log("3️⃣ File read complete (Async operation)");
});

console.log("2️⃣ End of script (Executed before file read finishes)");


//node async-demo.js
