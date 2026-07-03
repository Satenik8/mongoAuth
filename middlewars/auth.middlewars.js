import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

class AuthService {
     static async authmiddleware (req, res, next) {
        try {
        const token = req.headers.authorization?.split(" ")[1];  // չենք հասկանում

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);  //չենք հասկանում
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
        next(error);
    }
    }
}

export default new AuthService();
        