import express, { Request, Response } from "express";
import { createContract, fetchContract,fetchContractByUserId,fetchContractsByInsuranceId } from "../controller/ContractController";

const router = express.Router();

router.post("/create", createContract);
router.get("/fetchAll", fetchContract);
router.get("/fetchContractByUserId/:userId", fetchContractByUserId);
router.get("/fetchContractsByInsuranceId/:insuranceId", fetchContractsByInsuranceId);

export default router;
