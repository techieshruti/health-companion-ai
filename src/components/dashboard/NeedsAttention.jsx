import { AlertTriangle, ChevronRight } from "lucide-react";
import { useReport } from "../../context/ReportContext";

const attentionTests = [
  {
    name: "Vitamin D",
    status: "Low",
    value: "18 ng/mL",
    color: "bg-red-500",
  },
  {
    name: "TSH",
    status: "Borderline",
    value: "5.8 mIU/L",
    color: "bg-yellow-400",
  },
  {
    name: "LDL Cholesterol",
    status: "High",
    value: "168 mg/dL",
    color: "bg-red-500",
  },
];

function NeedsAttention() {
  const { report } = useReport();
  const abnormalTests =
  report?.tests.filter(
    (test) => test.status !== "Normal"
  ) || [];

  return (
    <section className="mt-10">

      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
          PRIORITY
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Needs Attention
        </h2>

        <p className="mt-2 text-slate-400">
          These parameters fall outside the recommended range.
        </p>
      </div>

      <div className="space-y-4">
        {abnormalTests.map((test) => (
          <div
            key={test.name}
            className="
              flex
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
              hover:border-cyan-400/30
              hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]
            "
          >
            <div className="flex items-center gap-4">

              <div
                className={`h-3 w-3 rounded-full ${test.color}`}
              />

              <div>
                <h3 className="font-semibold text-white">
                  {test.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {test.status} • {test.value}
                </p>
              </div>

            </div>

            <ChevronRight
              size={20}
              className="text-slate-500"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default NeedsAttention;