import express from "express";
import { getServices } from "../controllers/service.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getServices);

export default router;
