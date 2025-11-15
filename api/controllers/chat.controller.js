import { askElephantBot } from "../utils/geminiai.js";

export const chatController = async (req, res) => {
  try {
    const { message } = req.body;
    const answer = await askElephantBot(message);
    res.json({ answer });
  } catch (error) {
    console.error("ChatController error:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
