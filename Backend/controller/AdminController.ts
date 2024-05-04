import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Admin from '../model/admin';

// Controller function to handle admin login
export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Check if admin with the provided email exists
        const admin = await Admin.findOne({ email });
        console.log(email);
        console.log(password);
        console.log(admin);


        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password1' });
        }

        // Ensure admin.password exists before comparing
        if (!admin.password) {
            return res.status(500).json({ message: 'Admin password is missing' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password2' });
        }

        // Generate JWT token with admin ID and email
        // const token = jwt.sign({ adminId: admin._id, email: admin.email }, 'your_secret_key', { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in admin:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
