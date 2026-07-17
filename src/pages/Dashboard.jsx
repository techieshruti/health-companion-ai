import DashboardHeader from "../components/dashboard/DashboardHeader";
import AISummary from "../components/dashboard/AISummary";
import SummaryGrid from "../components/dashboard/SummaryGrid";
import HealthScore from "../components/dashboard/HealthScore";
import NeedsAttention from "../components/dashboard/NeedsAttention";
import QuickActions from "../components/dashboard/QuickActions";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8">

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