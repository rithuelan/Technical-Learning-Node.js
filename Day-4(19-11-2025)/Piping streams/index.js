// piping-gzip.js
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const src = path.join(__dirname, 'sample-input.txt');
// ensure sample file exists:
fs.writeFileSync(src, 'This text will be gzipped. Repeated.\n'.repeat(10), 'utf8');

const gzip = zlib.createGzip();
const r = fs.createReadStream(src);
const w = fs.createWriteStream(src + '.gz');

r.pipe(gzip).pipe(w);

w.on('finish', () => {
  console.log('Gzip write finished:', src + '.gz');
  // verify size
  const s1 = fs.statSync(src).size;
  const s2 = fs.statSync(src + '.gz').size;
  console.log('original size:', s1, 'gzipped size:', s2);
});
w.on('error', err => console.error('write err', err));
r.on('error', err => console.error('read err', err));
