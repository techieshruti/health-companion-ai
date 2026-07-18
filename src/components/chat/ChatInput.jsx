import { Send } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="flex gap-3">

      <input
        type="text"
        placeholder="Ask about your report..."
        className="flex-1 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-400"
      />

      <button className="rounded-2xl bg-cyan-500 px-5 text-white transition hover:bg-cyan-600">
        <Send size={20} />
      </button>

    </div>
  );
};

export default ChatInput;