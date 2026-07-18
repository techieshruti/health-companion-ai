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
          onClick={() => navigate("/dashboard")}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            cursor-pointer
            border
            border-cyan-400/20
            bg-white/5
            px-4
            py-2
            text-sm
            font-medium
            text-cyan-300
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-cyan-400/40
            hover:bg-cyan-400/10
            hover:text-white
            hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
          "
        >
          <ChevronLeft size={18} />
          Back to Dashboard
        </button>

    </div>
  );
};

export default ChatHeader;