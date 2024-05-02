import express from "express";
import MyUserController from "../controller/MyUserController";

const router = express.Router();

router.get('/', MyUserController.getAllUsers);

export default router;