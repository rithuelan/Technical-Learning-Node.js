const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("400 Bad Request");
});

server.listen(3000);
