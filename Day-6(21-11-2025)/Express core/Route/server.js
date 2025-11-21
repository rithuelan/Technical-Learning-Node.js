const express = require("express");
const app = express();

// -----------------------------
// 1. Route Parameters Example
// -----------------------------
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;  // reading URL parameter
    res.send(`Route Param: You requested user with ID = ${userId}`);
});

// Multiple route parameters
app.get("/products/:category/:id", (req, res) => {
    const { category, id } = req.params;
    res.send(`Category: ${category}, Product ID: ${id}`);
});

// -----------------------------
// 2. Query String Example
// -----------------------------
app.get("/search", (req, res) => {
    const { keyword, limit } = req.query;   // reading query data
    res.send(`Search keyword = ${keyword}, limit = ${limit}`);
});

// Another query example
app.get("/filter", (req, res) => {
    res.send({
        category: req.query.category,
        price: req.query.maxPrice,
        rating: req.query.rating
    });
});

// -----------------------------
// Start Server
// -----------------------------
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
