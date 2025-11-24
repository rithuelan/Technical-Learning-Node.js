exports.getProducts = (req, res) => {
  res.json({
    message: "All products",
    products: ["Keyboard", "Mouse", "Monitor"]
  });
};

exports.addProduct = (req, res) => {
  const { productName } = req.body;

  res.json({
    message: "Product added successfully",
    product: productName
  });
};
