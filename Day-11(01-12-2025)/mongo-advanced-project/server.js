require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

// Utils
const { initGridFS } = require("./utils/gridfs");

// Middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// Routes
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const warehouseRoutes = require("./routes/warehouse.routes");
const fileRoutes = require("./routes/file.routes");

const app = express();

// ===================
// MIDDLEWARE
// ===================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger);
app.use(morgan("dev"));

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ===================
// ROUTES
// ===================
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/warehouse", warehouseRoutes);
app.use("/api/files", fileRoutes);

// Error handler
app.use(errorHandler);

// ===================
// DATABASE CONNECTION
// ===================
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

// Initialize GridFS ONLY when DB connection is open
mongoose.connection.once("open", () => {
    initGridFS();
    console.log("📦 GridFS Bucket Ready");

    // Start server AFTER GridFS is ready
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});
