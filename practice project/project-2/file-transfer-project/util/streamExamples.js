// util/streamExamples.js
const { Readable, Writable, Transform, Duplex } = require('stream');
const fs = require('fs');
const path = require('path');

// 1) Readable from array (push-style)
function arrayReadable(arr, options = {}) {
  let i = 0;
  return new Readable({
    objectMode: true,
    read() {
      if (i >= arr.length) {
        this.push(null);
      } else {
        this.push(arr[i++]);
      }
    }
  });
}

// 2) Writable collector
function collectorWritable() {
  const collected = [];
  const w = new Writable({
    objectMode: true,
    write(chunk, enc, cb) {
      collected.push(chunk);
      cb();
    }
  });
  w.collected = collected;
  return w;
}

// 3) Transform: uppercase text chunks
function upperTransform() {
  return new Transform({
    transform(chunk, enc, cb) {
      const out = chunk.toString().toUpperCase();
      cb(null, Buffer.from(out));
    }
  });
}

// 4) Duplex example: echo stream (read & write)
function echoDuplex() {
  let buffer = [];
  return new Duplex({
    write(chunk, enc, cb) {
      buffer.push(chunk);
      cb();
    },
    read() {
      if (buffer.length === 0) {
        this.push(null);
      } else {
        this.push(Buffer.concat(buffer));
        buffer = [];
      }
    }
  });
}

// 5) Buffer example: building a buffer and splitting
function bufferExample() {
  const b1 = Buffer.from('Hello ');
  const b2 = Buffer.from('World');
  const joined = Buffer.concat([b1, b2]);
  return joined;
}

// 6) Piping file streams
function pipeExample(srcPath, destPath, cb) {
  const r = fs.createReadStream(srcPath);
  const w = fs.createWriteStream(destPath);
  r.pipe(w);
  w.on('close', cb);
  w.on('error', cb);
}

module.exports = {
  arrayReadable,
  collectorWritable,
  upperTransform,
  echoDuplex,
  bufferExample,
  pipeExample
};
