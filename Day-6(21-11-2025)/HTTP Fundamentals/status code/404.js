const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url !== "/") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("Error 404: Page Not Found");
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
});

server.listen(3000);
