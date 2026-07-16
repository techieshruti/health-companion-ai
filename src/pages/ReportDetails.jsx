import InfoCard from "../components/report/InfoCard";
import ReportHeader from "../components/report/ReportHeader";
import TestCard from "../components/report/TestCard";
import LifestyleCard from "../components/report/LifestyleCard";
import DoctorQuestionsCard from "../components/report/DoctorQuestionsCard";

const reportData = {
  testName: "HbA1c",
  status: "🟢 Normal",
  result: "5.2%",
  referenceRange: "4.2% - 5.7%",
  explanation:
    "HbA1c measures your average blood sugar over the last 2–3 months.",
  interpretation:
    "Your HbA1c value is within the normal range.",
  purpose:
    "Doctors use this test to monitor blood sugar levels and assess diabetes risk.",
  suggestions: [
    "Exercise regularly",
    "Eat a balanced diet",
    "Stay hydrated",
    "Sleep 7–8 hours",
  ],
  questions: [
    "Should I repeat this test?",
    "Do I need additional tests?",
    "Are there lifestyle changes I should consider?",
  ],
};

function ReportDetails() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ReportHeader />

      <TestCard
        testName={reportData.testName}
        status={reportData.status}
        result={reportData.result}
        referenceRange={reportData.referenceRange}
      />

      <InfoCard
        title="What is this test?"
        content={reportData.explanation}
      />

      <InfoCard
        title="Interpretation"
        content={reportData.interpretation}
      />

      <InfoCard
        title="Why is this test performed?"
        content={reportData.purpose}
      />

      <LifestyleCard
        suggestions={reportData.suggestions}
      />

      <DoctorQuestionsCard
        questions={reportData.questions}
      />
    </div>
  );
}

export default ReportDetails;