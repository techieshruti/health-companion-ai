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

Do not return markdown.

Do not explain anything.

Return ONLY valid JSON.

The JSON must follow this exact structure.

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
    "healthScore": 0,
    abnormalTests:[],
    "mentionedTests":[],
    "overallSummary": ""
  },

  "tests":[
    {
      "name":"",
      "value":"",
      "range":"",
      "status":"",
      "explanation":"",
      "reason":"",
      "recommendation":"",
      "severity":"",
      "foods":[],
      "exercise":[],
      "doctorAdvice":"",
      "questionsToAsk":[]
    }
  ]
}
  Rules:
- mentionedTests must contain every test name mentioned inside overallSummary.
Example:
"mentionedTests":[
"Vitamin D",
"Potassium",
"Homocysteine"
]
- Always use the exact parameter names from the report.
- abnormalTests must contain the names of every test whose status is not Normal.
- Health score must be between 0-100.
- Status should only be:
Normal
High
Low
Borderline

- Explanation rules:

Return a detailed explanation in the "explanation" field and keep short explanation in overallSummary field.

The explanation MUST be 180–250 words in small paragraphs.

Write in simple English.

Always follow this structure.

1. Explain what this test measures.
2. Explain why doctors order this test.
3. Explain which organ, body system or disease this test is mainly related to.
Examples:
• Heart
• Liver
• Kidney
• Thyroid
• Diabetes
• Vitamins
• Blood Health
• Cholesterol
4. Explain whether the user's value is Normal, High or Low.
5. Explain what this result could mean.
6. Explain what symptoms may occur if this remains abnormal.
7. Explain whether this is usually dangerous or not.
8. End with one reassuring sentence reminding the user that only a doctor can make a diagnosis.
Use friendly language.
Do not repeat information.
Do not use markdown.

Return "reason" as an array.

Provide 4–6 possible reasons.

Example

"reason":[
"Vitamin D deficiency",
"Limited sunlight exposure",
"Poor dietary intake",
"Malabsorption disorders"
]


Return 6-8 foods.

Do not explain.

Example

"foods":[
"Eggs",
"Salmon",
"Milk",
"Mushrooms",
"Spinach",
"Fortified cereals"
]

Return 3-5 suitable exercises.

Example

"exercise":[
"Walking",
"Cycling",
"Strength training",
"Yoga"
]

Return 3 concise medical recommendations.

Example

"doctorAdvice":[
"Repeat the test after 8 weeks.",
"Consult an endocrinologist.",
"Take supplements only if prescribed."
]

Return 3 questions the patient can ask the doctor.

Example

"questionsToAsk":[
"Do I need another blood test?",
"Should I take supplements?",
"Could this be caused by another condition?"
]


Return ONLY JSON.`,
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