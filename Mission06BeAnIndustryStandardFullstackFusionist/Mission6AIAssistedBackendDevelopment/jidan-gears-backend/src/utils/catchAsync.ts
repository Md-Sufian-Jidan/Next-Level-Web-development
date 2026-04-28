import { NextFunction, Request, Response } from "express";

export const catchAsync = (fn: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            fn(req, res, next)
        } catch (error: any) {
            next(error)
        }
    };
};