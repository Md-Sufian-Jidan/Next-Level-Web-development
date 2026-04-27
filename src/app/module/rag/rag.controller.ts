import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { RAGService } from "./rag.service";
import { sendResponse } from "../../shared/sendResponse";

const getStats = async (req: Request, res: Response) => {
  console.log("connected", req.query);
  res.status(200).json({ message: "connected rag apis" });
};

const ingestDoctors = catchAsync(async (req: Request, res: Response) => {
 const result = new RAGService;

  sendResponse(res,{
    success: true,
    httpStatusCode: status.OK,
    message: "Doctors data ingestion completed",
    data: result
  })
});

export const RagController = {
  getStats,
  ingestDoctors,
};