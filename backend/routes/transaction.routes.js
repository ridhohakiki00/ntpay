import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  getHistory,
  makePayment,
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.post("/", protect, makePayment);
router.get("/history", protect, getHistory);

export default router;
