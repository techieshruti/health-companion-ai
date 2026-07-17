import InfoCard from "../components/report/InfoCard";
import ReportHeader from "../components/report/ReportHeader";
import TestCard from "../components/report/TestCard";
// import LifestyleCard from "../components/report/LifestyleCard";
// import DoctorQuestionsCard from "../components/report/DoctorQuestionsCard";
import BackgroundEffect from "../components/common/BackgroundEffect";

function ReportDetails() {
  return (
    <div className="relative min-h-screen bg-[#07131F]">
           <BackgroundEffect variant="particles" />
    
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
            <ReportHeader />
            {/* <InfoCard /> */}
            {/* <TestCard /> */}
            {/* <LifestyleCard /> */}
            {/* <DoctorQuestionsCard /> */}
          </div>
        </div>
  );
}

export default ReportDetails;