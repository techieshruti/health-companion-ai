import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeReport(reportText) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content: `
You are an expert medical assistant.

Your job is to analyze pathology reports.

Return ONLY valid JSON.

Do not return markdown.

Do not explain anything.

The JSON format must be:

{
  "patient": {
    "name": "",
    "age": "",
    "gender": "",
    "reportDate": ""
  },

  "summary": {
    "totalTests": 0,
    "normal": 0,
    "high": 0,
    "low": 0,
    "borderline": 0,
    "healthScore": 0
  },

  "tests": [
    {
      "name": "",
      "value": "",
      "range": "",
      "status": "",
      "reason": "",
      "recommendation": ""
    }
  ]
}
`,
        },

        {
          role: "user",
          content: reportText,
        },
      ],

      temperature: 0.2,
    });

    return JSON.parse(
      completion.choices[0].message.content
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}