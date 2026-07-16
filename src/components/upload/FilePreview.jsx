import { NotepadText } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';

function FilePreview({ file }) {
  if (!file) return null;

  return (
   <div className="mt-6 rounded-2xl border bg-gray-100 border-emerald-400/20 bg-emerald-500/10 backdrop-blur-md p-5 shadow-lg">
  <div className="flex justify-between items-start">
    <div className="flex gap-4">
      <NotepadText className='text-gray-600'/>
      <div>
        <h3 className="font-semibold text-black">
          {file.name}
        </h3>
        <p className="text-sm text-black mt-1">
          {(file.size / 1024).toFixed(2)} KB
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Uploaded Today
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center min-w-[90px]">
      <div className="text-green-800 text-xl text-right">
           <CircleCheckBig className="text-green-700 w-5 h-6"/>
      </div>
      <p className="text-xs text-green-800 mt-2 text-xs text-center leading-tight">
        Ready to 
        <br/>
        Analyze
      </p>
    </div>
  </div>
</div>
  );
}

export default FilePreview;