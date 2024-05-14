import express, { Request, Response } from "express";
import { createReport, fetchReport, fetchReportByUserId } from "../controller/ReportController";

const router = express.Router();

router.post("/create", createReport);
router.get("/fetchAll", fetchReport);
router.get("/fetchReportByUserId/:userId", fetchReportByUserId);
// router.get("/fetchContractsByInsuranceId/:insuranceId", fetchContractsByInsuranceId);
// router.get("/fetchContractsById/:id", fetchContractById);

export default router;
