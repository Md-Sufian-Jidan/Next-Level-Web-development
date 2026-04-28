// higher order function return korbe function k

import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

export const auth = (...roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(500).json({ message: "You are not allowed!!" });
            }

            const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload;;
            // console.log({ decoded });
            // console.log({ authToke: token });
            req.user = decoded as JwtPayload;

            if (roles.length && !roles.includes(decoded.role as string)) {
                res.status(500).json({
                    error: "Unauthorized"
                })
            }

            next();

        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message,
            })
        }
    }
};