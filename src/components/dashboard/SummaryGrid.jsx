import SummaryCard from "./SummaryCard";
import { FileText, TestTubeDiagonal, CircleCheckBig, TriangleAlert, CircleArrowDown, CircleMinus } from 'lucide-react';

function SummaryGrid() {
  const summaryData = [
  { id: 1, icon: FileText, title: "Pages", value: 5 },
  { id: 2, icon: TestTubeDiagonal , title: "Tests Found", value: 42 },
  { id: 3, icon: CircleCheckBig , title: "Normal", value: 30 },
  { id: 4, icon: TriangleAlert , title: "High", value: 5 },
  { id: 5, icon: CircleArrowDown , title: "Low", value: 3 },
  { id: 6, icon: CircleMinus , title: "Borderline", value: 4 },
];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-8">
      {summaryData.map((item) => (
        <SummaryCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
}

export default SummaryGrid;