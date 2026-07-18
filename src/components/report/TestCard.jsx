import { ArrowRight } from "lucide-react";

const statusStyles = {
  High: {
    badge: "bg-red-500/20 border border-red-400/30 text-red-200",
  },
  Low: {
    badge: "bg-orange-500/20 border border-orange-400/30 text-orange-200",
  },
  Borderline: {
    badge: "bg-yellow-500/20 border border-yellow-400/30 text-yellow-100",
  },
  Normal: {
    badge: "bg-emerald-500/20 border border-emerald-400/30 text-emerald-200",
  },
};

function TestCard({ test, onViewDetails }) {
  const style = statusStyles[test.status] || statusStyles.Normal;
  const [number, unit] = test.value.split(" ");

  return (
    <div
  id={test.name.replace(/\s+/g, "-")}
  className="
group
scroll-mt-28
rounded-3xl
border
border-cyan-400/20
bg-white/[0.06]
backdrop-blur-xl
p-7
shadow-[0_8px_24px_rgba(0,0,0,0.18)]
transition-all
duration-300
hover:-translate-y-[2px]
hover:border-cyan-400/40
hover:bg-white/[0.08]
hover:shadow-[0_12px_30px_rgba(34,211,238,0.10)]
"
>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{test.name}</h3>

          <p className="mt-1 text-sm text-slate-400">Health Parameter</p>
        </div>

        <span
          className={`
            rounded-full
            border
            px-3
            py-1
            text-xs
            font-medium
            ${style.badge}
          `}
        >
          {test.status}
        </span>
      </div>

      {/* Values */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Result</span>

          <div className="flex items-end gap-1">
            <span className="text-2xl font-bold text-white">{number}</span>

            <span className="pb-1 text-sm text-slate-400">{unit}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Reference Range</span>

          <span className="text-slate-300">{test.range}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-white/10" />

      {/* Button */}
      <button
      onClick={() => onViewDetails(test)}
        className="
    group
    flex
    items-center
    gap-2
    text-sm
    font-medium
    text-cyan-300
    cursor-pointer
    transition-colors
    hover:text-cyan-100
"
      >
        View Details
        <ArrowRight
          size={18}
          className="
        transition-transform
        duration-300
        group-hover:translate-x-1
        "
        />
      </button>
    </div>
  );
}

export default TestCard;
