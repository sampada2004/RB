const mongoose = require('mongoose');

const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/Database.js');

dotenv.config();


console.log('MONGO_URI:', process.env.MONGO_URI);  


const webServer = express();

webServer.use(cors());
webServer.use(express.json());

connectDB();


webServer.get("/", (request, response)=>
{
    response.send("Server is setup");
})

webServer.listen(5000, ()=>
{
      console.log('Server is running on port 5000');

})

