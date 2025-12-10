export default (err, req, res, next) => {
  console.error("Error:", err.message);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      errors: Object.values(err.errors).map(e => e.message)
    });
  }

  if (err.code && err.code === 11000) {
    return res.status(409).json({ message: "Duplicate key error", key: err.keyValue });
  }

  res.status(500).json({ message: "Internal Server Error" });
};
