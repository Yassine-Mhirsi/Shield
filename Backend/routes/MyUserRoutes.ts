import express from "express";
import MyUserController from "../controller/MyUserController";

const router = express.Router();

router.post('/', MyUserController.CreateCurrentUser);

// export default router;