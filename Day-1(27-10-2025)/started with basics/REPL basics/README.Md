**🧠 1️⃣ What is REPL?**

### REPL stands for:

**R** → Read – reads your input

**E** → Eval – evaluates the input (runs the code)

**p**→ Print – prints the result

**L**→ Loop – repeats this process

So it’s like a live Node.js playground in your terminal.

```bash ⚙️ 2️⃣ Setup on Windows
✅ Step 1 — Check Node.js Installation

Open PowerShell or Command Prompt and type:

node -v
npm -v


If both show version numbers, Node.js is installed correctly.

If not, install from:
👉 https://nodejs.org

✅ Step 2 — Start Node.js REPL

Just type:

node


You’ll see something like:

Welcome to Node.js v22.0.0.
Type ".help" for more information.
>


That > is your REPL prompt, ready to take JS commands.

🧩 3️⃣ Basic Commands to Try

Type each line one by one at the prompt and press Enter.

> 2 + 3
5

> "Hello " + "World"
'Hello World'

> let x = 10
undefined

> x * 2
20

> Math.sqrt(49)
7


💡 Explanation:

REPL reads each input, evaluates it, prints the result, and loops back for the next command.

🧰 4️⃣ REPL Features
▶ 1. Multi-line Code Blocks

You can type multiple lines:

> function greet(name) {
...   return "Hello, " + name;
... }
undefined

> greet("Rithiha")
'Hello, Rithiha'


👉 The ... means REPL is waiting for you to finish the block.

▶ 2. Variable and Function Memory

Variables stay in memory during the REPL session:

> let a = 5
undefined

> a + 10
15

The Node.js REPL (and the JavaScript engine inside it — V8) does three things:

Read: It reads your code (let a = 5).

Evaluate: It creates a variable named a and stores the value 5 in memory (RAM).

Print: It shows the result (undefined because let doesn’t return a value).

Even after multiple lines, you can use the same variable.

▶ 3. Using Node Core Modules

You can import and test modules right inside REPL:

> const os = require('os')
undefined

> os.platform()
'win32'

> os.cpus().length
8   // Number of CPU cores

▶ 4. File System Example
> const fs = require('fs')
undefined

> fs.writeFileSync('demo.txt', 'Hello from REPL!')
undefined

> fs.readFileSync('demo.txt', 'utf-8')
'Hello from REPL!'


This creates and reads a file directly from the REPL environment!

▶ 5. Tab Autocompletion

Try typing a few letters and pressing Tab:

> con<Tab>
console   const


Node REPL has auto-complete suggestions for objects, functions, and variables.

▶ 6. Underscore _ stores the last result
> 10 + 20
30

> _ * 2
60


_ always refers to the last evaluated result.

▶ 7. Accessing Help and Commands

Type:

> .help


You’ll see all REPL built-in commands:

.break    Sometimes you get stuck, this gets you out
.clear    Reset context
.exit     Exit the REPL
.help     Show help
.save     Save all REPL commands to a file
.load     Load commands from a file

💾 5️⃣ Save and Load from REPL
▶ Save commands you typed
> .save mysession.js


It saves your REPL commands to a file named mysession.js.

▶ Load and run commands from a file
> .load mysession.js


It executes all commands from that file.

🚪 6️⃣ Exit REPL

You can exit anytime by:

.exit


or pressing
Ctrl + C twice

⚡ 7️⃣ Quick Summary
Action	Command / Example	Description
Start REPL	node	Opens REPL
Add numbers	2 + 3	Evaluates expression
Define function	function greet(name){...}	Multi-line input
Require module	const fs = require('fs')	Use Node modules
Save session	.save filename.js	Saves all commands
Load file	.load filename.js	Runs commands from file
Exit REPL	.exit or Ctrl+C	Exit REPL
🧠 Example Session (Full Demo)

Here’s a full REPL example you can try line-by-line:

PS C:\> node
Welcome to Node.js v22.0.0.
Type ".help" for more information.
> let name = "Rithiha"
undefined
> name.toUpperCase()
'RITHIHA'
> const fs = require('fs')
undefined
> fs.writeFileSync('hello.txt', 'Hello from Node REPL!')
undefined
> fs.readFileSync('hello.txt', 'utf-8')
'Hello from Node REPL!'
> .exit


✅ It creates a file named hello.txt in your current folder.

🎯 REPL in One Line

Node.js REPL is a live environment to run, test, and debug JavaScript and Node modules directly from your terminal — no need for files.