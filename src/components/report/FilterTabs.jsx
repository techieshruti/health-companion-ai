const filters = [
  "All",
  "High",
  "Low",
  "Borderline",
  "Normal",
];

function FilterTabs({ activeFilter, setActiveFilter }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              rounded-full
              px-5
              py-2.5
              cursor-pointer
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "border border-cyan-400/15 bg-white/5 text-slate-300 backdrop-blur-xl hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
              }
            `}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export default FilterTabs;