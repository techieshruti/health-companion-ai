const API_BASE_URL =  import.meta.env.VITE_API_BASE_URL;

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

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.error || "Failed to extract tests."
    );

    error.code = data.code;

    throw error;
  }

  return data;
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
