import { ArrowRight } from "lucide-react";

const statusStyles = {
  High: {
    badge: "bg-red-500/15 text-red-300 border-red-500/20",
  },
  Low: {
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/20",
  },
  Borderline: {
    badge: "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  },
  Normal: {
    badge: "bg-green-500/15 text-green-300 border-green-500/20",
  },
};

function TestCard({ test, onViewDetails }) {
  const style = statusStyles[test.status] || statusStyles.Normal;

  return (
    <div
      className="
        rounded-3xl
        border
        border-cyan-400/15
        bg-white/5
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-[2px]
        hover:border-cyan-400/30
        hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {test.name}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Health Parameter
          </p>
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
          <span className="text-slate-400">
            Result
          </span>

          <span className="font-semibold text-white">
            {test.value}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Reference Range
          </span>

          <span className="text-slate-300">
            {test.range}
          </span>
        </div>

      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-white/10" />

      {/* Button */}
      <button
        onClick={() => onViewDetails(test)}
        className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-cyan-300
          transition-colors
          hover:text-white
        "
      >
        View Details

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}

export default TestCard;