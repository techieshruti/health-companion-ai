import { Send } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="flex gap-3">

      <input
        type="text"
        placeholder="Ask about your report..."
        className="
flex-1
rounded-2xl
border
border-slate-700
bg-slate-900
px-5
py-4
text-white
placeholder:text-slate-500
outline-none
transition-all
duration-200
focus:border-cyan-400
focus:ring-2
focus:ring-cyan-400/20
"
      />

      <button className="
rounded-2xl
bg-cyan-500
p-4
text-white
transition-all
duration-200
hover:scale-[1.03]
hover:bg-cyan-400
">
        <Send size={20} />
      </button>

    </div>
  );
};

export default ChatInput;