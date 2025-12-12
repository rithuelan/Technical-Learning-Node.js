import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import GitHubStrategy from "passport-github2";
import User from "../models/User.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Load environment variables
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL,
} = process.env;

// 🛑 Only enable Google OAuth if credentials exist
if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
        }
        done(null, user);
      }
    )
  );

  console.log("✅ Google OAuth enabled");
} else {
  console.log("⚠ Google OAuth disabled (missing .env values)");
}

// 🛑 Only enable GitHub OAuth if credentials exist
if (GITHUB_CLIENT_ID && GITHUB_CLIENT_SECRET) {
  passport.use(
    new GitHubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: GITHUB_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        let user = await User.findOne({ githubId: profile.id });

        if (!user) {
          user = await User.create({
            name: profile.username,
            email: profile._json.email,
            githubId: profile.id,
          });
        }
        done(null, user);
      }
    )
  );

  console.log("✅ GitHub OAuth enabled");
} else {
  console.log("⚠ GitHub OAuth disabled (missing .env values)");
}
