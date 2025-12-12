import express from "express";
import { protect } from "../middleware/auth.js";
import { getPosts } from "../controllers/postController.js";

const router = express.Router();

router.get("/", protect, getPosts);

export default router;
