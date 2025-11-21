// app.js
const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js!");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
