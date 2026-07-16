function TestCard({
  testName,
  status,
  result,
  referenceRange,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold">{testName}</h2>

      <p className="mt-2 text-lg">
        Status: <strong>{status}</strong>
      </p>

      <p className="mt-2">
        <strong>Your Result:</strong> {result}
      </p>

      <p className="mt-2">
        <strong>Reference Range:</strong> {referenceRange}
      </p>
    </div>
  );
}

export default TestCard;