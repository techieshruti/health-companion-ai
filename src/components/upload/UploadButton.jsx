
function UploadButton({ onClick }) {
  return (
    <button onClick={onClick} className="
inline-flex
items-center
justify-center
rounded-2xl
bg-gradient-to-r
from-blue-600
via-sky-500
to-cyan-500
px-7
py-4
font-semibold
cursor-pointer
text-white
shadow-lg
shadow-cyan-500/20
transition-all
duration-300
hover:-translate-y-1
hover:shadow-cyan-400/40
active:scale-[0.98]
">
      Upload PDF Report
    </button>
  );
}

export default UploadButton;