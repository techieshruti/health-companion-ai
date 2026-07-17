import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ReportHeader() {
  const navigate = useNavigate();

  return (
     <div className="mb-8">
      {/* Top Row */}
      <div className="flex items-start justify-between">
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            HEALTH REPORT
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            Report Details
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Search, filter and explore every health parameter with simple AI-powered explanations.
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
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
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ReportHeader;