import { Search } from "lucide-react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative mb-8">
      <Search
        size={20}
        className="absolute
      left-5
      top-1/2
      z-10
      -translate-y-1/2
      text-slate-400
      pointer-events-none"
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by test name (e.g. Vitamin D, TSH, LDL...)"
        className="
          w-full
          rounded-2xl
          border
          border-cyan-400/15
          bg-white/5
          py-4
          pl-14
          pr-5
          text-white
          placeholder:text-slate-500
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          focus:border-cyan-400/50
          focus:ring-2
          focus:ring-cyan-400/20
        "
      />
    </div>
  );
}

export default SearchBar;