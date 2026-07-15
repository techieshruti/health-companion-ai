import UploadButton from "./UploadButton";
import DragDropArea from "./DragDropArea";
import { useState } from "react";
import { useRef } from "react";
import FilePreview from "./FilePreview";

function UploadBox() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

// handle upload button click  
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

// handle file selection  
  const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  setSelectedFile(file);
};

// drag and drop handler
const handleFileDrop = (file) => {
    if (!file) return;
    setSelectedFile(file);
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

      <button className="mt-6 text-blue-600 hover:underline">
        Try Sample Report
      </button>
      <FilePreview file={selectedFile} />
    </div>
  );
}

export default UploadBox;
