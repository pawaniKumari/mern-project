import dotenv from "dotenv";
dotenv.config({ path: "./api/.env" });
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function askElephantBot(question) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const contents = [
    {
      parts: [
        {
          text: "You are an expert on elephants. Only answer questions related to elephants. If asked something else, politely say you only answer elephant questions.",
        },
      ],
    },
    {
      parts: [
        {
          text: question,
        },
      ],
    },
  ];

  const result = await model.generateContent({ contents });
  return result.response.text();
}
