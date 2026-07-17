import { useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

function DashboardHeader() {
  const navigate = useNavigate();
  return (
    <div className="mb-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="
          mb-6
          inline-flex
          items-center
          gap-2
          cursor-pointer
          rounded-full
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
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
        AI HEALTH COMPANION
      </p>

      <h1 className="mt-2 text-4xl font-bold text-white">
        AI Health Dashboard
      </h1>

      <p className="mt-3 max-w-2xl text-slate-400">
        AI-generated insights and analysis from your uploaded health report.
      </p>
    </div>
  );
}

export default DashboardHeader;