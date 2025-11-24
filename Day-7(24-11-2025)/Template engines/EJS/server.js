const express = require("express");
const app = express();

// Set template engine
app.set("view engine", "ejs");

// Example route
app.get("/", (req, res) => {
    const user = { name: "John", age: 25 };
    res.render("home", { user });
});

app.listen(3000, () => console.log("Server running on port 3000"));
