import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/NotFound';
import cookieParser from 'cookie-parser';
import { sendResponse } from './utils/sendResponse';
import status from 'http-status';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(cookieParser())
// application routes
// app.use('/api/v1', router);

app.get("/", (req, res) => {
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Server is running",
    data: {
      author: "Md. Abu Sufian Jidan",
      version: "1.0.0",
      host: req.hostname,
      time: new Date().toISOString(),
    },
  });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;