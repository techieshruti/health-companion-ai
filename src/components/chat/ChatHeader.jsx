import { Bot } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
const navigate = useNavigate();

  return (
    <div className="mb-8 flex items-start justify-between rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 backdrop-blur-xl">

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
      <button
  onClick={() => navigate("/report")}
  className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    border
    border-cyan-400/20
    bg-slate-800/70
    px-4
    py-2
    text-sm
    text-slate-200
    backdrop-blur-md
    transition-all
    duration-200
    hover:border-cyan-400
    hover:bg-slate-700
  "
>
  <ChevronLeft size={16} />
  Back to Report
</button>

    </div>
  );
};

export default ChatHeader;