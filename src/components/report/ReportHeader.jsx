import { useNavigate } from "react-router-dom";

function ReportHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-8">
      <button
        onClick={() => navigate("/dashboard")}
        className="text-blue-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-blue-700">
        Report Details
      </h1>
    </div>
  );
}

export default ReportHeader;