const express = require("express");
const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");

// Example route
app.get("/", (req, res) => {
    res.render("index", {
        title: "Pug Example",
        message: "Welcome to Pug Template Engine!",
        items: ["Node.js", "Express", "MongoDB"]
    });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
