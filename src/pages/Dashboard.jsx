import { useEffect, useState } from "react";
// import DashboardHeader from "../components/dashboard/DashboardHeader";
import PageHeader from "../components/common/PageHeader";
import AISummary from "../components/dashboard/AISummary";
import SummaryGrid from "../components/dashboard/SummaryGrid";
import HealthScore from "../components/dashboard/HealthScore";
import NeedsAttention from "../components/dashboard/NeedsAttention";
import QuickActions from "../components/dashboard/QuickActions";
import BackgroundEffect from "../components/common/BackgroundEffect";
import { useReport } from "../context/ReportContext";
import { ChevronUp  } from "lucide-react";

function Dashboard() {
  const { report } = useReport();
  const tests = report?.tests || [];
  
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, []);

// bottom to top arrow
const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <div className="relative min-h-screen bg-[#07131F]">
       <BackgroundEffect variant="dashboard" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">

        <PageHeader
  title="AI Health Dashboard"
  description="AI-generated insights and analysis from your uploaded health report."
  backText="Back to Home"
  backTo="/"
/>
        <AISummary />
        <SummaryGrid />
        <HealthScore />
        <NeedsAttention />
        <QuickActions tests={tests} />
{showScrollTop && (
  <button
    onClick={scrollToTop}
    aria-label="Scroll to top"
    className="
      fixed
      bottom-5
      right-2
      z-50
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-cyan-400/20
      bg-slate-800/90
      backdrop-blur-xl
      text-cyan-400
      shadow-[0_0_18px_rgba(34,211,238,0.18)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-400/50
      hover:bg-slate-700
      hover:text-white
      hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]
    "
  >
    <ChevronUp size={18} strokeWidth={2.5} />
  </button>
)}
      </div>
    </div>
  );
}

export default Dashboard;