res.writeHead(200, {
    "Content-Type": "text/plain",
    "Cache-Control": "no-cache, no-store, must-revalidate"
});
res.end("No caching allowed!");
