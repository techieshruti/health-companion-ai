import { X, Bot, TriangleAlert, Lightbulb, MessageCircle } from "lucide-react";
import { useEffect } from "react";

const statusStyles = {
  High: "bg-red-500/20 border border-red-400/30 text-red-200",
  Low: "bg-orange-500/20 border border-orange-400/30 text-orange-200",
  Borderline: "bg-yellow-500/20 border border-yellow-400/30 text-yellow-100",
  Normal: "bg-emerald-500/20 border border-emerald-400/30 text-emerald-200",
};

function TestModal({ test, onClose }) {
   if (!test) return null;
  const badgeStyle = statusStyles[test.status] || statusStyles.Normal;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-6 md:p-8"
      onClick={onClose}
    >
      <div className="flex min-h-full items-start justify-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            mt-6
            flex
            w-full
            max-w-3xl
            max-h-[90vh]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-cyan-400/20
            bg-[#0D1B2A]
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          "
        >
          {/* ================= HEADER ================= */}

          <div className="flex items-start justify-between border-b border-white/10 p-8">
            <div>
              <div className="flex items-center gap-4">
                <h2 className="text-4xl font-bold text-white">{test.name}</h2>

                <span
                  className={`
    rounded-full
    px-4
    py-1.5
    text-sm
    font-medium
    ${badgeStyle}
  `}
                >
                  {test.status}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-8 text-slate-300">
                <div>
                  <p className="text-sm text-slate-500">Result</p>

                  <p className="mt-1 text-xl font-semibold text-white">
                    {test.value}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Reference Range</p>

                  <p className="mt-1 text-xl font-semibold text-white">
                    {test.range}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="
                rounded-xl
                p-2
                text-slate-400
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <X size={24} />
            </button>
          </div>

          {/* ================= SCROLLABLE BODY ================= */}

          <div className="flex-1 overflow-y-auto modal-scrollbar px-8 py-8">
            {/* AI Explanation */}

            <section>
              <div className="mb-4 flex items-center gap-3">
                <Bot className="text-cyan-400" size={22} />

                <h3 className="text-2xl font-semibold text-white">
                  AI Explanation
                </h3>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <p className="leading-8 text-slate-300">
                  Your{" "}
                  <span className="font-semibold text-white">{test.name}</span>{" "}
                  value is{" "}
                  <span className="font-semibold text-cyan-300">
                    {test.status.toLowerCase()}
                  </span>
                  . This may indicate an imbalance that could require lifestyle
                  changes or medical guidance. Please consult a healthcare
                  professional before making medical decisions.
                </p>
              </div>
            </section>

            {/* Possible Causes */}

            <section className="mt-10">
              <div className="mb-4 flex items-center gap-3">
                <TriangleAlert className="text-yellow-400" size={22} />

                <h3 className="text-2xl font-semibold text-white">
                  Possible Causes
                </h3>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li>• Poor diet or nutritional deficiency</li>
                <li>• Lifestyle habits</li>
                <li>• Underlying medical conditions</li>
              </ul>
            </section>

            {/* Lifestyle */}

            <section className="mt-10">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="text-green-400" size={22} />

                <h3 className="text-2xl font-semibold text-white">
                  Lifestyle Tips
                </h3>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li>• Eat a balanced diet.</li>
                <li>• Exercise regularly.</li>
                <li>• Stay hydrated.</li>
                <li>• Get enough sleep.</li>
              </ul>
            </section>

            {/* Doctor */}

            <section className="mt-10">
              <div className="mb-4 flex items-center gap-3">
                <MessageCircle className="text-cyan-400" size={22} />

                <h3 className="text-2xl font-semibold text-white">
                  Questions to Ask Your Doctor
                </h3>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li>• What could be causing this result?</li>
                <li>• Do I need more tests?</li>
                <li>• Should I change my diet?</li>
              </ul>
            </section>

            {/* Disclaimer */}

            <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
              <p className="text-sm leading-7 text-yellow-100">
                ⚠ This AI-generated interpretation is intended only for
                educational purposes and should not replace professional medical
                advice, diagnosis, or treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestModal;
