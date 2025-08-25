// components/chatbot/ChatMessages.js
import MessageBubble from "./MessageBubble";
import LoadingIndicator from "./LoadingIndicator";

export default function ChatMessages({ messages, isLoading, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <MessageBubble message={message} />
        </div>
      ))}
      {isLoading && <LoadingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
}
