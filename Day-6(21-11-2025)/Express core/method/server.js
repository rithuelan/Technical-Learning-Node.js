const express = require("express");
const app = express();

// Middleware to read JSON body
app.use(express.json());

// ----------------------
// GET Request
// ----------------------
app.get("/products", (req, res) => {
    res.send("GET: Fetching all products");
});

// ----------------------
// POST Request
// ----------------------
app.post("/products", (req, res) => {
    const product = req.body;     // reading JSON from request body
    res.send(`POST: Product added - ${JSON.stringify(product)}`);
});

// ----------------------
// PUT Request
// ----------------------
app.put("/products/:id", (req, res) => {
    const productId = req.params.id;  // reading URL parameter
    const updatedData = req.body;     // reading request body
    res.send(`PUT: Updating product ${productId} with ${JSON.stringify(updatedData)}`);
});

// ----------------------
// DELETE Request
// ----------------------
app.delete("/products/:id", (req, res) => {
    const productId = req.params.id;
    res.send(`DELETE: Product ${productId} removed`);
});

// ----------------------
// Start Server
// ----------------------
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
