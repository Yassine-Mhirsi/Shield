// controllers/partnerController.js
import { Request, Response } from "express";
import Partner from "../model/partner";


// Controller function to handle partner submission
export const submitPartner = async (req: Request, res: Response) => {
  try {
    // Extract partner information from request body
    const { userId, email, TRN, companyName, phoneNumber, newRole } = req.body;

    // Create a new partner instance
    const partner = new Partner({
      user: { id: userId, email },
      TRN,
      companyName,
      phoneNumber,
      newRole
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


export default {
    submitPartner,
};