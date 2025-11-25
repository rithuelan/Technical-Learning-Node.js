const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// Set a cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "rithu elan", {  //res.cookie(create a cookie)
    maxAge: 60000,       // After 1 minute → cookie automatically gets deleted, Temporary cookie (not permanent)
    httpOnly: true       // cannot access from JS
  });
  res.send("Cookie set!");
});

// Read a cookie
app.get("/get-cookie", (req, res) => {
  res.send(req.cookies);
});

// Clear cookie
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie cleared!");
});

app.listen(3000, () => console.log("Server running http://localhost:3000"));