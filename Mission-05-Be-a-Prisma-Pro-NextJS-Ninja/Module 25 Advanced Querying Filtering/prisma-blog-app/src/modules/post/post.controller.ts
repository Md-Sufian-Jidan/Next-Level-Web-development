import { Request, Response } from "express";
import { postServices } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(400).json({
                success: false,
                error: "Unauthorized"
            });
        }
        const result = await postServices.createPost(req.body, user.id as string);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({
            error: "Post creation failed",
            details: error
        });
        console.log(error);
    }
};

const getAllPost = async (req: Request, res: Response) => {
    try {
        const { search } = req.query;
        console.log(search);
        const result = await postServices.getAllPost({search});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            error: "Post creation failed",
            details: error
        });
    };
};

export const postController = {
    createPost,
    getAllPost
};