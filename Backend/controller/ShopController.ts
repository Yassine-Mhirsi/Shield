import { Request, Response } from "express";
import Shop from "../model/shop";



export const createShop = async (req: Request, res: Response) => {
    try {
        const { userId, email, TRN, companyName, phoneNumber, picture } = req.body;

        const shop = new Shop({
          user: { id: userId, email },
          TRN,
          companyName,
          phoneNumber,
          picture
        });
    
        const newShop=await shop.save();
    

        res.status(201).json(newShop);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};


const getAllShops = async (req: Request, res: Response) => {
    try {
        const allShops = await Shop.find();
        res.json(allShops);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteShop = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedShop = await Shop.findByIdAndDelete(id);
        if (!deletedShop) {
            return res.status(404).json({ message: "Shop not found" });
        }
        res.status(200).json({ message: "Shop deleted successfully" });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};




export default {
    createShop,
    getAllShops,
    deleteShop,
};
