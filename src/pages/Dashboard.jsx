import DashboardHeader from "../components/dashboard/DashboardHeader";
import SummaryGrid from "../components/dashboard/SummaryGrid";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <DashboardHeader />
      <SummaryGrid />
    </div>
  );
}

export default Dashboard;