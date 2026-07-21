const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
console.log("VITE_API_BASE_URL =", import.meta.env.VITE_API_BASE_URL);
console.log("API_BASE_URL =", API_BASE_URL);

export async function extractTests(reportText) {
  const response = await fetch(`${API_BASE_URL}/extract-tests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reportText,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to extract tests.");
  }

  return await response.json();
}

export async function generateInsights(extractedReport) {
  const response = await fetch(`${API_BASE_URL}/generate-insights`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      extractedReport,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate AI insights.");
  }

  return await response.json();
}
