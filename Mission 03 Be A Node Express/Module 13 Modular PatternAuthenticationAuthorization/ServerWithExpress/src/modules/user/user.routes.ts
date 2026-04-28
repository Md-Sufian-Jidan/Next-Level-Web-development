import express from "express";
import { userControllers } from "./user.controllers";
import { auth } from "../../middleware/auth";

const router = express.Router();

// localhost:5000/mezba

// routes --> 
router.post("/", userControllers.createUser);
router.get("/", auth("admin", "user"), userControllers.getUser);
router.get("/:id", userControllers.getSingleUser);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser)

export const userRoutes = router;