import { NextFunction, Request, Response } from "express"
import { Prisma } from "../../generated/prisma/client";

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    res.status(500);
    let statusCode = 500;
    let errorMessage = "Internal server error";
    let errorDetails = err;

    // PrismaClientValidationError
    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = 400;
        errorMessage = "You provide incorrect field type or missing fields";
    }
    // PrismaClientKnownRequestError 
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
            statusCode = 400;
            errorMessage = "An operation failed because it depends on one or more records that were required but not found."
        }
        else if (err.code === "P2002") {
            statusCode = 400;
            errorMessage = "Unique constraint failed on the {constraint}"
        }
        else if (err.code === "P2003") {
            statusCode = 400;
            errorMessage = "Foreign key constraint failed on the field: {field_name}";
        }
    }
    else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
        statusCode = 500;
        errorMessage = "Another instance reported the error"
    }
    else if (err instanceof Prisma.PrismaClientRustPanicError) {
        statusCode = 500;
        errorMessage = "An unexpected error occurred. Please try again later.";
    }
    else if (err instanceof Prisma.PrismaClientInitializationError) {
        if (err.errorCode === "P1000") {
            statusCode = 500;
            errorMessage = "Authentication failed! please check your login credentials";
        }
        else if (err.errorCode === "P1001") {
            statusCode = 400;
            errorMessage = "Can't reach database server"
        }
    }
    res.status(statusCode).json({
        message: errorMessage,
        error: errorDetails
    });
};

export default errorHandler;