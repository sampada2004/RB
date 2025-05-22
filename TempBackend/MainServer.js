import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/Database.js";
import Query from "./Models/Queries.js";

dotenv.config();


console.log('MONGO_URI:', process.env.MONGO_URI);  


const webServer = express();

webServer.use(cors());
webServer.use(express.json());



webServer.post("/queries", (request, response)=>
{
    const query = request.body;

    if(!query.question)
    {
        response.status(400).json({ success: false, message: "Please enter a valid question"});
    }

    const newQuery = new Query(query);
})

webServer.listen(5000, ()=>
{
    connectDB();
    console.log('Server is running on port 5000');

})

