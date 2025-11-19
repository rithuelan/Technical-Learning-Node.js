const fs = require('fs');

const write = fs.createWriteStream('output.txt');

write.write("Hello from writable stream!\n");
write.end("Done writing!");
