import UploadBox from "../components/upload/UploadBox";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">

      <h1 className="text-5xl font-bold text-white">
        AI Health Companion
      </h1>

      <p className="text-gray-100 mt-4 mb-10 text-center max-w-2xl">
        Upload your medical reports and understand every test in simple
        English with AI-powered explanations.
      </p>

      <UploadBox />

    </div>
  );
}

export default Home;