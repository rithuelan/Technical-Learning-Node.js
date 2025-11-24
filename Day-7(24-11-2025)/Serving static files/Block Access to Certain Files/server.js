const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/secret.txt", (req, res) => {
  res.status(403).send("Access Denied");
});

app.listen(3000);
