import DashboardHeader from "../components/dashboard/DashboardHeader";
import AISummary from "../components/dashboard/AISummary";
import SummaryGrid from "../components/dashboard/SummaryGrid";
import HealthScore from "../components/dashboard/HealthScore";
import NeedsAttention from "../components/dashboard/NeedsAttention";
import QuickActions from "../components/dashboard/QuickActions";
import BackgroundEffect from "../components/common/BackgroundEffect";

function Dashboard() {
  return (
    <div className="relative min-h-screen bg-[#07131F]">
       <BackgroundEffect variant="particles" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">

        <DashboardHeader />
        <AISummary />
        <SummaryGrid />
        <HealthScore />
        <NeedsAttention />
        <QuickActions />

      </div>
    </div>
  );
}

export default Dashboard;