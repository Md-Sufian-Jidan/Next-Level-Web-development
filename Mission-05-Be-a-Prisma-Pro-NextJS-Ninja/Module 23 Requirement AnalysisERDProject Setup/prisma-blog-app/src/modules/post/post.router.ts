import express, { Router } from 'express';
import { postController } from './post.controller';

const router = express.Router();

router.post('/posts', postController.createPost);

// Task: create a get api route

export const postRouter: Router = router;