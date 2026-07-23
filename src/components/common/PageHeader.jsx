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

      {/* Top row: Badge + Back Button */}
      <div className="flex items-center justify-between gap-3">
        <p
          className="
            text-[12px]
            sm:text-xs
            uppercase
            text-cyan-400
          "
        >
          {badge}
        </p>

        {backText && backTo && (
          <button
            onClick={() => navigate(backTo)}
            className="
              inline-flex
              shrink-0
              items-center
              gap-1
              rounded-full
              border
              border-cyan-400/20
              bg-white/5
              px-3
              py-1.5
              text-xs
              font-medium
              text-cyan-300
              backdrop-blur-md
              transition-all
              duration-300
              cursor-pointer

              sm:gap-2
              sm:px-4
              sm:py-2
              sm:text-sm

              hover:-translate-y-0.5
              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              hover:text-white
              hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
            "
          >
            <ChevronLeft size={16} />
            {backText}
          </button>
        )}
      </div>

      {/* Title + Description */}
      <div className="mt-4">
        <h1
          className="
            text-3xl
            font-bold
            leading-tight
            text-white
            sm:text-4xl
          "
        >
          {title}
        </h1>

        {description && (
          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-slate-400

              sm:text-base
              sm:leading-7
            "
          >
            {description}
          </p>
        )}
      </div>

    </div>
  );
}

export default PageHeader;