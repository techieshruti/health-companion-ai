import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function askHealthAssistant(report, messages) {
    const conversation = messages
  .map((message) => {
    return `${message.role === "assistant" ? "Assistant" : "User"}:
${message.text}`;
  })
  .join("\n\n");
  
  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",

    messages: [
      {
        role: "system",
        content: `
You are an experienced medical assistant.

The user has already uploaded a pathology report.

Answer ONLY using the uploaded report.

Explain everything in simple English.

Never use medical jargon without explaining it.

Keep answers between 80–150 words.

If the report doesn't contain the requested information,
politely say so.

Do not invent values.
`,
      },

      {
  role: "user",
content: `
You are an AI Health Assistant.

Below is the patient's uploaded health report.

${JSON.stringify(report, null, 2)}

The conversation so far:

${conversation}

Instructions:

1. Always answer ONLY using this report.
2. If discussing any test, ALWAYS mention:
   - Test Name
   - User Value
   - Normal Range
   - Status
3. Explain in simple English.
4. Never invent report values.
5. If the report doesn't contain the requested information, clearly say so.
6. Use bullet points whenever helpful.
7. End with one practical recommendation.
`,
},
    ],

    temperature: 0.3,
  });

  return completion.choices[0].message.content;
}