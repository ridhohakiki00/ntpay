// routes/auth.routes.js
import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/registration", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
