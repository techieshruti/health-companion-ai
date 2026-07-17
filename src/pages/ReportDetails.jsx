import { useState } from "react";
import InfoCard from "../components/report/InfoCard";
import ReportHeader from "../components/report/ReportHeader";
import TestCard from "../components/report/TestCard";
import SearchBar from "../components/report/SearchBar";
import FilterTabs from "../components/report/FilterTabs";
import TestGrid from "../components/report/TestGrid";
// import LifestyleCard from "../components/report/LifestyleCard";
// import DoctorQuestionsCard from "../components/report/DoctorQuestionsCard";
import BackgroundEffect from "../components/common/BackgroundEffect";
import TestModal from "../components/report/TestModal";

const tests = [
  {
    id: 1,
    name: "Vitamin D",
    status: "Low",
    value: "18 ng/mL",
    range: "30–100 ng/mL",
  },
  {
    id: 2,
    name: "TSH",
    status: "Borderline",
    value: "5.8 mIU/L",
    range: "0.4–4.5 mIU/L",
  },
  {
    id: 3,
    name: "LDL Cholesterol",
    status: "High",
    value: "168 mg/dL",
    range: "<100 mg/dL",
  },
  {
    id: 4,
    name: "HbA1c",
    status: "Normal",
    value: "5.2%",
    range: "4–5.6%",
  },
  {
    id: 5,
    name: "Hemoglobin",
    status: "Normal",
    value: "14.1 g/dL",
    range: "13–17 g/dL",
  },
  {
    id: 6,
    name: "HDL Cholesterol",
    status: "Normal",
    value: "58 mg/dL",
    range: ">40 mg/dL",
  },
];

function ReportDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedTest, setSelectedTest] = useState(null);
  return (
    <div className="relative min-h-screen bg-[#07131F]">
           <BackgroundEffect variant="report" />
    
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
            <ReportHeader />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            {/* <InfoCard /> */}
<TestGrid
  tests={tests}
  searchTerm={searchTerm}
  activeFilter={activeFilter}
  onViewDetails={setSelectedTest}
/>
<TestModal
  test={selectedTest}
  onClose={() => setSelectedTest(null)}
/>
            {/* <LifestyleCard /> */}
            {/* <DoctorQuestionsCard /> */}
          </div>
        </div>
  );
}

export default ReportDetails;