// Npm modules
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";

class AuthService {
     static async register(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await User.create  ({
            name: data.name,
            email: data.email,
            password: hashedPassword,
        });
       
        return user;
    }
    static async login(email, password) {
        const user = await User.findOne({ email});
        if (!user) {
            throw new Error("User not found");
        }
        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        return  token;
    }
}

export default AuthService       