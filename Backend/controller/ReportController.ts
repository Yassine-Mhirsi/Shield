import { Request, Response } from "express";
import Report from "../model/report";
import Contract from "../model/contract";
import mongoose, { Types } from "mongoose";



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


// Fetch all contracts by a specific insurance ID
const getContractIdsByInsuranceId = async (insuranceId: string): Promise<Types.ObjectId[]> => {
    // if (!mongoose.Types.ObjectId.isValid(insuranceId)) {
    //     throw new Error('Invalid insurance ID format');
    // }

    const contracts = await Contract.find({
        'insurance.id': insuranceId  // Mongoose will handle casting to ObjectId automatically
    }).select('_id');  // We only need the contract IDs

    return contracts.map(contract => contract._id);
};


// Fetch all reports for given contract IDs
const fetchReportsByContractIds = async (contractIds: Types.ObjectId[]): Promise<any[]> => {
    const reports = await Report.find({ 'contract.id': { $in: contractIds } })
        .populate('contract.id', 'user.id');  // Adjust populate as needed

    return reports;
};


export const fetchReportsByInsuranceId = async (req: Request, res: Response) => {
    const insuranceId = req.params.insuranceId;

    try {
        const contractIds = await getContractIdsByInsuranceId(insuranceId);

        if (!contractIds.length) {
            return res.status(404).json({ message: 'No contracts found for this insurance' });
        }

        const reports = await fetchReportsByContractIds(contractIds);

        if (!reports.length) {
            return res.status(404).json({ message: 'No reports found for these contracts' });
        }

        res.status(200).json(reports);
    } catch (error: any) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
};


export const updateReportStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, reason } = req.body;


    try {
        const existingReport = await Report.findById(id);

        if (!existingReport) {
            return res.status(404).json({ message: "Report not found" });
        }

        const updateData : any = {};
        if (status) updateData.status = status;
        if (reason) updateData.reason = reason;

        const updateReport = await Report.findByIdAndUpdate(id, updateData, { new: true });

        res.status(200).json(updateReport);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};



export default {
    createReport,
    fetchReport,
    fetchReportByUserId,
    fetchReportsByInsuranceId,
    updateReportStatus,
};
