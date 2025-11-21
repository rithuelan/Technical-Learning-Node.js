const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(401, { "Content-Type": "text/plain" });
    res.end("401 Unauthorized: Login Required");
});

server.listen(3000);
