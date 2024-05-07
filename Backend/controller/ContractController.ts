import { Request, Response } from "express";
import Contract from "../model/contract";



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


export default {
    createContract,
    fetchContract,
};
