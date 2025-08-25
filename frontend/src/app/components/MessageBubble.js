// components/chatbot/MessageBubble.js
export default function MessageBubble({ message }) {
  const formatBotMessage = (text) => {
    return text.split("\n").map((paragraph, i) => {
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <p key={i} className="font-bold my-1 text-gray-900">
            {paragraph.slice(2, -2)}
          </p>
        );
      }
      if (/^\d+\./.test(paragraph)) {
        return (
          <p key={i} className="ml-4 my-1 text-gray-900">
            {paragraph}
          </p>
        );
      }
      return (
        <p key={i} className="my-1 text-gray-900">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div
      className={`max-w-[80%] rounded-lg px-4 py-2 ${
        message.sender === "user"
          ? "bg-indigo-500 text-white rounded-br-none"
          : "bg-white text-gray-900 border border-gray-200 rounded-bl-none"
      }`}
    >
      {message.sender === "bot" ? (
        <div className="prose prose-sm">{formatBotMessage(message.text)}</div>
      ) : (
        message.text
      )}
    </div>
  );
}