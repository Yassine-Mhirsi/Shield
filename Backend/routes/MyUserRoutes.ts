import express from "express";
import MyUserController from "../controller/MyUserController";
import { loginAdmin } from "../controller/AdminController";

const router = express.Router();

router.get('/', MyUserController.getAllUsers);
// router.post('/', MyUserController.createCurrentUser);
router.delete('/deleteUser/:id', MyUserController.deleteUser);
router.post('/login', loginAdmin);

export default router;
