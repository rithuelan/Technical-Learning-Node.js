# Node.js Advanced Concepts: File Handling and Asynchronous Programming

This project demonstrates advanced Node.js concepts, including **callback hell solutions, promises, streams, buffers, and error handling**, through practical examples and utilities.

---

## 📌 Topics Covered

1. **Callback Hell and Solutions**
2. **Promise Chaining**
3. **Promise Combinators**
   - `Promise.all`
   - `Promise.race`
   - `Promise.allSettled`
4. **Error Propagation**
5. **Streams**
   - Readable
   - Writable
   - Duplex
   - Transform
6. **Buffers and Binary Data**
7. **Piping Streams**

---

## ⚡ 1. Callback Hell and Solutions

**Callback hell** occurs when multiple nested callbacks make code hard to read and maintain.

**Solution Approaches:**
- Modularize callbacks into separate functions
- Use **Promise-based APIs**
- Use **async/await** for cleaner flow

```javascript
// Example: Avoiding callback hell
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  processData(data, (err, result) => {
    if (err) throw err;
    saveResult(result, (err) => {
      if (err) throw err;
      console.log('Process completed');
    });
  });
});

// Cleaner using Promises
readFileAsync('file.txt')
  .then(processData)
  .then(saveResult)
  .then(() => console.log('Process completed'))
  .catch(console.error);
⚡ 2. Promise Chaining
Chain multiple asynchronous operations sequentially:

javascript
Copy code
fetchData()
  .then(data => processData(data))
  .then(result => saveResult(result))
  .then(() => console.log('All done'))
  .catch(err => console.error(err));
⚡ 3. Promise Combinators
Promise.all
Runs multiple promises in parallel and waits for all to complete.

javascript
Copy code
Promise.all([task1(), task2(), task3()])
  .then(results => console.log(results))
  .catch(err => console.error(err));
Promise.race
Resolves/rejects as soon as one promise settles.

javascript
Copy code
Promise.race([task1(), task2(), task3()])
  .then(result => console.log('First resolved:', result))
  .catch(err => console.error(err));
Promise.allSettled
Waits for all promises to settle (resolve or reject).

javascript
Copy code
Promise.allSettled([task1(), task2(), task3()])
  .then(results => console.log(results));
⚡ 4. Error Propagation
In callbacks, errors must be passed manually to the callback.

In promises, errors automatically propagate through .catch() or try/catch in async/await.

javascript
Copy code
async function processFiles() {
  try {
    const data = await readFileAsync('file.txt');
    await saveResult(data);
  } catch (err) {
    console.error('Error occurred:', err);
  }
}
⚡ 5. Streams
Node.js streams allow handling large data efficiently without loading everything into memory.

Readable: Read data

Writable: Write data

Duplex: Read & write

Transform: Modify data while reading/writing

javascript
Copy code
const fs = require('fs');

// Readable stream
const readStream = fs.createReadStream('input.txt');

// Writable stream
const writeStream = fs.createWriteStream('output.txt');

// Pipe data from read to write
readStream.pipe(writeStream);
⚡ 6. Buffers and Binary Data
Buffers store raw binary data.

javascript
Copy code
const buf = Buffer.from('Hello World');
console.log(buf.toString()); // "Hello World"
Buffers are commonly used in streams, file I/O, and network operations.

⚡ 7. Piping Streams
Piping allows directly connecting readable and writable streams:

javascript
Copy code
const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('file.txt')
  .pipe(zlib.createGzip()) // transform stream
  .pipe(fs.createWriteStream('file.txt.gz'));
🚀 Installation
Clone the repository:

bash
Copy code
git clone <repo-url>
cd <repo-folder>
Install dependencies (if any):

bash
Copy code
npm install
Run examples:

bash
Copy code
node examples/callbacks.js
node examples/promises.js
node examples/streams.js
📄 References
Node.js Streams

Node.js Buffers

Promises

Async/Await
