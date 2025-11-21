res.writeHead(200, {
    "Content-Type": "text/plain",
    "Set-Cookie": "user=Rithiha; HttpOnly"
});
res.end("Cookie set!");
