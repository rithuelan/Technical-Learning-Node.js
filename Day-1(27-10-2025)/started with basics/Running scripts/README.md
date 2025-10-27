# 🧠 Node.js — Running Scripts Guide

## 📘 1️⃣ What Does “Running Scripts” Mean?

In **Node.js**, a **script** is simply a JavaScript file (for example: `app.js`) that you run **outside the browser**.

Instead of typing code line-by-line in the **REPL**, you can:

1. Write your code in a `.js` file  
2. Run it using the `node` command  

👉 This is how real-world Node.js projects are executed.

---

## ⚙️ 2️⃣ Setup (Windows)

### ✅ Step 1 — Check if Node.js is Installed

Open **PowerShell** or **Command Prompt** and run:

```bash
node -v
npm -v
If you see version numbers like:

Copy code
v22.0.0
10.5.0
✅ Node.js is ready to use.

If not, install it from 👉 https://nodejs.org

🧩 3️⃣ Step-by-Step: Creating and Running a Script
▶ Step 1 — Create a Folder
bash
Copy code
mkdir node-scripts-demo
cd node-scripts-demo
▶ Step 2 — Create a File
bash
Copy code
notepad app.js
Paste this code inside app.js:

javascript
Copy code
// app.js
// Simple Node.js Script Example

// Print a message
console.log("👋 Hello from Node.js script!");

// Declare variables
let name = "Rithiha";
let age = 21;

// Perform operations
console.log("Name:", name);
console.log("Age:", age);
console.log("In 5 years, you will be", age + 5, "years old.");

// Use a built-in Node module (OS)
const os = require("os");
console.log("Your operating system is:", os.platform());
💾 Save the file (Ctrl + S).

▶ Step 3 — Run the Script
bash
Copy code
node app.js
Expected output:

pgsql
Copy code
👋 Hello from Node.js script!
Name: Rithiha
Age: 21
In 5 years, you will be 26 years old.
Your operating system is: win32
✅ Congratulations! You just ran your first Node.js script.

🧠 4️⃣ What Happens Internally?
When you run:

bash
Copy code
node app.js
This happens behind the scenes:

Node.js reads your file

V8 Engine compiles JavaScript into machine code

libuv handles async tasks (if any)

Output is printed to your terminal

In short:

sql
Copy code
Node.js → Reads app.js → Executes code → Displays result
⚡ 5️⃣ Example 2 — Using Asynchronous Code
Let’s create another file called async-demo.js:

bash
Copy code
notepad async-demo.js
Paste this code:

javascript
Copy code
// async-demo.js
// Demonstrating Asynchronous Script Execution

const fs = require('fs');

console.log("1️⃣ Start of script");

fs.readFile(__filename, 'utf-8', (err, data) => {
  if (err) return console.error(err);
  console.log("3️⃣ File read complete (Async operation)");
});

console.log("2️⃣ End of script (Executed before file read finishes)");
Run the script:

bash
Copy code
node async-demo.js
Output:

pgsql
Copy code
1️⃣ Start of script
2️⃣ End of script (Executed before file read finishes)
3️⃣ File read complete (Async operation)
✅ This demonstrates non-blocking behavior — Node.js doesn’t wait for the file read to finish; it continues executing the rest of the code.

💾 6️⃣ Example 3 — Taking User Input (via Command Line)
Create input-demo.js:

bash
Copy code
notepad input-demo.js
Paste:

javascript
Copy code
// input-demo.js
// Simple Node.js Script to Take User Input

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js 🚀`);
  rl.close();
});
Run it:

bash
Copy code
node input-demo.js
Type your name when prompted:

pgsql
Copy code
What is your name? Rithiha
Hello, Rithiha! Welcome to Node.js 🚀
🧰 7️⃣ Tips for Running Scripts
Task	Command / Description
Run a script	node filename.js
Run multiple files	node file1.js && node file2.js
Clear console	cls (Windows)
Exit script early	Ctrl + C
Run with arguments	node app.js arg1 arg2
View running Node processes	tasklist

🧠 8️⃣ Summary
✅ REPL → Great for testing small snippets
✅ Running Scripts → Best for real programs
✅ Command → node yourfile.js

Files can use:

Variables

Functions

Core modules (fs, os, path, etc.)

Async code

User input

🔍 Quick Recap Example
bash
Copy code
node app.js
node async-demo.js
node input-demo.js
Each file demonstrates:

Synchronous execution

Asynchronous behavior

Input handling