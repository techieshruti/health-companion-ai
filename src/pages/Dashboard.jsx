import DashboardHeader from "../components/dashboard/DashboardHeader";
import SummaryGrid from "../components/dashboard/SummaryGrid";
import RecentReport from "../components/dashboard/RecentReport";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <DashboardHeader />
      <SummaryGrid />
      <RecentReport />
    </div>
  );
}

export default Dashboard;