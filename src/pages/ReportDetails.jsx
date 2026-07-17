import { useState } from "react";
import InfoCard from "../components/report/InfoCard";
import ReportHeader from "../components/report/ReportHeader";
import TestCard from "../components/report/TestCard";
import SearchBar from "../components/report/SearchBar";
import FilterTabs from "../components/report/FilterTabs";
// import LifestyleCard from "../components/report/LifestyleCard";
// import DoctorQuestionsCard from "../components/report/DoctorQuestionsCard";
import BackgroundEffect from "../components/common/BackgroundEffect";

const test = {
  name: "Vitamin D",
  status: "Low",
  value: "18 ng/mL",
  range: "30–100 ng/mL",
};

function ReportDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <div className="relative min-h-screen bg-[#07131F]">
           <BackgroundEffect variant="report" />
    
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
            <ReportHeader />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            {/* <InfoCard /> */}
            <TestCard
  test={test}
  onViewDetails={(item) => console.log(item)}
/>
            {/* <LifestyleCard /> */}
            {/* <DoctorQuestionsCard /> */}
          </div>
        </div>
  );
}

export default ReportDetails;