import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function askHealthAssistant(report, question) {
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
Uploaded Report:

${JSON.stringify(report)}

Question:

${question}
`,
      },
    ],

    temperature: 0.3,
  });

  return completion.choices[0].message.content;
}