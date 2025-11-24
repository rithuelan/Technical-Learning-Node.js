const express = require("express");
const app = express();

app.use(express.static("public", {
  maxAge: "1d",
}));

app.listen(3000);
