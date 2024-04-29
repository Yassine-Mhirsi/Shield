import { Request, Response } from "express";
import User from "../models/user";


const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" }); // Return a 409 status code for conflict
    }

    // const newUser = new User(req.body);
    // await newUser.save();

    // res.status(201).json(newUser.toObject());
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};



export default {
  createCurrentUser,
};

