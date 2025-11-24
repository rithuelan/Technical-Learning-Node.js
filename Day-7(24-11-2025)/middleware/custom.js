const express = require("express");
const app = express();

// -------------------------------------------------------
// 1) Custom Logging Middleware
// -------------------------------------------------------
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();  // pass control to next middleware or route
};

app.use(logger);   // apply globally


// -------------------------------------------------------
// 2) Custom Authentication Middleware
// -------------------------------------------------------
const auth = (req, res, next) => {
    const token = req.query.token;

    if (token === "abc123") {
        next();  // token valid
    } else {
        res.status(401).send("Unauthorized: Invalid or missing token");
    }
};

// Apply auth only for this route
app.get("/dashboard", auth, (req, res) => {
    res.send("Welcome to the dashboard! You are authenticated.");
});


// -------------------------------------------------------
// 3) Custom Middleware for Request Time
// -------------------------------------------------------
const requestTime = (req, res, next) => {
    req.requestTime = Date.now();   // attaching custom value
    next();
};

app.use(requestTime);

app.get("/time", (req, res) => {
    res.send(`Request received at: ${new Date(req.requestTime)}`);
});


// -------------------------------------------------------
// Simple Home Route
// -------------------------------------------------------
app.get("/", (req, res) => {
    res.send("Custom Middleware Demo");
});


// -------------------------------------------------------
// Start Server
// -------------------------------------------------------
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
