import { HeartPulse } from "lucide-react";
import { useReport } from "../../context/ReportContext";

function HealthScore() {
  const { report } = useReport();
  const score = report?.healthScore ?? 0;

  const label =
  score >= 90
    ? "Excellent"
    : score >= 75
    ? "Good"
    : score >= 60
    ? "Fair"
    : "Needs Attention";

  return (
    <section className="mt-10">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
          OVERVIEW
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Health Score
        </h2>

        <p className="mt-2 text-slate-400">
          A quick snapshot of your overall health based on the uploaded report.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-cyan-400/15
          bg-white/5
          backdrop-blur-xl
          p-8
          shadow-[0_10px_40px_rgba(34,211,238,0.08)]
        "
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <div className="flex items-center gap-5">

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-red-400/20
                bg-red-500/10
                text-red-400
              "
            >
              <HeartPulse size={30} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Overall Health Score
              </h3>

              <p className="mt-1 text-slate-400">
                Based on your uploaded report
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="w-full md:w-80">

            <div className="flex items-end justify-between">
              <span className="text-5xl font-bold text-white">
                {score}
              </span>

              <span className="mb-1 text-cyan-300 font-medium">
                {label}
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{ width: `${score}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between text-sm text-slate-500">
              <span>0</span>
              <span>100</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HealthScore;