#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

// Utility: ask user before delete
function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve =>
    rl.question(question, answer => {
      rl.close();
      resolve(answer.trim().toLowerCase());
    })
  );
}

/* ---------------------------
   COMMAND: LIST DIRECTORY
---------------------------- */
if (command === "list") {
  const dir = arg1 || ".";
  if (!fs.existsSync(dir)) return console.log("❌ Directory not found");

  const files = fs.readdirSync(dir);
  console.log(`📁 Listing: ${dir}`);
  files.forEach(f => {
    const full = path.join(dir, f);
    const type = fs.lstatSync(full).isDirectory() ? "FOLDER" : "FILE";
    console.log(`- [${type}] ${f}`);
  });
}

/* ---------------------------
   COMMAND: CREATE FILE
---------------------------- */
else if (command === "create") {
  if (!arg1) return console.log("❌ Provide file name");
  fs.writeFileSync(arg1, "");
  console.log(`✅ File created: ${arg1}`);
}
else if (command === "location") {
  if (!arg1) return console.log("❌ Usage: location <file>");
  if (!fs.existsSync(arg1)) return console.log("❌ File not found");

  console.log("\n📍 File Location:");
  console.log(path.resolve(arg1));
  console.log("✅ Location displayed!\n");
}
else if (command === "folderloc") {
  if (!arg1) return console.log("❌ Usage: folderloc <folder>");
  if (!fs.existsSync(arg1)) return console.log("❌ Folder not found");
  if (!fs.lstatSync(arg1).isDirectory())
    return console.log("❌ Not a folder");

  console.log("\n📁 Folder Location:");
  console.log(path.resolve(arg1));
  console.log("✅ Folder path displayed!\n");
}

/* ---------------------------
   COMMAND: EDIT FILE
---------------------------- */
else if (command === "edit") {
  if (!arg1) return console.log("❌ Provide file name");
  if (!fs.existsSync(arg1)) return console.log("❌ File not found");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("✏️ Type your content. Press ENTER to save.");
  rl.question("New content: ", content => {
    fs.writeFileSync(arg1, content);
    console.log("✅ File updated!");
    rl.close();
  });
}

/* ---------------------------
   COMMAND: RENAME
---------------------------- */
else if (command === "rename") {
  if (!arg1 || !arg2) return console.log("❌ Usage: rename old new");
  if (!fs.existsSync(arg1)) return console.log("❌ Source not found");

  fs.renameSync(arg1, arg2);
  console.log(`✅ Renamed to: ${arg2}`);
}

/* ---------------------------
   COMMAND: UPLOAD (COPY)
---------------------------- */
else if (command === "upload") {
  if (!arg1 || !arg2) return console.log("❌ Usage: upload src dest");
  if (!fs.existsSync(arg1)) return console.log("❌ Source file not found");

  fs.copyFileSync(arg1, arg2);
  console.log(`📤 Uploaded: ${arg1} → ${arg2}`);
}

/* ---------------------------
   COMMAND: DELETE
---------------------------- */
else if (command === "delete") {
  if (!arg1) return console.log("❌ Usage: delete <file/folder>");
  if (!fs.existsSync(arg1)) return console.log("❌ File/Folder not found");

  const isDir = fs.lstatSync(arg1).isDirectory();
  const type = isDir ? "folder" : "file";

  ask(`⚠ Are you sure you want to delete this ${type}? (yes/no): `)
    .then(ans => {
      if (ans !== "yes") return console.log("❌ Delete cancelled");

      try {
        if (isDir) {
          fs.rmSync(arg1, { recursive: true, force: true });
        } else {
          fs.unlinkSync(arg1);
        }
        console.log(`🗑️ Successfully deleted: ${arg1}`);
      } catch (err) {
        console.log("❌ Error while deleting:", err.message);
      }
    });
}

/* ---------------------------
   COMMAND: FILE INFO
---------------------------- */
else if (command === "info") {
  if (!arg1) return console.log("❌ Usage: info <file/folder>");
  if (!fs.existsSync(arg1)) return console.log("❌ File/Folder not found");

  try {
    const stats = fs.statSync(arg1);

    console.log("\nℹ️  FILE/FOLDER INFO");
    console.log("----------------------------");
    console.log("Name:", path.basename(arg1));
    console.log("Location:", path.resolve(arg1));
    console.log("Type:", stats.isDirectory() ? "Directory" : "File");
    console.log("Size:", stats.size + " bytes");
    console.log("Created:", stats.birthtime);
    console.log("Last Modified:", stats.mtime);
    console.log("----------------------------");
    console.log("✅ Info displayed successfully!\n");
  } catch (err) {
    console.log("❌ Unable to read info:", err.message);
  }
}

/* ---------------------------
   COMMAND: SEARCH (Recursive)
---------------------------- */
else if (command === "search") {
  if (!arg1) return console.log("❌ Usage: search <keyword>");

  const keyword = arg1.toLowerCase();
  let results = [];

  function searchDir(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const full = path.join(dir, item);

      if (item.toLowerCase().includes(keyword)) {
        results.push(full);
      }

      if (fs.statSync(full).isDirectory()) {
        searchDir(full);
      }
    }
  }

  try {
    searchDir(".");
    if (results.length === 0) {
      console.log(`❌ No files or folders found containing: "${keyword}"`);
    } else {
      console.log(`🔍 Search results for "${keyword}":`);
      results.forEach(r => console.log(" - " + r));
      console.log(`\n✅ Total matches: ${results.length}`);
    }
  } catch (err) {
    console.log("❌ Search failed:", err.message);
  }
}

/* ---------------------------
   UNKNOWN COMMAND
---------------------------- */
else {
  console.log(`
❌ Unknown command: ${command}

Available commands:
  list [dir]              → Show all files & folders
  create <file>           → Create file
  edit <file>             → Edit file
  rename <old> <new>      → Rename file/folder
  upload <src> <dest>     → Copy file
  delete <file/folder>    → Delete safely
  info <file/folder>      → Show detailed information
  search <keyword>        → Search files & folders
`);
}
