import express from "express";
import { getBalance } from "../controllers/balance.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getBalance);

export default router;
