function FilePreview({ file }) {
  if (!file) return null;

  return (
    <div className="mt-6 rounded-lg border border-green-300 bg-green-50 p-4">
      <h3 className="font-semibold text-green-700">
        Selected File
      </h3>

      <p className="mt-2">
        <strong>Name:</strong> {file.name}
      </p>

      <p>
        <strong>Size:</strong>{" "}
        {(file.size / 1024).toFixed(2)} KB
      </p>
    </div>
  );
}

export default FilePreview;