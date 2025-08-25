// components/chatbot/ChatHeader.js
export default function ChatHeader() {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 p-4 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left Title */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">FINACTAXPRO</h1>
          <p className="text-orange-100 text-sm font-medium">
            Services Bharam LLP
          </p>
        </div>

        {/* Right Title */}
        <div className="text-right">
          <h2 className="text-lg font-semibold">Model Bye Laws</h2>
          <p className="text-orange-200 text-sm font-medium">
            Cooperative Housing Society
          </p>
        </div>
      </div>
    </div>
  );
}
