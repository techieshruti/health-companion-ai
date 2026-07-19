import UploadBox from "../components/upload/UploadBox";
import MedicalWave from "../components/common/MedicalWave";
import { NotepadText } from 'lucide-react';
import { HeartPulse } from 'lucide-react';
import { Bot } from 'lucide-react';
import { useState } from "react";
import InvalidReportModal from "../components/upload/InvalidReportModal";
import PageTransition from "../components/common/PageTransition";

function Home() {
  const [showInvalidModal, setShowInvalidModal] = useState(false);
const handleReset = () => {
  setShowInvalidModal(false);
   window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

  return (
    <PageTransition>
    <div className="relative min-h-screen overflow-hidden bg-[#07142A] text-white">
      {/* Animated Medical Background */}
      <MedicalWave />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight">
          AI Health
          <span className="block text-cyan-400">
            Companion
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-slate-300 text-center max-w-3xl leading-8">
          Upload your blood test reports and receive AI-powered explanations,
          health insights, and easy-to-understand summaries within seconds.
        </p>

        {/* Upload Card */}
        <div className="mt-14 w-full flex justify-center">
          <UploadBox onInvalidReport={() => setShowInvalidModal(true)}/>
        </div>
        <InvalidReportModal
  open={showInvalidModal}
  onClose={handleReset}
  onTryAgain={handleReset}
/>
        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/20 transition duration-300">
            <div className="text-3xl mb-4">
              <NotepadText/>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              Upload Reports
            </h3>

            <p className="text-slate-300">
              Securely upload PDF and image reports.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/20 transition duration-300">
            <div className="text-4xl mb-4">
               <Bot />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              AI Explains
            </h3>

            <p className="text-slate-300">
              AI explains every health test simply.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/20 transition duration-300">
            <div className="text-5xl mb-4">
                <HeartPulse/>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Personalized Health Insights
            </h3>

            <p className="text-slate-300">
              Get an overall AI-generated health summary.
            </p>
          </div>

        </div>

      </div>
    </div>
    </PageTransition>
  );
}

export default Home;