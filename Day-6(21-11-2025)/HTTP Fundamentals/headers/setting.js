const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "X-Custom-Header": "Learning Headers"
    });

    res.end("Headers sent!");
});

server.listen(3000);
