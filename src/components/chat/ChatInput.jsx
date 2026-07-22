import { Send } from "lucide-react";

const ChatInput = ({ input, setInput, onSend }) => {
  return (
    <div className="flex items-end gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSend();
          }
        }}
        type="text"
        placeholder="Ask about your report..."
        className="
    min-w-0
flex-1
    rounded-2xl
    border
    border-slate-700
    bg-slate-900
    px-5
    py-4
    text-white
    placeholder:text-slate-400
    outline-none
    transition-all
    duration-200
    focus:border-cyan-400
    focus:ring-2
    focus:ring-cyan-400/30
focus:shadow-[0_0_18px_rgba(34,211,238,0.18)]
  "
      />

      <button
        onClick={onSend}
        className="
    flex
h-14
w-14
shrink-0
items-center
justify-center
rounded-2xl
bg-cyan-500
text-white
transition-all
duration-200
hover:scale-[1.03]
hover:bg-cyan-400
max-[420px]:h-12
max-[420px]:w-12
  "
      >
        <Send size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
