import session from "express-session";

app.use(session({
  secret: "supersecret",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Login
app.post("/login", (req, res) => {
  const { username } = req.body;

  req.session.user = { username };
  res.send("Logged in");
});

// Protected route
app.get("/profile", (req, res) => {
  if (!req.session.user) return res.status(401).send("Not logged in");

  res.send(`Welcome ${req.session.user.username}`);
});
