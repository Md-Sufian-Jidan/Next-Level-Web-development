import express, { Router } from 'express';
import { postController } from './post.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.post('/posts', auth(UserRole.USER, UserRole.ADMIN), postController.createPost);
router.get('/posts', postController.getAllPost);

// Task: create a get api route

export const postRouter: Router = router;