import express from "express";
import { authControllers } from "./auth.controllers";

const router = express.Router();

// https://localhost:5000/auth/login
router.post("/login", authControllers.loginUser);

export const authRoutes = router;