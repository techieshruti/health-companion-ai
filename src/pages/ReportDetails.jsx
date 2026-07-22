import { useEffect, useState } from "react";
import PageTransition from "../components/common/PageTransition";
import InfoCard from "../components/report/InfoCard";
import PageHeader from "../components/common/PageHeader";
import TestCard from "../components/report/TestCard";
import SearchBar from "../components/report/SearchBar";
import FilterTabs from "../components/report/FilterTabs";
import TestGrid from "../components/report/TestGrid";
import BackgroundEffect from "../components/common/BackgroundEffect";
import TestModal from "../components/report/TestModal";
import { useSearchParams } from "react-router-dom";
import { useReport } from "../context/ReportContext";
import { ChevronUp } from "lucide-react";

function ReportDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTest, setSelectedTest] = useState(null);
  const [searchParams] = useSearchParams();
  const selectedTestName = searchParams.get("test");
  const filter = searchParams.get("filter");
  const testName = searchParams.get("test");
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

  // bottom to top arrow
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll to test card if testName is present in the URL
  useEffect(() => {
    if (!selectedTestName) return;

    const id = selectedTestName.replace(/\s+/g, "-");

    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        element.classList.add(
          "ring-2",
          "ring-cyan-400",
          "ring-offset-2",
          "ring-offset-[#07131F]",
        );

        setTimeout(() => {
          element.classList.remove(
            "ring-2",
            "ring-cyan-400",
            "ring-offset-2",
            "ring-offset-[#07131F]",
          );
        }, 2000);
      }, 300);
    }
  }, [selectedTestName]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#07131F]">
        <BackgroundEffect variant="report" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          <PageHeader
            title="Report Details"
            description="Search, filter and explore every health parameter with simple AI-powered explanations."
            backText="Dashboard"
            backTo="/dashboard"
          />
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
          <TestModal
            test={selectedTest}
            onClose={() => setSelectedTest(null)}
          />
        </div>
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
      fixed
      bottom-5
      right-2
      z-50
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-cyan-400/20
      bg-slate-800/90
      backdrop-blur-xl
      text-cyan-400
      shadow-[0_0_18px_rgba(34,211,238,0.18)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-400/50
      hover:bg-slate-700
      hover:text-white
      hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]
    "
          >
            <ChevronUp size={18} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </PageTransition>
  );
}

export default ReportDetails;
