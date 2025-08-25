// components/chatbot/LoadingIndicator.js
export default function LoadingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white text-gray-900 border border-gray-200 rounded-lg rounded-bl-none px-4 py-2 max-w-[80%]">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}