const SuggestedQuestions = ({ questions, onSelect }) => {
  return (
    <div className="mb-8">
      <p className="mb-4 text-cyan-400">Suggested Questions</p>

      <div className="flex flex-wrap gap-3">
        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="
    group
    rounded-full
    border
    border-cyan-400/20
    bg-slate-900/70
    px-5
    py-3
    text-sm
    font-medium
    text-slate-200
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:border-cyan-400
    hover:bg-cyan-500
    hover:text-white
    hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
    focus:outline-none
    focus:ring-2
    focus:ring-cyan-400/30
  "
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
