const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to home!");
    }
    else if (req.url === "/data" && req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ received: body }));
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(3000);
