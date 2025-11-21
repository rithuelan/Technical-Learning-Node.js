const express = require("express");
const app = express();

app.use(express.json());


// -------------------------------------------------------
// 1) Normal Route (Working)
// -------------------------------------------------------
app.get("/", (req, res) => {
    res.send("Home Page Working!");
});


// -------------------------------------------------------
// 2) Route that throws an error
// -------------------------------------------------------
app.get("/cause-error", (req, res, next) => {
    const error = new Error("Something went wrong!");
    next(error);  // pass the error to error-handling middleware
});


// -------------------------------------------------------
// 3) ERROR-HANDLING MIDDLEWARE
// (Must have 4 parameters)
// -------------------------------------------------------
app.use((err, req, res, next) => {
    console.error("Error message:", err.message);

    res.status(500).json({
        status: "error",
        message: err.message,
    });
});


// -------------------------------------------------------
// Start server
// -------------------------------------------------------
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
