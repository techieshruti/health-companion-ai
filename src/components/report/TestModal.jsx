import {
  X,
  Bot,
  TriangleAlert,
  Lightbulb,
  MessageCircle,
  Salad,
} from "lucide-react";
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
  const isAbnormal = test.status !== "Normal";

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

                    {test.unit && (
                      <span className="ml-2 text-base font-normal text-slate-400">
                        {test.unit}
                      </span>
                    )}
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
                <p className="leading-8 text-slate-300">{test.explanation}</p>
              </div>
            </section>

            {/* Possible Causes */}
            {isAbnormal && test.reason?.length > 0 && (
              <section className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <TriangleAlert className="text-yellow-400" size={22} />

                  <h3 className="text-2xl font-semibold text-white">
                    Possible Causes
                  </h3>
                </div>
                <div className="rounded-2xl bg-white/5 p-6">
                  <ul className="space-y-3 text-slate-300">
                    {test.reason?.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
            {/* Lifestyle */}
            <section className="mt-10">
              <div className="mb-4 flex items-center gap-3">
                <Salad className="text-green-400" size={22} />
                <h3 className="text-2xl font-semibold text-white">
                  Foods & Lifestyle
                </h3>
              </div>

              {isAbnormal ? (
                <div className="rounded-2xl bg-white/5 p-6">
                  <h4 className="mb-3 text-slate-300 font-semibold">
                    Recommended Foods
                  </h4>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {test.foods?.map((food) => (
                      <span
                        key={food}
                        className="rounded-full bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 text-sm text-emerald-300"
                      >
                        {food}
                      </span>
                    ))}
                  </div>

                  <h4 className="mb-3 text-slate-300 font-semibold">
                    Exercise
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {test.exercise?.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-violet-500/10 border border-violet-400/20 px-3 py-1 text-sm text-violet-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-slate-300 leading-7 rounded-2xl bg-white/5 p-6">
                  <p>
                    Maintain a balanced diet rich in fruits, vegetables, whole
                    grains and adequate protein.
                  </p>

                  <p>
                    Stay hydrated, sleep 7–8 hours daily and continue regular
                    physical activity to maintain healthy levels.
                  </p>
                </div>
              )}
            </section>

            {/* Doctor Advice */}
            {isAbnormal && test.doctorAdvice?.length > 0 && (
              <section className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <Lightbulb className="text-amber-400" size={22} />

                  <h3 className="text-2xl font-semibold text-white">
                    Doctor Advice
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-6">
                  <ul className="space-y-3 text-slate-300">
                    {test.doctorAdvice?.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Doctor Question */}
            {isAbnormal && test.questionsToAsk?.length > 0 && (
              <section className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <MessageCircle className="text-cyan-400" size={22} />

                  <h3 className="text-2xl font-semibold text-white">
                    Questions to Ask Your Doctor
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-6">
                  <ul className="space-y-3 text-slate-300">
                    {test.questionsToAsk?.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
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
