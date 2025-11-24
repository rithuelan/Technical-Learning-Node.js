const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("uploads"));
app.use("/files", express.static("documents"));

app.listen(3000);
