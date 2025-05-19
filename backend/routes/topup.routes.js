import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { topupBalance } from "../controllers/transaction.controller.js";

const router = express.Router();

router.post("/", protect, topupBalance);

export default router;
