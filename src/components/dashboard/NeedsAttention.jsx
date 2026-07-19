import { AlertTriangle, ChevronRight } from "lucide-react";
import { useReport } from "../../context/ReportContext";
import { useNavigate } from "react-router-dom";

function NeedsAttention() {
  const navigate = useNavigate();
  const { report } = useReport();
const abnormalTests =
  report?.tests?.filter(
    (test) => test.status !== "Normal"
  ) || [];

// Remove duplicate tests
const uniqueAbnormalTests = Array.from(
  new Map(
    abnormalTests.map((test) => [
      test.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .replace("serumpotassium", "potassium")
        .replace("potassiumserum", "potassium"),
      test,
    ])
  ).values()
);

// Sort by severity
const sortedTests = [...uniqueAbnormalTests].sort((a, b) => {
  const order = {
    High: 1,
    Low: 2,
    Borderline: 3,
  };

  return (
    (order[a.status] || 99) -
    (order[b.status] || 99)
  );
});

  return (
    <section className="mt-10">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
          PRIORITY
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">Needs Attention</h2>

        <p className="mt-2 text-slate-400">
          These parameters fall outside the recommended range.
        </p>
      </div>

      <div className="space-y-4">
        {sortedTests.map((test) => (
          <div
            key={test.name}
            onClick={() =>
              navigate(`/report-details?test=${encodeURIComponent(test.name)}`)
            }
            className="
    group
    flex
    cursor-pointer
    items-center
    justify-between
    rounded-2xl
    border
    border-cyan-400/15
    bg-white/5
    backdrop-blur-xl
    px-5
    py-4
    transition-all
    duration-300
    hover:-translate-y-[2px]
    hover:border-cyan-400/40
    hover:bg-white/[0.07]
    hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]
"
          >
            <div className="flex items-center gap-4">
              <div
  className={`h-3 w-3 rounded-full ${
    test.status === "High"
      ? "bg-red-500"
      : test.status === "Low"
      ? "bg-orange-500"
      : "bg-amber-300"
  }`}
/>

              <div>
                <h3 className="font-semibold text-white">{test.name}</h3>

                <p className="text-sm text-slate-400">
                  {test.status} • {test.value}
                </p>
                <p className="mt-1 text-xs text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View detailed report →
                </p>
              </div>
            </div>

            <ChevronRight
              size={20}
              className="
    text-slate-500
    transition-all
    duration-300
    group-hover:translate-x-1
    group-hover:text-cyan-300
  "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default NeedsAttention;
