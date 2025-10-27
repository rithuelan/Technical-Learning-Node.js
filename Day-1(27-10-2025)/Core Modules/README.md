# ⚙️ Node.js Core Modules — Complete Guide

## 📘 Overview
Node.js provides a powerful collection of **built-in (core) modules** that allow you to perform essential system-level operations — without installing any external packages.  
These modules handle **file operations, paths, operating system data, URLs, events, and process management**.

---

## 🗂️ 1️⃣ File System (fs) — Read, Write, Append

### 🔹 What
The **File System (`fs`) module** enables Node.js to **interact with the file system** on your computer — allowing reading, writing, creating, updating, and deleting files.

### 💡 Why
- File operations are fundamental for backend systems (logs, data storage, configuration files).
- Enables asynchronous (non-blocking) file management to improve performance.

### 🌍 Where
- Used in file servers, configuration management, API logging, and data persistence.

### ⚙️ How
- Node.js provides both **synchronous** and **asynchronous** methods in the `fs` module.
- It can read files, write new content, or append data without blocking the main thread.

### 🧠 Setup
- No installation required — it’s built into Node.js.
- Import or require it directly in your application.

### ▶ Run
1. Create a Node.js file.
2. Use `node filename.js` to execute file operations.
3. Observe results in your project directory or terminal.

### 🧰 Usage
- Reading configuration or text files.  
- Writing logs, JSON, or temporary files.  
- Appending data dynamically for analytics or reports.

---

## 📁 2️⃣ Path Module

### 🔹 What
The **Path module** provides utilities for working with **file and directory paths** in a consistent way across operating systems.

### 💡 Why
- Different OSs (Windows, macOS, Linux) use different path separators.  
- Path module ensures compatibility and avoids errors when handling file paths.

### 🌍 Where
- Commonly used in file operations, web servers, and dynamic file loading.

### ⚙️ How
- The module allows joining, resolving, normalizing, and parsing file paths easily.  
- Useful when constructing file paths dynamically within a project.

### 🧠 Setup
- Built-in with Node.js — no setup needed.

### ▶ Run
1. Open a terminal and navigate to your project directory.  
2. Execute your Node.js script with `node filename.js`.  

### 🧰 Usage
- Build file paths dynamically for reading or writing.  
- Simplify cross-platform file handling in large applications.

---

## 🧮 3️⃣ OS Module

### 🔹 What
The **OS (Operating System)** module provides information about the system’s **hardware and software environment**, including CPU, memory, platform, and uptime.

### 💡 Why
- Helps monitor system performance.  
- Useful for creating diagnostics tools or adaptive server configurations.

### 🌍 Where
- Used in logging systems, performance monitoring, and system dashboards.

### ⚙️ How
- Access details like total memory, free memory, hostname, architecture, and more.  
- Enables environment-specific behavior (e.g., adjust processes based on available resources).

### 🧠 Setup
- Built into Node.js — no installation required.

### ▶ Run
- Execute a script containing OS operations using:
