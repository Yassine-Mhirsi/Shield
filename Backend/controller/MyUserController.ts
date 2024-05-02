import { Request, Response } from "express";
import User from "../model/user";

const getAllUsers = async (req: Request, res: Response) => {
    try {
      const allUsers = await User.find();
      res.json(allUsers);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
};

export default {
    getAllUsers,
};
