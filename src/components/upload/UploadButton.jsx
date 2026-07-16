
function UploadButton({ onClick }) {
  return (
    <button onClick={onClick} className="
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-blue-600
            px-6
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/20
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-cyan-400/40
            active:scale-[0.98]">
      Upload PDF Report
    </button>
  );
}

export default UploadButton;