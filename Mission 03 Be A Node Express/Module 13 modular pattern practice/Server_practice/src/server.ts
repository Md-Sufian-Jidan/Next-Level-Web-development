import express, { Request, Response } from 'express';
import config from './config';
import { userRoutes } from './modules/user/user.routes';
import initDB from './config/db';
const app = express();
const port = config.port;

// parser
app.use(express.json());

initDB();

app.use("/api/v1/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running");
});

app.use((req: Request, res: Response) => {
    res.status(500).json({
        success: false,
        message: "Route not found",
        path: req.path
    });
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});