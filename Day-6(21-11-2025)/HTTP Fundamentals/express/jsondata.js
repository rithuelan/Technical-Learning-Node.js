const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON

app.post("/api/data", (req, res) => {
    res.json({
        message: "JSON received!",
        yourData: req.body
    });
});

app.listen(3000);
