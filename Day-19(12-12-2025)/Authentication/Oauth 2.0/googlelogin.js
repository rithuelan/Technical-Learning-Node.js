import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

passport.use(new GoogleStrategy({
  clientID: "GOOGLE_CLIENT_ID",
  clientSecret: "GOOGLE_CLIENT_SECRET",
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => res.send("Logged in with Google")
);




// Install:
// npm i passport passport-google-oauth20 express-session