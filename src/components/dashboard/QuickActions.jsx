import { FileText, AlertTriangle, Download, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      icon: <FileText size={28} />,
      title: "View All Tests",
      description: "Browse complete report",
      onClick: () => navigate("/report-details"),
    },
    {
      icon: <AlertTriangle size={28} />,
      title: "High Results",
      description: "View abnormal tests",
      onClick: () => navigate("/report-details?filter=high"),
    },
    {
      icon: <Download size={28} />,
      title: "Download Summary",
      description: "Export PDF report",
      onClick: () => alert("Coming Soon"),
    },
    {
      icon: <Bot size={28} />,
      title: "Ask AI",
      description: "Chat with AI assistant",
      onClick: () => navigate("/chat"),
    },
  ];

  return (
    <section className="mt-10">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
          ACTIONS
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">Quick Actions</h2>

        <p className="mt-2 text-slate-400">
          Access the most common actions for your health report.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={action.onClick}
            className="
              group
              rounded-3xl
              border
              cursor-pointer
              border-cyan-400/15
              bg-white/5
              backdrop-blur-xl
              p-6
              text-left
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:border-cyan-400/40
              hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-400/20
                bg-cyan-400/10
                text-cyan-300
              "
            >
              {action.icon}
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {action.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default QuickActions;
