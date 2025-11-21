const http = require("http");

const server = http.listen((req, res) => {
    if (req.url === "/") {
        res.end("Home page");
    }
    else if (req.url === '/about'){
        res.end("About Page");
    }
    else {
        res.statusCode = 404;
        res.end("404 found");
    }
});

server.listen(3000);