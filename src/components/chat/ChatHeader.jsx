import { Bot } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="mb-8 rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-md">

      <div className="mb-4 flex items-center gap-4">

        <div className="rounded-2xl bg-cyan-500/10 p-3">
          <Bot className="text-cyan-400" size={28} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            AI Health Assistant
          </h1>

          <p className="mt-1 text-slate-400">
            Ask anything about your blood report.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ChatHeader;