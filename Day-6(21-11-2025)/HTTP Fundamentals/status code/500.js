const http = require("http");

const server = http.createServer((req, res) => {
    try {
        throw new Error("Something broke!");
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 Internal Server Error");
    }
});

server.listen(3000);
