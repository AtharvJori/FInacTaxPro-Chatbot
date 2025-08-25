// // components/chatbot/Chatbot.js
// "use client";
// import { useState, useRef, useEffect } from "react";
// import ChatHeader from "./header";
// import ChatMessages from "./ChatMessages";
// import ChatInput from "./form";
// import LoadingIndicator from "./LoadingIndicator";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([
//     // { text: "Hello! Ask me anything about the document.", sender: "bot" },
//   ]);
//   useEffect(() => {
//     // Set initial message on client side only
//     setMessages([
//       { text: "Hello! Ask me anything about the document.", sender: "bot" },
//     ]);
//   }, []);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     inputRef.current?.focus();
//   }, [messages]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading) return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:8000/query", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ question: input }),
//       });

//       if (!response.ok) throw new Error("Network response was not ok");

//       const data = await response.json();
//       setMessages((prev) => [...prev, { text: data.answer, sender: "bot" }]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Sorry, I encountered an error. Please try again.",
//           sender: "bot",
//         },
//       ]);
//       console.error("Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen w-full items-center justify-center bg-gray-50 p-4">
//       <ChatHeader />
//       <ChatMessages
//         messages={messages}
//         isLoading={isLoading}
//         messagesEndRef={messagesEndRef}
//       />
//       <ChatInput
//         input={input}
//         setInput={setInput}
//         isLoading={isLoading}
//         handleSubmit={handleSubmit}
//         inputRef={inputRef}
//       />
//     </div>
//   );
// }

// components/chatbot/Chatbot.js
"use client";
import { useState, useRef, useEffect } from "react";
import ChatHeader from "./header";
import ChatMessages from "./ChatMessages";
import ChatInput from "./form";
import LoadingIndicator from "./LoadingIndicator";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! Ask me anything about the document.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    inputRef.current?.focus();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.answer, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error. Please try again.",
          sender: "bot",
        },
      ]);
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-gray-50 p-4">
      <div className="flex flex-col h-full max-h-[800px] w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <ChatHeader />
        <ChatMessages
          messages={messages}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
        />
        <ChatInput
          input={input}
          setInput={setInput}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
}
