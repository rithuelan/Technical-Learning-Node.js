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


📘 CLI File Manager – Command Usage Guide
🔧 Setup Instructions
1. Make the CLI Tool Global

To use your file manager from anywhere in the system, link it globally:

npm link

2. Use the Command Globally

After linking:

filemgr list

🧑‍💻 Running the CLI
Run with Node (Local Project Execution)
node filemgr.js <command> <args>

Run Globally (After Linking)
filemgr <command>

📝 Available Commands
📂 1. List Directory
filemgr list [directory]


Purpose: Displays all files and folders inside the given directory.
Note: If no directory is provided, it lists the current folder.

🏷️ 2. Create a File
filemgr create <filename>


Creates an empty file in the current directory.

📍 3. Show File Location
filemgr location <file>


Shows the absolute (full) file path.

📁 4. Show Folder Location
filemgr folderloc <folder>


Displays the absolute path of the specified folder.

✏️ 5. Edit File
filemgr edit <file>


Allows you to type new content directly in the terminal—saved immediately after entering.

🔄 6. Rename File or Folder
filemgr rename <oldName> <newName>

📤 7. Upload (Copy File)
filemgr upload <source> <destination>


Copies a file from one location to another.

🗑️ 8. Delete File or Folder (With Confirmation)
filemgr delete <file/folder>


Asks for confirmation before deleting—prevents accidental data loss.

ℹ️ 9. File or Folder Info
filemgr info <file/folder>


Displays:

Name

Location

Type (file/folder)

Size

Created Time

Last Modified Time

🔍 10. Search Files and Folders (Recursive)
filemgr search <keyword>


Recursively scans inside all subfolders for matching names.

⚙️ Internal Working (How the Tool Functions)

The CLI uses Node.js core modules:

fs → Handles all file operations

path → Resolves file and folder paths

readline → Allows interactive input

process.argv → Reads command arguments

Additional Internal Logic:

Performs existence checks before every operation

Prevents dangerous actions without confirmation

Handles recursive search through directory traversal

Shows clear, readable error messages

🔐 Safety Measures

✔ Confirmation required before deletion
✔ Prevents overwriting files unintentionally
✔ Validates paths before operations
✔ Error messages for invalid actions

🧪 Testing Your CLI

Try the following commands to verify everything works:

Create a file

Edit a file

List directory contents

Show file info

Rename the file

Upload (copy) it

Delete the copied file

Search for the renamed file

Example test flow:

filemgr create test.txt  
filemgr edit test.txt  
filemgr list  
filemgr info test.txt  
filemgr rename test.txt demo.txt  
filemgr upload demo.txt copy.txt  
filemgr delete copy.txt  
filemgr search demo


