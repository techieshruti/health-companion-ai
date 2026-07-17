import SummaryCard from "./SummaryCard";
import { FileText, TestTubeDiagonal, CircleCheckBig, TriangleAlert, CircleArrowDown, CircleMinus } from 'lucide-react';

function SummaryGrid() {
 const summaryData = [
  {
    id: 1,
    icon: FileText,
    title: "Pages",
    value: 5,
    color: "text-slate-300",
    bg: "bg-slate-500/10",
  },
  {
    id: 2,
    icon: TestTubeDiagonal,
    title: "Tests Found",
    value: 42,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 3,
    icon: CircleCheckBig,
    title: "Normal",
    value: 30,
    color: "text-green-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: 4,
    icon: TriangleAlert,
    title: "High",
    value: 5,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    id: 5,
    icon: CircleArrowDown,
    title: "Low",
    value: 3,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    id: 6,
    icon: CircleMinus,
    title: "Borderline",
    value: 4,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-8">
      {summaryData.map((item) => (
        <SummaryCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          value={item.value}
          color={item.color}
    bg={item.bg}
        />
      ))}
    </div>
  );
}

export default SummaryGrid;