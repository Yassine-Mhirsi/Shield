import { Request, Response } from "express";
import Client from "../model/client";



export const createClient = async (req: Request, res: Response) => {
    try {
        const client = req.body;
        const newClient = await Client.create(client);

        res.status(201).json(newClient);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};



export const fetchClients = async (req: Request, res: Response) => {
    try {
        const client = await Client.find();
        res.status(200).json(client);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const updateClient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { phone, state, zip_code, city, adress } = req.body;

    try {
        // Find the existing product
        const existingClient = await Client.findById(id);

        if (!existingClient) {
            return res.status(404).json({ message: "Client not found" });
        }

        // Create an object with fields to update
        const updatedFields: any = {};
        if (phone) updatedFields.phone = phone;
        if (state) updatedFields.state = state;
        if (zip_code) updatedFields.zip_code = zip_code;
        if (city) updatedFields.city = city;
        if (adress) updatedFields.adress = adress;

        // Update the product with the new fields
        const updatedClient = await Client.findByIdAndUpdate(id, updatedFields, { new: true });

        res.status(200).json(updatedClient);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export default {
    createClient,
    fetchClients,
    updateClient,
    // updateProduct,
    // deleteProduct,
    // GetProductsByShopId,
    // searchProducts,
};