import { Request, Response } from "express";
import Insurance from "../model/insurance";



export const createInsurance = async (req: Request, res: Response) => {
    try {
        const { userId, email, TRN, companyName, phoneNumber, picture, insurancetypes  } = req.body;

        const insurance = new Insurance({
          user: { id: userId, email },
          TRN,
          companyName,
          phoneNumber,
          picture,
          insurancetypes
        });
    
        const newInsurance=await insurance.save();
    
        res.status(201).json(newInsurance);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};


const getAllInsurance = async (req: Request, res: Response) => {
    try {
        const allInsurance = await Insurance.find();
        res.json(allInsurance);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteInsurance = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedInsurance = await Insurance.findByIdAndDelete(id);
        if (!deletedInsurance) {
            return res.status(404).json({ message: "Insurance not found" });
        }
        res.status(200).json({ message: "Insurance deleted successfully" });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};




export default {
    createInsurance,
    getAllInsurance,
    deleteInsurance,
};
