import { Response } from "express";

interface IResponseData {
    success: boolean;
    statusCode: number;
    message: string;
    data?: any;
    meta?: any;
}

export const sendResponse = (res: Response, responseData: IResponseData) => {

    const { success, statusCode, message, data, meta } = responseData

    res.status(statusCode).json({
        success,
        message,
        data,
        meta
    })
}