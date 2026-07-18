import { Bot } from 'lucide-react';
import { useReport } from "../../context/ReportContext";

function AISummary() {
  const { report } = useReport();
  const summary = report?.summary;
const [first, second, third] = summary?.abnormalTests ?? [];
  const totalTests = summary?.totalTests;
const abnormal = summary?.abnormalTests || [];

  return (
    <div
      className="
        relative
        mt-8
        mb-8
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/5
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(34,211,238,0.08)]
      "
    >
      {/* Left Accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
      <div className="p-6">

  {/* Top Row */}

  <div className="flex items-center gap-4">
    <div
      className="
        flex
        h-16
        w-16
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-cyan-400/20
        bg-cyan-400/10
      "
    >
      <Bot className="h-8 w-8 text-cyan-300 ai-pulse" />
    </div>

    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/10
        px-6
        py-3
        text-md
        font-medium
        uppercase
        tracking-wide
        text-cyan-300
      "
    >
      AI Generated Summary
    </span>

  </div>

  {/* Bottom Content */}

  <div className="mt-5 pl-20">

    <h2 className="text-3xl font-bold text-white">
      Health Report Overview
    </h2>

    <p className="mt-2 leading-8 text-slate-300">
              Your report contains{" "}
              <span className="font-semibold text-white">
                {summary?.totalTests} tests
              </span>
              . Most values are within the normal range. However,
              <span className="font-semibold text-cyan-300">
                {" "}{first || "No significant abnormalities"}{" "}
              </span>
              is low,
              <span className="font-semibold text-cyan-300">
                {" "}{second}{" "}
              </span>
              is slightly elevated, and
              <span className="font-semibold text-cyan-300">
                {" "}{third}{" "}
              </span>
              requires attention. No critical abnormalities were detected.

            </p>

  </div>

</div>
    </div>
  );
}

export default AISummary;