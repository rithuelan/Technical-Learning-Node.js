const express = require("express");
const app = express();

// Only route: /admin/*
app.use("/admin", express.static("admin-public"));

app.listen(3000);
