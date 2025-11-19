const { Transform } = require('stream');

const upper = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

process.stdin.pipe(upper).pipe(process.stdout);
