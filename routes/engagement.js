import express from "express";
import { getEngagementData } from "../controllers/engagement.js";
const router = express.Router();

router.get("/", getEngagementData);

export default router;
