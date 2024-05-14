import { Request, Response } from "express";
import Report from "../model/report";
import mongoose from "mongoose";



export const createReport = async (req: Request, res: Response) => {
    try {
        const report = req.body;
        const newreport = await Report.create(report);

        res.status(201).json(newreport);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};



export const fetchReport = async (req: Request, res: Response) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};


export const fetchReportByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;  // Get the user ID from the request parameters
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        const reports = await Report.find({ "user.id": userId }); // Query to find reports by user ID

        if (reports.length === 0) {
            return res.status(404).json({ message: 'No reports found for this user' });
        }

        res.status(200).json(reports);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


// export const fetchContractsByInsuranceId = async (req: Request, res: Response) => {
//     const insuranceId = req.params.insuranceId;

//     // Check if the insuranceId provided is a valid MongoDB ObjectId
//     if (!insuranceId || !mongoose.Types.ObjectId.isValid(insuranceId)) {
//         return res.status(400).send('Invalid Insurance ID');
//     }

//     try {
//         const contracts = await Contract.find({ 'insurance.id': insuranceId }).exec();

//         if (!contracts || contracts.length === 0) {
//             return res.status(404).json({ message: 'No contracts found for this insurance ID' });
//         }

//         res.status(200).json(contracts);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// };


// export const fetchContractById = async (req: Request, res: Response) => {
//     const id = req.params.id;
//     try {
//         const contracts = await Contract.find({ '_id': id });
//         if (contracts.length === 0) {
//             return res.status(404).json({ message: 'No contracts found for this id' });
//         }
//         res.status(200).json(contracts);
//     } catch (error: any) {
//         res.status(404).json({ message: error.message });
//     }
// };





export default {
    createReport,
    fetchReport,
    fetchReportByUserId,
};
