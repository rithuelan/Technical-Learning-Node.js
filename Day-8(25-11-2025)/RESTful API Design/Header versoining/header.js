const express = require("express");
const app = express();
app.use(express.json());

// Header versioning
app.get("/products", (req, res) => {
  const version = req.headers["accept"]; // read Accept header

  if (version === "application/vnd.myapp.v2+json") {
    // v2 response
    res.json({
      version: "v2",
      products: [
        { name: "Phone", price: 15000, stock: 50 },
        { name: "Laptop", price: 50000, stock: 20 },
      ],
    });
  } else {
    // default v1 response
    res.json({ version: "v1", products: ["Phone", "Laptop"] });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));