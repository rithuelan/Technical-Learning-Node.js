const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const stream = fs.createReadStream("big-video.mp4");
  stream.pipe(res);
}).listen(3000);
