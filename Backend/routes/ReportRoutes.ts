import express, { Request, Response } from "express";
import { createReport, fetchReport, fetchReportByUserId, fetchReportsByInsuranceId,updateReportStatus } from "../controller/ReportController";

const router = express.Router();

router.post("/create", createReport);
router.get("/fetchAll", fetchReport);
router.get("/fetchReportByUserId/:userId", fetchReportByUserId);
router.get('/fetchReportsByInsuranceId/:insuranceId', fetchReportsByInsuranceId);
router.put('/updateReport/:id',updateReportStatus);
// router.get("/fetchContractsByInsuranceId/:insuranceId", fetchContractsByInsuranceId);
// router.get("/fetchContractsById/:id", fetchContractById);

export default router;
