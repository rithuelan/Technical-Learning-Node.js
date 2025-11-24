const express = require("express");
const app = express();

app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).send("File Not Found!");
});

app.listen(3000);
