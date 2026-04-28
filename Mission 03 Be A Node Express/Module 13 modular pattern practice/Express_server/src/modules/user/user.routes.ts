import express from 'express';
import { userControllers } from './user.controllers';

const router = express.Router();

router.post("/user", userControllers.createUser);
router.get("/users", userControllers.getUsers);
router.get("/user/:id", userControllers.getSingleUser);
router.put("/user/:id", userControllers.updateUser);
router.delete("/user/:id", userControllers.deleteUser);

export const userRoutes = router;