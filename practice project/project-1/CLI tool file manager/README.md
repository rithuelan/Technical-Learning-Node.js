# 📁 CLI File Manager Tool

A powerful and lightweight **Node.js-based Command Line Interface (CLI)** tool to manage files and folders directly from your terminal.  
This utility helps you **list, create, edit, rename, upload, delete, search, and view information** about files and directories.

---

## 🚀 Features

- 📂 **List directories** with file/folder classification  
- 📝 **Create and edit files** directly from CLI  
- 🔄 **Rename** files or folders  
- 📤 **Upload (copy)** files to any location  
- 🗑️ **Safe delete** with confirmation prompt  
- ℹ️ **View detailed info** (size, type, created time, etc.)  
- 🔍 **Recursive search** for files/folders  
- 📌 **Show absolute file/folder location**  

---

## 📦 Project Structure

project/
│── filemgr.js # Main CLI script (bin entry point)
│── package.json # Project metadata & scripts
│── README.md # Documentation

---

## 🛠️ Installation

### 1️⃣ Install Node.js  
Download and install from:  
https://nodejs.org


### 2️⃣ Clone the Repository

git clone <your-repo-url>
cd project

### 3️⃣ Install Dependencies
This CLI uses only **built-in Node.js modules**, so no external dependencies are required.

### 4️⃣ Make the Script Executable (Optional for Global Use)

Add this inside `package.json`:

```json
"bin": {
  "filemgr": "filemgr.js"
}
Then run:

npm link
Now you can use the command globally:


filemgr list
🧑‍💻 Usage
Run the tool using:

php-template
node filemgr.js <command> <args>
Or if linked globally:

filemgr <command>
📝 Available Commands
📂 1. List Directory
css

filemgr list [directory]
Shows all files and folders in the given directory.

Defaults to current folder.

🏷️ 2. Create a File
lua

filemgr create <filename>
Creates an empty file.

📍 3. Show File Location
php-template

filemgr location <file>
Displays the absolute path.

📁 4. Show Folder Location
php-template

filemgr folderloc <folder>
Displays absolute path of directories.

✏️ 5. Edit File
php-template

filemgr edit <file>
Allows you to enter new content.
Saves immediately after typing.

🔄 6. Rename File/Folder
php-template

filemgr rename <oldName> <newName>
📤 7. Upload (Copy File)
php-template

filemgr upload <source> <destination>
Copies a file to a new location.

🗑️ 8. Delete File/Folder (With Confirmation)
arduino

filemgr delete <file/folder>
Asks for confirmation before deleting.

ℹ️ 9. File/Folder Info
nginx

filemgr info <file/folder>
Shows:

Name

Location

Type

Size

Created time

Last modified time

🔍 10. Search Files/Folders (Recursive)
php-template

filemgr search <keyword>
Searches all folders inside current directory.

⚙️ How It Works (Internally)
Uses Node.js core modules:

fs → file operations

path → path resolution

readline → user input

Uses process.argv to parse CLI arguments

Performs safe checks (existence, type) before operations

Adds interactivity for dangerous operations (delete)

Handles recursive search using filesystem traversal

🔐 Safety Measures
✔ Confirmation required before deletion
✔ Validates file/folder existence
✔ Displays clear error messages
✔ Prevents accidental overwrite

🧪 Testing Your CLI
To test commands, try:


filemgr create test.txt
filemgr edit test.txt
filemgr list
filemgr info test.txt
filemgr rename test.txt demo.txt
filemgr upload demo.txt copy.txt
filemgr delete copy.txt
filemgr search demo
