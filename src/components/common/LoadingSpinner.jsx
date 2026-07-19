import { Stethoscope } from "lucide-react";

function LoadingSpinner({ message }) {
  return (
    <div className="mt-10 flex flex-col items-center">

      {/* Outer Ring */}
      <div className="relative flex items-center justify-center">

        <div className="absolute h-24 w-24 rounded-full border border-cyan-400/20"></div>
        <div className="absolute h-24 w-24 rounded-full border-t-2 border-cyan-400 animate-spin"></div>
        <div className="absolute h-16 w-16 rounded-full bg-cyan-500/10 blur-xl animate-pulse"></div>
        <div className="relative z-10 text-3xl">
         <Stethoscope className="w-7 h-7 ai-pulse"/>
        </div>

      </div>

      <h3 className="mt-8 text-xl font-semibold text-white">
        AI is analyzing your report
      </h3>

      <p className="mt-3 text-slate-300 text-center">
        {message}
      </p>

      {/* Animated Progress Bar */}

      <div className="mt-8 h-2 w-72 overflow-hidden rounded-full bg-slate-800">

        <div
          className="
            h-full
            w-1/3
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-sky-400
            to-cyan-500
            animate-[loadingBar_2s_linear_infinite]
          "
        ></div>

      </div>

      <p className="mt-4 text-xs text-slate-400">
        Usually takes 5–10 seconds
      </p>

    </div>
  );
}

export default LoadingSpinner;