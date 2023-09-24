import express from "express";
import { getChataData } from "../controllers/chatdata.js";

const router = express.Router();

router.get("/", getChataData);

export default router;
