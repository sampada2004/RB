import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/Database.js";
import router from "./Routes/QueryRoute.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

console.log('MONGO_URI:', process.env.MONGO_URI);  

const webServer = express();

// CORS configuration
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://ritbuddy-frontend.onrender.com', 'http://localhost:5173']
        : 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

webServer.use(cors(corsOptions));
webServer.use(express.json());

webServer.use("/api", router);

webServer.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

