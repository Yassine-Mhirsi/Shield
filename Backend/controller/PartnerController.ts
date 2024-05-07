import { Request, Response } from "express";
import Partner from "../model/partner";

// Controller function to handle partner submission
export const submitPartner = async (req: Request, res: Response) => {
  try {
    // Extract partner information from request body
    const { userId, email, TRN, companyName, phoneNumber, newRole, picture, status, insurancetypes } = req.body;

    // Create a new partner instance
    const partner = new Partner({
      user: { id: userId, email },
      TRN,
      companyName,
      phoneNumber,
      newRole,
      picture,
      status,
      insurancetypes
    });

    // Save the partner information to the database
    await partner.save();

    // Respond with success message
    res.status(201).json({ success: true, message: 'Partner information submitted successfully' });
  } catch (error) {
    // If an error occurs, respond with error message
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to submit partner information' });
  }
};

export const fetchRequests = async (req: Request, res: Response) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePartner = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedPartner = await Partner.findByIdAndDelete(id);
    if (!deletedPartner) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Partner deleted successfully" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const updateStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const partner = await Partner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    partner.status = status;

    await partner.save();

    res.send(partner);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating partner" });
  }
};

export default {
  submitPartner,
  fetchRequests,
  deletePartner,
  updateStatus,
};
