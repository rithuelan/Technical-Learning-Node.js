import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";
import passport from "passport";
import xssClean from "xss-clean";

import "./config/passport.js";
import connectDB from "./db/index.js";

import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(xssClean());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Auth + Security API running...");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
