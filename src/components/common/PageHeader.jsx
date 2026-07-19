import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PageHeader({
  badge = "AI HEALTH COMPANION",
  title,
  description,
  backText,
  backTo,
}) {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between gap-6">
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            {badge}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            {title}
          </h1>

          {description && (
            <p className="mt-3 max-w-2xl text-slate-400 leading-7">
              {description}
            </p>
          )}
        </div>

        {/* Back Button */}
        {backText && backTo && (
          <button
            onClick={() => navigate(backTo)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-white/5
              px-4
              cursor-pointer
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
            <ChevronLeft size={18} />
            {backText}
          </button>
        )}
      </div>
    </div>
  );
}

export default PageHeader;