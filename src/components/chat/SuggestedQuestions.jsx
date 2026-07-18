const SuggestedQuestions = ({
  questions,
  onSelect,
}) => {
  return (
    <div className="mb-8">

      <p className="mb-4 text-cyan-400">
        Suggested Questions
      </p>

      <div className="flex flex-wrap gap-3">

        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="
rounded-full
border
border-cyan-400/20
bg-slate-900/70
px-5
py-3
transition-all
duration-200
hover:-translate-y-0.5
hover:border-cyan-400
hover:bg-slate-800
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