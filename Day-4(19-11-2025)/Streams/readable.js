const fs = require('fs');

const stream = fs.createReadStream('file.txt', 'utf8');

stream.on('data', chunk => {
  console.log("Received chunk:", chunk);
});

stream.on('end', () => {
  console.log("Reading complete");
});
