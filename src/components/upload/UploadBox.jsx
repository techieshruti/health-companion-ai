import UploadButton from "./UploadButton";
import DragDropArea from "./DragDropArea";
import { useState } from "react";
import { useRef } from "react";
import FilePreview from "./FilePreview";
import LoadingSpinner from "../common/LoadingSpinner";

function UploadBox() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
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
    } else {
      setSelectedFile(null);
    }
  };

  // drag and drop handler
  const handleFileDrop = (file) => {
    if (!file) return;
    if (validateFile(file)) {
      setSelectedFile(file);
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

// handle analyze report button only visible when a file is selected
  const handleAnalyzeReport = () => {
    if (!selectedFile) {
      setError("Please select a file to analyze.");
      return;
    } 
    else {
      setIsAnalyzing(true);
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full">
      <UploadButton onClick={handleUploadClick} />
      {/* hidden input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,image/*"
        hidden
        onChange={handleFileChange}
      />

      <div className="my-5 text-gray-500 text-center">OR</div>

      <DragDropArea onFileDrop={handleFileDrop} />
      {error && (
        <p className="mt-4 rounded-md bg-red-100 border border-red-300 text-red-700 px-4 py-2">
          {error}
        </p>
      )}      

      <button className="mt-6 text-blue-600 bg-gray-300 px-6 py-3 rounded-lg hover:underline">
        Try Sample Report
      </button>

      {isAnalyzing ? (
  <LoadingSpinner />
) : (
  <FilePreview file={selectedFile} />
)}

{selectedFile && !isAnalyzing && (
  <button
    onClick={handleAnalyzeReport}
    className="bg-blue-600 mt-6 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition"
  >
    Analyze Report
  </button>
)}
    </div>
  );
}

export default UploadBox;
