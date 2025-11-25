const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
  secret: "mysecretkey123",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 10 }    // Set an expiry time for the session cookie.
}));

// Create session
app.get("/login", (req, res) => {
  req.session.username = "rithu elan";
  res.send("Session created!");
});

// Access session
app.get("/dashboard", (req, res) => {
  if (req.session.username) {
    res.send(`Welcome ${req.session.username}`);
  } else {
    res.send("Please login first");
  }
});

// Destroy session
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logged out!");
});

app.listen(3000, () => console.log("Server started http://localhost:3000"));