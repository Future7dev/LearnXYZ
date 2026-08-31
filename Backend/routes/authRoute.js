import express from "express";
import { login, register, googleAuth, getProfile, updateProfile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/google", googleAuth);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

export default router;