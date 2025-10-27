// async-fs.js
const fs = require("fs");

// 1️⃣ Write
fs.writeFile("example.txt", "Async write started.\n", (err) => {
  if (err) throw err;
  console.log("✅ File written asynchronously!");

  // 2️⃣ Append
  fs.appendFile("example.txt", "Added more data asynchronously.\n", (err) => {
    if (err) throw err;
    console.log("✅ Data appended asynchronously!");

    // 3️⃣ Read
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("📖 File content (async):\n", data);
    });
  });
});
