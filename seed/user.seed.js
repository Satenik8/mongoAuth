import mongoose from 'mongoose';

import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URL);
const hash_password = await bcrypt.hash('password', 10);

await User.create({
    name: "admin",
    email: "admin@example.com",
    password: hash_password
});
console.log("Admin user created successfully"); 

process.exit();