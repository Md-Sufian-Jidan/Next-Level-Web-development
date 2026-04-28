import { Request, Response } from "express";
import { commentService } from "./comment.service";

const createComment = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        req.body.authorId = user?.id;
        const result = await commentService.createComment(req.body);
        res.status(201).json(result);
    } catch (e) {
        const errorMessage = (e instanceof Error) ? e.message : "Comment creation failed";
        res.status(400).json({
            error: errorMessage,
            details: e
        })
    }
};

const getCommentById = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params;
        const result = await commentService.getCommentById(commentId as string);
        res.status(201).json(result);
    } catch (e) {
        const errorMessage = (e instanceof Error) ? e.message : "Single comment find failed";
        res.status(400).json({
            error: errorMessage,
            details: e
        })
    }
};

const getCommentsByAuthor = async (req: Request, res: Response) => {
    try {
        const { authorId } = req.params;
        const result = await commentService.getCommentsByAuthor(authorId as string);
        res.status(201).json(result);
    } catch (e) {
        const errorMessage = (e instanceof Error) ? e.message : "Comment fetched failed";
        res.status(400).json({
            error: errorMessage,
            details: e
        })
    }
};

const deleteComment = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const { commentId } = req.params;
        const result = await commentService.deleteComment(commentId as string, user?.id as string);
        res.status(201).json(result);
    } catch (e) {
        const errorMessage = (e instanceof Error) ? e.message : "Comment delete failed";
        res.status(400).json({
            error: errorMessage,
            details: e
        })
    }
};

const updateComment = async (req: Request, res: Response) => {
    try {
        const user = req.user;
        const { commentId } = req.params;
        const result = await commentService.updateComment(commentId as string, req.body, user?.id as string);
        res.status(201).json(result);
    } catch (e) {
        const errorMessage = (e instanceof Error) ? e.message : "Comment update failed"
        res.status(400).json({
            error: errorMessage,
            details: e
        })
    }
};

const moderateComment = async (req: Request, res: Response) => {
    try {
        const { commentId } = req.params;
        const result = await commentService.moderateComment(commentId as string, req.body);
        res.status(201).json(result);
    } catch (e) {
        const errorMessage = (e instanceof Error) ? e.message : "Comment update failed"
        res.status(400).json({
            error: errorMessage,
            details: e
        })
    }
};

export const commentController = {
    createComment,
    getCommentById,
    getCommentsByAuthor,
    deleteComment,
    updateComment,
    moderateComment
};