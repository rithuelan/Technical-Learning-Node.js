import GitHubStrategy from "passport-github2";

passport.use(new GitHubStrategy({
  clientID: "GITHUB_CLIENT_ID",
  clientSecret: "GITHUB_CLIENT_SECRET",
  callbackURL: "/auth/github/callback"
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

app.get("/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get("/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => res.send("Logged in with GitHub")
);
