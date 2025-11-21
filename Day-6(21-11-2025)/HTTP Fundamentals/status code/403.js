const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("403 Forbidden: You cannot access this resource");
});

server.listen(3000);
