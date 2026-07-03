import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.db.js";
import authRoutes from "./routes/auth.routes.js";


dotenv.config();


const app = express();
app.use(express.json());


// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});

