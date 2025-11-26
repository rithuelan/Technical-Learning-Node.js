const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

// Read products
function readProducts() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Write products
function writeProducts(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

exports.getProducts = (req, res) => {
  const products = readProducts();
  res.json({ success: true, data: products });
};

exports.createProduct = (req, res) => {
  const products = readProducts();

  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price,
    image: req.file ? req.file.filename : null
  };

  products.push(newProduct);
  writeProducts(products);

  res.status(201).json({ success: true, data: newProduct });
};

exports.updateProduct = (req, res) => {
  const products = readProducts();
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  products[index] = {
    ...products[index],
    name: req.body.name,
    price: req.body.price
  };

  writeProducts(products);
  res.json({ success: true, data: products[index] });
};

exports.deleteProduct = (req, res) => {
  const products = readProducts();
  const id = parseInt(req.params.id);

  const filtered = products.filter(p => p.id !== id);
  writeProducts(filtered);

  res.json({ success: true, message: "Product deleted" });
};

