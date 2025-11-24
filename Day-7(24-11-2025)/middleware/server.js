const express = require("express");
const app = express();

// ------------------------------
// 1. GLOBAL MIDDLEWARE
// ------------------------------
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next(); // go to next middleware or route
});

// ------------------------------
// 2. JSON BODY PARSER MIDDLEWARE
// ------------------------------
app.use(express.json());


// ------------------------------
// 3. ROUTE-SPECIFIC MIDDLEWARE
// ------------------------------
const checkApiKey = (req, res, next) => {
    if (req.query.apiKey === "12345") {
        next();  // valid: continue
    } else {
        res.status(401).send("Unauthorized: Missing or invalid API key");
    }
};

app.get("/secure-data", checkApiKey, (req, res) => {
    res.send("Success! You accessed secure data.");
});


// ------------------------------
// 4. BUILT-IN MIDDLEWARE (static)
// ------------------------------
app.use("/public", express.static("public"));


// ------------------------------
// 5. ERROR-HANDLING MIDDLEWARE
// ------------------------------
app.use((err, req, res, next) => {
    console.error("Error occurred:", err.message);
    res.status(500).send("Internal Server Error");
});


// ------------------------------
// Basic Route
// ------------------------------
app.get("/", (req, res) => {
    res.send("Hello! Middleware demo running.");
});


// ------------------------------
// Start server
// ------------------------------
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
