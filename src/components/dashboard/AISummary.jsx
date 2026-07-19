import { Bot } from "lucide-react";
import { useReport } from "../../context/ReportContext";

function AISummary() {
  const { report } = useReport();
  const summary = report?.summary;
  const [first, second, third] = summary?.abnormalTests ?? [];
  const totalTests = summary?.totalTests;
  const abnormal = summary?.abnormalTests || [];

  const abnormalTests =
    report?.tests?.filter((test) => test.status !== "Normal") || [];

  const renderSummary = () => {
    const text = summary?.overallSummary || "";

    const abnormalNames =
      report?.tests
        ?.filter((test) => test.status !== "Normal")
        .map((test) =>
          test.name
            .replace(/\s*-\s*Serum/i, "")
            .replace(/\s*Total-25 Hydroxy/i, "")
            .trim(),
        ) || [];

    if (!abnormalNames.length) return text;

    // Escape regex special characters
    const escapedNames = abnormalNames.map((name) =>
      name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );

    const regex = new RegExp(`(${escapedNames.join("|")})`, "gi");
    return text.split(regex).map((part, index) => {
      const matched = abnormalNames.find(
        (name) => name.toLowerCase() === part.toLowerCase(),
      );

      if (matched) {
        return (
          <span key={index} className="font-semibold text-cyan-300">
            {part}
          </span>
        );
      }

      return part;
    });
  };

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

        <div className="mt-5 pl-20 sm:pl-0">
          <h2 className="text-3xl font-bold text-white">
            Health Report Overview
          </h2>

          <p className="mt-4 leading-8 text-slate-300">{renderSummary()}</p>
        </div>
      </div>
    </div>
  );
}

export default AISummary;
