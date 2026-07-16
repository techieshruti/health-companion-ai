import SummaryCard from "./SummaryCard";

function SummaryGrid() {
  const summaryData = [
  { id: 1, icon: "📄", title: "Pages", value: 5 },
  { id: 2, icon: "🧪", title: "Tests Found", value: 42 },
  { id: 3, icon: "🟢", title: "Normal", value: 30 },
  { id: 4, icon: "🔴", title: "High", value: 5 },
  { id: 5, icon: "🔵", title: "Low", value: 3 },
  { id: 6, icon: "🟡", title: "Borderline", value: 4 },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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