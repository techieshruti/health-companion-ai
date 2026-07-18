import { Bot } from 'lucide-react';
import { useReport } from "../../context/ReportContext";

function AISummary() {
  const { report } = useReport();
  const totalTests = report?.summary.totalTests;
const abnormal = report?.summary.abnormalTests || [];

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
        <div className="flex flex-col gap-6 md:flex-row md:items-start">

          {/* AI Icon */}
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-400/20
              bg-cyan-400/10
              text-3xl
              shadow-inner
            "
          >
          <Bot className="h-9 w-9 text-cyan-300 ai-pulse" />
          </div>

          {/* Content */}
          <div className="flex-1">

            {/* Badge */}
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-3
                py-1
                text-xs
                font-medium
                tracking-wider
                uppercase
                text-cyan-300
              "
            >
              AI Generated Summary
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Health Report Overview
            </h2>

            <p className="mt-2 leading-8 text-slate-300">
              Your report contains{" "}
              <span className="font-semibold text-white">
                {totalTests} tests
              </span>
              . Most values are within the normal range. However,
              <span className="font-semibold text-cyan-300">
                {" "}{abnormal[0]}{" "}
              </span>
              is low,
              <span className="font-semibold text-cyan-300">
                {" "}{abnormal[1]}{" "}
              </span>
              is slightly elevated, and
              <span className="font-semibold text-cyan-300">
                {" "}{abnormal[2]}{" "}
              </span>
              requires attention. No critical abnormalities were detected.

            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AISummary;