const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request Headers:", req.headers);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Request headers logged in console.");
});

server.listen(3000);
