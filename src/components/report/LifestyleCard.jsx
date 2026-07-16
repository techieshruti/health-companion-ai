function LifestyleCard({ suggestions }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">
        Lifestyle Suggestions
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default LifestyleCard;