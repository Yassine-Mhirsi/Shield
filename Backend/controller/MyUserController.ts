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

// const updateCurrentUser = async (req: Request, res: Response) => {
//   try {
//     const { name, addressLine1, country, city } = req.body;
//     const user = await User.findById(req.userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.name = name;
//     user.addressLine1 = addressLine1;
//     user.city = city;
//     user.country = country;

//     await user.save();

//     res.send(user);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error updating user" });
//   }
// };




export default {
    getAllUsers,
};
