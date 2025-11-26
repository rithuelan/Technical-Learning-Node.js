const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const webRoutes = require("./routes/web");
const v1Products = require("./routes/v1/products");
const v2Products = require("./routes/v2/products");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger);

// Static files
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// View engine
app.set("view engine", "ejs");

// Routes
app.use("/", webRoutes);
app.use("/api/v1/products", v1Products);
app.use("/api/v2/products", v2Products);

// Error handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

