import express from "express";
import {
  getProfile,
  updateProfile,
  updateProfileImage,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getProfile);
router.put("/update", protect, updateProfile);
router.put("/image", protect, updateProfileImage);

export default router;
