import { NotepadText } from 'lucide-react';
function RecentReport() {
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

      <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
        View Details
      </button>
    </div>
  );
}

export default RecentReport;