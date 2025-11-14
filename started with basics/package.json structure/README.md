**🧩 1. What is package.json?**

package.json is the heart of any Node.js project.
It is a JSON file that holds metadata about your project and helps Node and npm manage dependencies, scripts, and configuration.

Think of it like your project’s “ID card + settings file”.

**📁 2. Create a New Folder**

Open PowerShell or CMD and run:

mkdir package-demo
cd package-demo

**⚙️ 3. Initialize a Node.js Project**

To automatically create package.json:

npm init -y


✅ Output:

Wrote to package-demo/package.json

**🧾 4. Your Generated package.json**

It looks something like this:

{
  "name": "package-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

**🧱 5. Understand Each Field Clearly**

Let’s go line by line 👇

Field	Meaning	Example
"name"	The project’s name (used if you publish to npm).	"package-demo"
"version"	Current version of your project.	"1.0.0"
"description"	A short explanation of your project.	"A simple Node.js demo"
"main"	Entry point file (first file Node runs).	"index.js"
"scripts"	Custom commands you can run with npm run.	"start": "node index.js"
"keywords"	Search tags for npm registry.	["node", "demo"]
"author"	Your name or team name.	"Rithiha Elangovan"
"license"	License type (ISC, MIT, etc.).	"ISC"
"dependencies"	Packages needed for your project to run.	"express": "^4.19.2"
"devDependencies"	Packages needed for development only.	"jest": "^29.7.0"
"type"	Defines module system: "commonjs" or "module".	"type": "module"

**🧩 6. Example 1 — Basic package.json (CommonJS Project)**

Create a file:
📄 index.js

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Node.js Developer");


Now, open package.json and modify:

{
  "name": "package-demo",
  "version": "1.0.0",
  "description": "Basic demo to understand package.json",
  "main": "index.js",
  "type": "commonjs",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Rithiha",
  "license": "ISC"
}

**▶️ 7. Run Your Script**

In PowerShell:

npm run start


✅ Output:

Hello, Node.js Developer!

**🧩 8. Example 2 — Add Dependencies**

Let’s install a package (for example, chalk for colored text):

npm install chalk


Now your package.json updates automatically:

"dependencies": {
  "chalk": "^5.3.0"
}


Your folder will now have:

package-demo/
│
├── node_modules/       (installed dependencies)
├── package.json
├── package-lock.json
└── index.js

Update index.js
import chalk from "chalk"; // If using type: "module"

console.log(chalk.green("This text is green!"));


If you’re using CommonJS, use:

const chalk = require("chalk");
console.log(chalk.blue("This text is blue!"));


Run it:

npm run start


✅ Output:

This text is green!  (in color)

🧩 9. Example 3 — Add Dev Dependencies (for Testing)

Install Jest (testing tool) as a dev dependency:

npm install jest --save-dev


✅ package.json updates:

"devDependencies": {
  "jest": "^29.7.0"
}


Now update "scripts":

"scripts": {
  "start": "node index.js",
  "test": "jest"
}


Then run:

npm run test

🧩 10. Bonus — package-lock.json and node_modules

package-lock.json → Records exact package versions for consistency.

node_modules/ → Contains all installed libraries (can be large).

You don’t edit these manually.

🧠 Summary
Concept	Purpose
npm init -y	Creates a default package.json
"scripts"	Define commands (start, test, build, etc.)
"dependencies"	Needed to run the project
"devDependencies"	Needed only during development
"type": "module"	Enables ES Modules (use import/export)
package-lock.json	Locks dependency versions
node_modules	Stores all installed libraries