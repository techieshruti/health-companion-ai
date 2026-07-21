const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://health-companion-ai-5ri9.onrender.com/api";
  console.log("VITE_API_BASE_URL =", import.meta.env.VITE_API_BASE_URL);
console.log("API_BASE_URL =", API_BASE_URL);

export async function askHealthAssistant(report, messages) {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      report,
      messages,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to get AI response.");
  }

  const data = await response.json();

  return data.answer;
}
