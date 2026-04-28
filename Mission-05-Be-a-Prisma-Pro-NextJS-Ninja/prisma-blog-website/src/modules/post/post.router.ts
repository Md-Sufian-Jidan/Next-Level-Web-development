import { Router } from "express";
import { postController } from "./post.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = Router();

router.get(
    "/all-posts",
    postController.getAllPost
);

router.post(
    "/posts",
    auth(UserRole.USER, UserRole.ADMIN),
    postController.createPost
);

export const postRouter = router;