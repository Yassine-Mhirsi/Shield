import jwt, { Secret, VerifyErrors } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// Middleware to check if the JWT token is expired
export const checkTokenExpiration = (req: Request, res: Response, next: NextFunction) => {
    // Get the token from cookies or headers
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.redirect('/login'); // Redirect to login if token is not found
    }

    // Verify the token
    jwt.verify(token, 'your_secret_key', (err: VerifyErrors | null, decoded: any) => {
        if (err) {
            return res.redirect('/login'); // Redirect to login if token verification fails
        }

        // Check if the token is expired
        if (Date.now() >= (decoded.exp * 1000)) {
            // Token is expired, redirect to login
            return res.redirect('/login');
        }

        // Token is valid, proceed to the next middleware
        next();
    });
};
