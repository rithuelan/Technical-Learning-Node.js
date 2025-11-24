const express = require("express");
const app = express();

// Accessible as: /static/style.css
app.use("/static", express.static("public"));

app.listen(3000);
