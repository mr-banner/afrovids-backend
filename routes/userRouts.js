import express, { Router } from "express";
import { getUserById, googleAuth } from "../controllers/UserController.js";
import isProtected from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/google", googleAuth);
router.get("/getUser",isProtected, getUserById);

export default router;
