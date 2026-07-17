import TestCard from "./TestCard";

function TestGrid({ tests, searchTerm, activeFilter, onViewDetails }) {
  const filteredTests = tests.filter((test) => {
    const matchesSearch = test.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || test.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  if (filteredTests.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-cyan-400/20 bg-white/5 p-12 text-center backdrop-blur-xl">
        <h3 className="text-xl font-semibold text-white">No tests found</h3>

        <p className="mt-3 text-slate-400">
          Try changing your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {filteredTests.map((test, index) => (
        <div
          key={test.id}
          className="report-card"
          style={{
            animationDelay: `${index * 80}ms`,
          }}
        >
          <TestCard test={test} onViewDetails={onViewDetails} />
        </div>
      ))}
    </div>
  );
}

export default TestGrid;
