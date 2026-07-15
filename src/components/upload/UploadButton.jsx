
function UploadButton({ onClick }) {
  return (
    <button onClick={onClick} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
      Upload PDF Report
    </button>
  );
}

export default UploadButton;