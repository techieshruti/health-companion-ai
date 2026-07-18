import { useEffect, useState } from "react";
import InfoCard from "../components/report/InfoCard";
import ReportHeader from "../components/report/ReportHeader";
import TestCard from "../components/report/TestCard";
import SearchBar from "../components/report/SearchBar";
import FilterTabs from "../components/report/FilterTabs";
import TestGrid from "../components/report/TestGrid";
import BackgroundEffect from "../components/common/BackgroundEffect";
import TestModal from "../components/report/TestModal";
import { useSearchParams } from "react-router-dom";
import { useReport } from "../context/ReportContext";

function ReportDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTest, setSelectedTest] = useState(null);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const [activeFilter, setActiveFilter] = useState("All");
const { report } = useReport();
const tests = report?.tests || [];

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, []);

  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter) {
      setActiveFilter(
        filter.charAt(0).toUpperCase() + filter.slice(1).toLowerCase(),
      );
    } else {
      setActiveFilter("All");
    }
  }, [searchParams]);

  return (
    <div className="relative min-h-screen bg-[#07131F]">
      <BackgroundEffect variant="report" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <ReportHeader />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterTabs
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {/* <InfoCard /> */}
        <TestGrid
          tests={tests}
          searchTerm={searchTerm}
          activeFilter={activeFilter}
          onViewDetails={setSelectedTest}
        />
        <TestModal test={selectedTest} onClose={() => setSelectedTest(null)} />
      </div>
    </div>
  );
}

export default ReportDetails;
