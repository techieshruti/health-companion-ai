import UploadButton from "./UploadButton";
import {
  extractTests,
  generateInsights,
} from "../../services/openai";
import DragDropArea from "./DragDropArea";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { sampleReport } from "../../data/sampleReport";
import { useReport } from "../../context/ReportContext";
import FilePreview from "./FilePreview";
import { normalizeTests, normalizeTestName, } from "../../utils/normalizeTests";
import LoadingSpinner from "../common/LoadingSpinner";
import { extractPdfText } from "../../utils/extractPdfText";
import { calculateStatus } from "../../utils/calculateStatus";
import { NotepadText } from "lucide-react";

const loadingMessages = [
  "Extracting text...",
  "Reading blood report...",
  "Understanding your health...",
  "Generating AI insights...",
  "Preparing dashboard..."
];

function UploadBox({ onInvalidReport }) {
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
  const analyzeButtonRef = useRef(null);
  const { setReport } = useReport();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, []);

  // handle upload button click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (validateFile(file)) {
      setSelectedFile(file);
      setTimeout(() => {
  analyzeButtonRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}, 300);
      setError("");
    } else {
      setSelectedFile(null);
    }
  };

  // drag and drop handler
  const handleFileDrop = (file) => {
    if (!file) return;

    if (validateFile(file)) {
      setSelectedFile(file);
      setTimeout(() => {
  analyzeButtonRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}, 150);
      setError("");
    } else {
      setSelectedFile(null);
    }
  };

  // file validation
  const maxFileSize = 20 * 1024 * 1024;

  const validateFile = (file) => {
    const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];

    if (!allowedTypes.includes(file.type)) {
      setError("Only PDF, JPG and PNG files are allowed.");
      return false;
    }

    if (file.size > maxFileSize) {
      setError("File size should not exceed 20 MB.");
      return false;
    }

    setError("");
    return true;
  };

  // handle analyze report
  const handleAnalyzeReport = async () => {
    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    setIsAnalyzing(true);

let messageIndex = 0;

setLoadingMessage(loadingMessages[0]);

const loadingInterval = setInterval(() => {
  messageIndex++;

  if (messageIndex < loadingMessages.length) {
    setLoadingMessage(loadingMessages[messageIndex]);
  }
}, 1800);

    try {
      let extractedText = "";

      const { text, totalPages } = await extractPdfText(selectedFile);
console.log(text);

      const extracted = await extractTests(text);
      extracted.tests = normalizeTests(extracted.tests);

      extracted.tests = extracted.tests.map(test => ({
  ...test,
  status: calculateStatus(test.value, test.range),
}));

      console.log(
  "After normalization:",
  extracted.tests.length
);

const insights = await generateInsights(extracted);
const report = {
  patient: extracted.patient,

  summary: insights.summary,

  tests: extracted.tests.map((test) => {
   const ai = insights.tests.find(
  (item) =>
    normalizeTestName(item.name) ===
    normalizeTestName(test.name)
);

    return {
      ...test,
      ...ai,
    };
  }),
};

const tests = report.tests || [];

// Recalculate summary from tests
report.summary = {
  totalTests: tests.length,

  normal: tests.filter(t => t.status === "Normal").length,

  high: tests.filter(t => t.status === "High").length,

  low: tests.filter(t => t.status === "Low").length,

  borderline: tests.filter(t => t.status === "Borderline").length,

  abnormalTests: tests
    .filter(t => t.status !== "Normal")
    .map(t => t.name),

  mentionedTests: tests
    .filter(t => t.status !== "Normal")
    .map(t => t.name),

  overallSummary:
  insights.summary?.overallSummary || ""
};

// // Debug logs
//   console.log("========== REPORT DEBUG ==========");
//   console.log("Summary Total Tests:", report.summary.totalTests);
//   console.log("Tests Array Length:", report.tests.length);

//   console.table(
//     report.tests.map((t, i) => ({
//       index: i,
//       name: t.name,
//       status: t.status,
//     }))
//   );

      // Health score fallback
//       if (report.summary.healthScore == null) {
//   const deduction =
//     report.summary.high * 8 +
//     report.summary.low * 5 +
//     report.summary.borderline * 3;

//   report.summary.healthScore = Math.max(100 - deduction, 0);
// }

const deduction =
  report.summary.high * 4 +
  report.summary.low * 2 +
  report.summary.borderline * 1;

report.summary.healthScore =
  insights.summary?.healthScore ??
  Math.max(100 - deduction, 0);

      report.summary.totalPages = totalPages;

      setReport(report);

      navigate("/dashboard");
    } catch (error) {
     console.error("Analyze Report Error:", error);

alert(error.message);
      onInvalidReport();
    } finally {
      setIsAnalyzing(false);
      clearInterval(loadingInterval);
    }
  };

  return (
    <div
      className="
        w-full
    max-w-2xl
    rounded-[32px]
    border border-cyan-400/20
    bg-white/12
    backdrop-blur-2xl
    shadow-[0_25px_80px_rgba(14,165,233,0.18)]
    p-8
    md:p-10
    transition-all
    duration-500
    hover:border-cyan-300/30
    hover:shadow-[0_30px_90px_rgba(14,165,233,0.25)]
      "
    >
      <UploadButton onClick={handleUploadClick} />

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,image/*"
        hidden
        onChange={handleFileChange}
      />

      <div className="my-8 flex items-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-500/40 to-transparent"></div>

        <span className="px-5 text-xs uppercase tracking-[0.3em] text-slate-400 font-medium">
          OR
        </span>

        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-500/40 to-transparent"></div>
      </div>

      <DragDropArea onFileDrop={handleFileDrop} />

      {error && (
        <div
          className="
            mt-6
            rounded-xl
            border border-red-400/20
            bg-red-500/8
            px-4
            py-3
            text-sm
            text-red-200
            backdrop-blur
          "
        >
          {error}
        </div>
      )}
<div
  className="
mt-8
mb-4
rounded-2xl
border
border-cyan-400/20
bg-cyan-500/5
p-6
"
>
  <h3 className="text-lg flex font-semibold text-white">
    <NotepadText className="mr-2"/> Don't have a health report?
  </h3>

  <p className="mt-2 text-sm leading-6 text-slate-400">
    Explore the app instantly using our sample health report and experience
    AI-powered analysis, explanations and recommendations.
  </p>

  <button
    onClick={() => {
      setError("");
      setSelectedFile(null);
      setReport(sampleReport);
      navigate("/dashboard");
    }}
    className="
    mt-4
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
"
  >
    Explore Demo Report
  </button>
</div>

      <div className="mt-6">
        {isAnalyzing ? (
  <LoadingSpinner message={loadingMessage} />
) : (
  <FilePreview file={selectedFile} />
)}
      </div>

      {selectedFile && !isAnalyzing && (
        <button
        ref={analyzeButtonRef}
          onClick={handleAnalyzeReport}
          className="
mt-8
w-full
rounded-2xl
bg-gradient-to-r
from-blue-600
via-sky-500
to-cyan-500
py-4
text-lg
font-semibold
text-white
shadow-lg
shadow-cyan-500/20
transition-all
duration-300
hover:-translate-y-1
hover:shadow-cyan-400/40
active:scale-[0.98]
"
        >
          Analyze Report
        </button>
      )}
    </div>
  );
}

export default UploadBox;
