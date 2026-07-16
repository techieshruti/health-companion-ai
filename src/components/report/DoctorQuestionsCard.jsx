function DoctorQuestionsCard({ questions }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">
        Suggested Questions for Your Doctor
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorQuestionsCard;