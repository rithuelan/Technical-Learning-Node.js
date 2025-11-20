## 📁 File Upload & Download Utility
---------
With Progress Tracking • Node.js • Streams • Buffers

A simple yet powerful Node.js project that demonstrates how to upload and download files efficiently while showing real-time progress tracking using streams, buffers, and asynchronous patterns like promises.

# 🚀 Project Overview

This project provides a utility that supports:

- Uploading files from a client to a server

- Downloading server-side files

- Real-time progress tracking during both upload and download

- Efficient memory usage using Node.js streams

- Handling large files without performance issues

- Graceful error handling and user-friendly status messages

It is ideal for learning streams, buffers, and async programming, while creating something practical and industry-relevant.

# 📚 Key Concepts Used
---
# 1. Node.js Streams

Streams allow processing files piece by piece instead of loading the entire file into memory.

- Readable Stream → Reads file data chunk by chunk

- Writable Stream → Writes data incrementally

- Duplex Stream → Two-way communication

- Transform Stream → Modifies data while streaming

# 2. Buffers & Binary Data

Buffers help handle binary data such as file chunks, especially useful for:

Reading multipart upload data

Building progress indicators from byte sizes

Efficient memory handling for large files

# 3. Promises & Async Flow

The project uses:

Promise chaining for sequential operations

Error propagation for catching failures

Finally() for cleanup

Async/Await for readable asynchronous logic

# 4. Progress Tracking

The utility shows upload and download progress, displaying:

Total file size

Bytes processed

Current progress percentage

This simulates real applications like cloud storage upload bars.

## 🧩 Features

📤 Upload files directly to the server

📥 Download files from the server

📊 Live progress indicator (percentage updates)

⚡ Memory-efficient streaming for large files

🛡️ Built-in error handling for missing files, broken streams, etc.

🔧 Customizable input/output directories

🧹 Auto-cleanup using Promise.finally()


