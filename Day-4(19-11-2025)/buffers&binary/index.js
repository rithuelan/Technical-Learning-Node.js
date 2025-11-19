// buffers-and-binary.js
const fs = require('fs');
const path = require('path');

// 1) Create buffers
const fromString = Buffer.from('Hello Node');   // utf8 by default
const fromArray = Buffer.from([0x48, 0x49, 0x50]); // raw bytes
const allocated = Buffer.alloc(8); // zero filled
const allocatedUnsafe = Buffer.allocUnsafe(8); // might contain old memory

console.log('fromString:', fromString);
console.log('fromArray:', fromArray);
console.log('allocated length:', allocated.length);
console.log('allocatedUnsafe (must overwrite):', allocatedUnsafe);

// 2) Encoding conversions
console.log('hex:', fromString.toString('hex'));
console.log('base64:', fromString.toString('base64'));

// 3) Write/read binary file
const f = path.join(__dirname, 'binary-sample.bin');
fs.writeFileSync(f, fromString);
const read = fs.readFileSync(f);
console.log('read buffer =>', read, 'string =>', read.toString());

// 4) Typed arrays / ArrayBuffer interop
const ab = new ArrayBuffer(4);
const view = new Uint8Array(ab);
view[0] = 10; view[1] = 20;
console.log('TypedArray view:', view);

// You can create Buffer from a typed array
const bufFromView = Buffer.from(view);
console.log('buffer from typed array:', bufFromView);

// 5) Slicing doesn't copy by default (creates view)
const slice = fromString.slice(0, 5);
console.log('slice:', slice.toString());

// 6) Example: base64 encode an image-like binary (small example)
const b64 = read.toString('base64');
console.log('small base64 length:', b64.length);
