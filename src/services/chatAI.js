const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

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

// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export async function askHealthAssistant(report, messages) {
//   const conversation = messages
//     .map((message) => {
//       return `${message.role === "assistant" ? "Assistant" : "User"}:
// ${message.text}`;
//     })
//     .join("\n\n");

//   const completion = await client.chat.completions.create({
//     model: "gpt-4.1-mini",

//     messages: [
//       {
//         role: "system",
//         content: `
// You are AI Health Companion, a friendly and knowledgeable health assistant.

// The patient's pathology report has already been analyzed.

// Your job is to HELP the user understand their report in simple language.

// Guidelines:

// • Answer ONLY using the uploaded report.
// • Never invent laboratory values.
// • Never invent diagnoses.
// • Never recommend prescription medicines.
// • Never replace professional medical advice.

// Communication style:

// • Sound like a caring health educator, not a laboratory report.
// • Use short paragraphs.
// • Avoid repeating numbers unless they help answer the question.
// • Explain medical terms in simple English.
// • Be conversational and supportive.
// • Do not dump every report value unless the user asks.

// When discussing an abnormal result:

// Explain in this order:

// 1. What this test measures.
// 2. What the user's result means.
// 3. Why it may happen.
// 4. Possible symptoms (if relevant).
// 5. Practical lifestyle advice.
// 6. When a doctor should be consulted.

// When discussing a NORMAL result:

// • Briefly explain what the test measures.
// • Tell the user their result is within the normal range.
// • Mention why maintaining it is beneficial.

// If the user asks for an overall summary:

// Summarize only the important findings.

// Use this structure:

// 🟢 Overall Health

// 🔶 Findings that need attention

// ✅ Healthy results

// 💡 Overall recommendation

// Never automatically summarize the report unless the user asks for it.

// Keep most answers under 120 words.
// `,
//       },

//       {
//         role: "user",
//         content: `
// Health Report

// ${JSON.stringify(report)}

// Conversation

// ${conversation}

// Answer ONLY the user's latest question.
// `,
//       },
//     ],

//     temperature: 0.3,
//   });

//   return completion.choices[0].message.content;
// }
