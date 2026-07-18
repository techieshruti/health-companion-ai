import UploadButton from "./UploadButton";
import DragDropArea from "./DragDropArea";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { sampleReport } from "../../data/sampleReport";
import { useReport } from "../../context/ReportContext";
import FilePreview from "./FilePreview";
import LoadingSpinner from "../common/LoadingSpinner";

function UploadBox({ onInvalidReport }) {
  const { setReport } = useReport();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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
      setError("");
    } else {
      setSelectedFile(null);
    }
  };

  // file validation
  const maxFileSize = 10 * 1024 * 1024;

  const validateFile = (file) => {
    const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];

    if (!allowedTypes.includes(file.type)) {
      setError("Only PDF, JPG and PNG files are allowed.");
      return false;
    }

    if (file.size > maxFileSize) {
      setError("File size should not exceed 10 MB.");
      return false;
    }

    setError("");
    return true;
  };

  // handle analyze report
  const handleAnalyzeReport = () => {
    if (!selectedFile) {
      setError("Please select a file to analyze.");
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
      onInvalidReport();
      // navigate("/dashboard");
    }, 2000);
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

      <button
        onClick={() => {
           setError("");
  setSelectedFile(null);
          setReport(sampleReport);
          navigate("/dashboard");
        }}
        className="
mt-6
inline-flex
items-center
rounded-xl
border
border-cyan-400/20
bg-white/5
px-5
py-2.5
text-cyan-300
font-medium
transition-all
cursor-pointer
duration-300
hover:bg-cyan-500/10
hover:border-cyan-400/40
hover:text-cyan-200
"
      >
        Try Sample Report
      </button>

      <div className="mt-6">
        {isAnalyzing ? <LoadingSpinner /> : <FilePreview file={selectedFile} />}
      </div>

      {selectedFile && !isAnalyzing && (
        <button
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
