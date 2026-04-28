import status from "http-status";
import z from "zod";
import { TErrorSource, TGenericErrorResponse } from "./interface";

export const handleZodError = (err: z.ZodError): TGenericErrorResponse => {
  const statusCode = status.BAD_REQUEST;
  const message = "Zod Validation Error";
  const errorSources: TErrorSource[] = [];

  err.issues.forEach(issue => {
    errorSources.push({
      path: issue.path.join(" => "),
      message: issue.message
    })
  })

  return {
    success: false,
    message,
    errorSources,
    statusCode,
  }
}