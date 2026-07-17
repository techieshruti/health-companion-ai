import { useState } from "react";
import { CloudUpload } from 'lucide-react';

function DragDropArea({ onFileDrop }) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
};

const handleDragLeave = () => {
    setIsDragging(false);
};

const handleDrop = (event) => {
  event.preventDefault();
  setIsDragging(false);
  const file = event.dataTransfer.files[0];
  if (!file) return;
  onFileDrop(file);
};
  return (
    <div 
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
    className={`mt-2
    rounded-2xl
    border-2
    border-dashed
    p-8
    text-center
    transition-all
    duration-300
    cursor-pointer
    ${isDragging
    ? "border-cyan-400 bg-cyan-500/10"
    : "border-slate-500/50 hover:border-cyan-400 hover:bg-white/5"
    }`}>
      <div className="text-5xl mb-2 flex justify-center">
        <CloudUpload className="w-8 h-8"/>
      </div>
      <h3 className="text-lg font-semibold text-white">
    Drag & Drop Your Report
  </h3>

  <p className="mt-2 text-slate-300">
    PDF • JPG • PNG
  </p>

  <p className="mt-1 text-sm text-slate-400">
    Maximum file size: 10 MB
  </p>
    </div>
  );
}

export default DragDropArea;