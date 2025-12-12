// Set cookie
app.get("/set", (req, res) => {
  res.cookie("token", "abc123", {
    httpOnly: true,
    maxAge: 1000 * 60 * 60
  });
  res.send("Cookie set");
});

// Read cookie
app.get("/read", (req, res) => {
  res.json(req.cookies);
});

// Remove cookie
app.get("/clear", (req, res) => {
  res.clearCookie("token");
  res.send("Cookie cleared");
});
