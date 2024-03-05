import express from "express";
const router = express.Router();

import { singup, login, logout } from "../controllers/auth.controllers.js";

router.post("/signup", singup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
