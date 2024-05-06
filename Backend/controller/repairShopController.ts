import { Request, Response } from "express";
import RepairShop from "../model/repairShop";



export const createRepairShop = async (req: Request, res: Response) => {
    try {
        const { userId, email, TRN, companyName, phoneNumber, picture } = req.body;

        const repairShop = new RepairShop({
          user: { id: userId, email },
          TRN,
          companyName,
          phoneNumber,
          picture
        });
    
        const newRepairShop=await repairShop.save();
    

        res.status(201).json(newRepairShop);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};


const getAllRepairShop = async (req: Request, res: Response) => {
    try {
        const allRepairShop = await RepairShop.find();
        res.json(allRepairShop);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteRepairShop = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedRepairShop = await RepairShop.findByIdAndDelete(id);
        if (!deletedRepairShop) {
            return res.status(404).json({ message: "Repair Shop not found" });
        }
        res.status(200).json({ message: "Repair Shop deleted successfully" });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};




export default {
    createRepairShop,
    getAllRepairShop,
    deleteRepairShop,
};
