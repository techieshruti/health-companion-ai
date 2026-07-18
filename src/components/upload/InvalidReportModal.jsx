import { AlertTriangle, Upload, X } from "lucide-react";

function InvalidReportModal({ open, onClose, onTryAgain }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-xl
          rounded-3xl
          border
          border-red-500/20
          bg-[#0D1B2A]
          p-8
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        "
      >
        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-red-500/10
                border
                border-red-500/20
              "
            >
              <AlertTriangle
                className="text-red-400"
                size={28}
              />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                Invalid Health Report
              </h2>

              <p className="mt-1 text-slate-400">
                We couldn't detect a blood test report.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            <X size={22} />
          </button>

        </div>

        <div className="mt-8">

          <p className="leading-8 text-slate-300">
            Please upload a valid pathology or laboratory report
            containing blood test results.
          </p>

          <div
            className="
              mt-6
              rounded-2xl
              border
              border-cyan-400/20
              bg-white/5
              p-5
            "
          >
            <p className="mb-3 text-sm font-semibold text-white">
              Accepted Reports
            </p>

            <ul className="space-y-2 text-slate-300">
              <li>✓ Complete Blood Count (CBC)</li>
              <li>✓ Lipid Profile</li>
              <li>✓ Thyroid Profile</li>
              <li>✓ HbA1c</li>
              <li>✓ Vitamin D / B12</li>
            </ul>

          </div>

          <button
            onClick={onTryAgain}
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-cyan-500
              py-3
              font-medium
              text-white
              transition
              hover:bg-cyan-400
            "
          >
            <Upload size={18} />
            Upload Another Report
          </button>

        </div>

      </div>
    </div>
  );
}

export default InvalidReportModal;