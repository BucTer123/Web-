import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({api_key: process.env.OPENAI_API_KEY});

app.post("/ask", async (req, res) => {
    const { message } = req.body;
    try {
        const response = await client.responses.create ({
            model: "gpt-3.5-turbo",
            input: message,
        });
        res.json({ reply: response.output_text});
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => console.log("Server is running on port 3000"));