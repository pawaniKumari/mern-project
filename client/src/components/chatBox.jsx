import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const sendMessage = async () => {
    if (!input.trim()) return;
    setInput(""); // Clear input immediately

    const newMessage = { from: "user", text: input };
    setMessages([...messages, newMessage]);

    const res = await axios.post(`${API_BASE_URL}/api/chat/askBot`, {
      message: input,
    });

    const botMessage = { from: "bot", text: res.data.answer };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="w-[400px] mx-auto mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
        Elephant Expert Chatbot{" "}
        <span role="img" aria-label="elephant">
          🐘
        </span>
      </h2>
      <div className="h-[350px] overflow-y-scroll border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-white dark:bg-gray-900">
        {messages.map((msg, index) =>
          msg.from === "bot" ? (
            <div
              key={index}
              className="mb-2 px-3 py-2 rounded-lg max-w-[80%] break-words text-sm bg-gray-100 dark:bg-gray-700 text-left mr-auto"
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ) : (
            <p
              key={index}
              className="mb-2 px-3 py-2 rounded-lg max-w-[80%] break-words text-sm bg-green-100 dark:bg-green-900 text-right ml-auto"
            >
              {msg.text}
            </p>
          )
        )}
      </div>
      <div className="flex mt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-800 dark:text-gray-100"
          placeholder="Ask anything about elephants..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
