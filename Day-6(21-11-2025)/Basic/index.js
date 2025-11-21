// importing http here
const http = require("http");

// creating a server
const server = http.createServer((req, res) => {
    res.end("hello this is the new server");
});

// listing port
server.listen(3000, () => {
    console.log("port is running on port 3000");
})

