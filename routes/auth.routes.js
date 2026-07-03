import express from "express";
const router = express.Router();

import Authcontroller from "../controller/auth.controller.js";
router.post("/login", Authcontroller.login) 
router.post("/register", Authcontroller.register)

export default router;


