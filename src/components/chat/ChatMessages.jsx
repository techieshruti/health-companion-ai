import { Bot, User } from "lucide-react";

const parameterLinks = [
  "Vitamin D",
  "TSH",
  "LDL Cholesterol",
  "HbA1c",
  "Hemoglobin",
];

const ChatMessages = ({ messages }) => {
  return (
    <div className="space-y-3">

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
            className={`max-w-[50%] rounded-3xl px-6 py-5 transition-all
duration-300
hover:-translate-y-0.5
hover:shadow-[0_0_24px_rgba(34,211,238,0.18)] ${
              message.role === "assistant"
  ? "max-w-[60%] border border-cyan-400/15 bg-slate-900 text-white shadow-[0_0_18px_rgba(34,211,238,0.06)]"
  : "max-w-[40%] bg-[#129BC0] border border-cyan-300/30 text-white shadow-[0_0_18px_rgba(34,211,238,0.18)]"
            }`}
          >

            <div className="mb-3 flex items-center gap-3">

              <div
  className={`flex h-9 w-9 items-center justify-center rounded-full ${
    message.role === "assistant"
      ? "bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.35)]"
      : "bg-slate-900 border border-white/10 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.18)]"
  }`}
>
  {message.role === "assistant" ? (
    <Bot size={18} />
  ) : (
    <User size={18} />
  )}
</div>

              <span
  className={`text-md font-semibold ${
    message.role === "assistant"
      ? "text-cyan-300"
      : "text-white"
  }`}
>
                {message.role === "assistant"
                  ? "AI"
                  : "You"}
              </span>

            </div>

            <p className="whitespace-pre-line leading-7 text-slate-200">
              {message.text}
            </p>

            {message.time && (
              <p className="mt-2 text-xs text-slate-300">
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