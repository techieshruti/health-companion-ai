import { Bot, User } from "lucide-react";

const ChatMessages = ({ messages }) => {
  return (
    <div className="mb-6 space-y-5">

      {messages.map((message, index) => (

        <div
          key={index}
          className={`flex ${
            message.role === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`max-w-xl rounded-3xl px-5 py-4 ${
              message.role === "assistant"
                ? "border border-cyan-400/20 bg-slate-900 text-white"
                : "bg-cyan-500 text-white"
            }`}
          >
            <div className="mb-2 flex items-center gap-2">

              {message.role === "assistant" ? (
                <Bot size={18} />
              ) : (
                <User size={18} />
              )}

              <span className="text-sm font-medium">
                {message.role === "assistant"
                  ? "AI"
                  : "You"}
              </span>

            </div>

            <p>{message.text}</p>

          </div>
        </div>

      ))}

    </div>
  );
};

export default ChatMessages;