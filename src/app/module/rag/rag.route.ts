import { Router } from "express";
import { RagController } from "./rag.controller";

const router = Router();

router.use("/stats", RagController.getStats);

export const RagRoutes = router;