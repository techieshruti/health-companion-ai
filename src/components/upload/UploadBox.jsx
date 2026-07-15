import UploadButton from "./UploadButton";
import DragDropArea from "./DragDropArea";

function UploadBox() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full">
      <UploadButton />

      <div className="my-5 text-gray-500 text-center">
        OR
      </div>

      <DragDropArea />

      <button className="mt-6 text-blue-600 hover:underline">
        Try Sample Report
      </button>
    </div>
  );
}

export default UploadBox;