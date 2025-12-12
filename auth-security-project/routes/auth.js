import express from "express";
import passport from "passport";
import { register, login, logout, me } from "../controllers/authController.js";
import { validateRegister } from "../middleware/validate.js";
import { limiter } from "../middleware/rateLimiter.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", limiter, login);
router.get("/logout", protect, logout);
router.get("/me", protect, me);

// Google OAuth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => res.redirect("http://localhost:3000")
);

// GitHub OAuth
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => res.redirect("http://localhost:3000")
);

export default router;
