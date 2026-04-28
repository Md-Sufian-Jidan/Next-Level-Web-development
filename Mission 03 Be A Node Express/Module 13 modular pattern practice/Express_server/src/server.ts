import express, { Request, Response } from 'express';
import config from './config';
import { userRoutes } from './modules/user/user.routes';
import { initDB } from './config/db';
const app = express();
const port = config.port;

// Parser
app.use(express.json());

initDB();

app.use("/api/v1", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("LuxeMatches server starts...");
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})