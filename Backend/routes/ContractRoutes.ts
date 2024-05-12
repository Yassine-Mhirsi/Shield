import express, { Request, Response } from "express";
import { createContract, fetchContract,fetchContractByUserId } from "../controller/ContractController";

const router = express.Router();

router.post("/create", createContract);
router.get("/fetchAll", fetchContract);
router.get("/fetchContractByUserId/:userId", fetchContractByUserId);

export default router;
