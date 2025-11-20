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

1. Add CLI Entry in package.json

Inside your project’s package.json, define the CLI command name using the bin field.

2. Make the CLI Tool Global

Link your tool globally so it can be used from anywhere:

npm link

3. Use the Command Globally

Once linked:

filemgr list

# 🧑‍💻 Running the CLI
▶️ Local Project Execution

Run using Node:

node filemgr.js <command> <args>

🌍 Global Execution (After Linking)

Run directly:

filemgr <command>

# 📝 Available Commands
📂 1. List Directory
filemgr list [directory]


Displays all files and folders inside the given directory.
If no directory is provided, it lists the current one.

🏷️ 2. Create a File
filemgr create <filename>


Creates an empty file in the current directory.

📍 3. Show File Location
filemgr location <file>


Shows the absolute path of the file.

📁 4. Show Folder Location
filemgr folderloc <folder>


Displays the absolute folder path.

✏️ 5. Edit File
filemgr edit <file>


Allows entering new file content directly through the terminal.

🔄 6. Rename File or Folder
filemgr rename <oldName> <newName>

📤 7. Upload (Copy File)
filemgr upload <source> <destination>


Copies a file from one location to another.

🗑️ 8. Delete File or Folder (With Confirmation)
filemgr delete <file/folder>


Asks for confirmation before deleting to prevent accidental data loss.

ℹ️ 9. File or Folder Info
filemgr info <file/folder>


# Displays:

Name

Full Location

Type (file or folder)

Size

Created Time

Last Modified Time

🔍 10. Search (Recursive)
filemgr search <keyword>


Searches all files/folders inside all subdirectories.

# ⚙️ Internal Working (How It Works)

The CLI is built entirely on Node.js core modules:

fs → handles file operations

path → resolves file/folder paths

readline → collects user input when editing or confirming

process.argv → reads command-line parameters

Additional internal behavior:

Checks if a file or folder exists before any operation

Prevents unsafe actions with confirmations

Uses directory traversal for recursive search

Shows clean and descriptive error messages

