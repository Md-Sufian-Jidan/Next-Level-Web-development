import express, { Application, Request, Response } from 'express';
import { postRouter } from './modules/post/post.router';

const app: Application = express();

app.use(express.json());

app.use("/posts", postRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Prisma blog app work start");
});

export default app;