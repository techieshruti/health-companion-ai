import { useState } from "react";

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
    className={`border-2 border-dashed rounded-xl p-10 text-center mt-6
    ${isDragging
    ? "border-blue-500 bg-blue-50"
    : "border-gray-400"
    }`}>
      <p className="text-gray-600">
        Drag & Drop your PDF or Images here
      </p>
    </div>
  );
}

export default DragDropArea;