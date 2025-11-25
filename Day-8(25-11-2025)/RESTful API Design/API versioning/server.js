const express = require("express");
const app = express();
app.use(express.json());

// Version 1
app.get("/api/v1/products", (req, res) => {
  res.json({ version: "v1", products: ["Phone", "Laptop"] });
});

// Version 2
app.get("/api/v2/products", (req, res) => {
  res.json({ version: "v2", products: [{ name: "Phone", price: 15000 }, { name: "Laptop", price: 50000 }] });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));