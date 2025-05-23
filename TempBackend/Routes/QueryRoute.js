import Query from "../Models/Queries.js";
import express from "express";
import fetch from "node-fetch"; 


const router = express.Router();

router.post("/ask", async (req, res) => 
{
  const query = req.body.question;

    if (!query) 
    {
    return res.status(400).json({ error: "Question is required" });
    }

    try 
    {
        const cachedQA = await Query.findOne({ question: query });

        if (cachedQA) 
        {
            return res.json({ answer: cachedQA.answer, cached: true });
        }

        const response = await fetch("http://127.0.0.1:5001/ask", 
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: query }),
        });

        const data = await response.json();

        if (data.answer) 
        {
            await Query.create({ question: query, answer: data.answer });
        }

        res.json({ answer: data.answer}); 
    } 

    catch (error) 
    {
        console.error("Error:", error);
        res.status(500).json({ error: "RAG API call failed" });
    }
});

export default router;
