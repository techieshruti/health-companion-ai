import { NotepadText } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function RecentReport() {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/report");
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Recent Report
      </h2>
      <p className="text-gray-700 flex">
        <NotepadText />
        Blood_Test_Report.pdf
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Uploaded on: 18 July 2026
      </p>

      <div className='flex justify-between'>
        <button onClick={handleViewDetails} className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
        View Details
      </button>
      <button
        onClick={() => navigate("/")}
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        ← Back to Dashboard
      </button>
      </div>
    </div>
  );
}

export default RecentReport;