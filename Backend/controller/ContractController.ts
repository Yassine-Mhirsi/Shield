import { Request, Response } from "express";
import Contract from "../model/contract";
import mongoose from "mongoose";



export const createContract = async (req: Request, res: Response) => {
    try {
        const contract = req.body;

        const newcontract = await Contract.create(contract);

        res.status(201).json(newcontract);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};



export const fetchContract = async (req: Request, res: Response) => {
    try {
        const contracts = await Contract.find();
        res.status(200).json(contracts);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};


export const fetchContractByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;  // Get the user ID from the request parameters
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        const contracts = await Contract.find({ "user.id": userId }); // Query to find contracts by user ID

        if (contracts.length === 0) {
            return res.status(404).json({ message: 'No contracts found for this user' });
        }

        res.status(200).json(contracts);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export const fetchContractsByInsuranceId = async (req: Request, res: Response) => {
    const insuranceId = req.params.insuranceId;

    // Check if the insuranceId provided is a valid MongoDB ObjectId
    if (!insuranceId || !mongoose.Types.ObjectId.isValid(insuranceId)) {
        return res.status(400).send('Invalid Insurance ID');
    }

    try {
        const contracts = await Contract.find({ 'insurance.id': insuranceId }).exec();

        if (!contracts || contracts.length === 0) {
            return res.status(404).json({ message: 'No contracts found for this insurance ID' });
        }

        res.status(200).json(contracts);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};





export default {
    createContract,
    fetchContract,
    fetchContractByUserId,
    fetchContractsByInsuranceId
};
