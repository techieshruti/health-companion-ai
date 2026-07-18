import { Bot, User } from "lucide-react";

const ChatMessages = ({ messages }) => {
  return (
    <div className="space-y-5">

      {messages.map((message, index) => (

        <div
          key={index}
          className={`flex animate-[fadeUp_.25s_ease] ${
            message.role === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div
            className={`max-w-[82%] rounded-3xl px-6 py-5 ${
              message.role === "assistant"
                ? "border border-cyan-400/15 bg-slate-900 shadow-[0_0_18px_rgba(34,211,238,0.06)]"
                : "bg-cyan-500 text-white"
            }`}
          >

            <div className="mb-3 flex items-center gap-2">

              {message.role === "assistant" ? (
                <Bot size={18} />
              ) : (
                <User size={18} />
              )}

              <span className="text-sm font-semibold">
                {message.role === "assistant"
                  ? "AI"
                  : "You"}
              </span>

            </div>

            <p className="whitespace-pre-line leading-7">
              {message.text}
            </p>

            {message.time && (
              <p className="mt-3 text-xs text-slate-500">
                {message.time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            )}

          </div>

        </div>

      ))}

    </div>
  );
};

export default ChatMessages;