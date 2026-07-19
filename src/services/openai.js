import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function analyzeReport(reportText) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,
      max_completion_tokens: 12000,

      messages: [
        {
          role: "system",
          content: `
You are an expert medical assistant.

Your job is to analyze pathology reports.
Do not return markdown.
Return ONLY valid JSON.
The response must be complete.
Do not truncate the JSON.
Do not stop early.
Ensure every opening bracket and brace has a matching closing bracket.
Before responding, verify the JSON is syntactically valid.
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
    abnormalTests":[],
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
      "foods":[],
      "exercise":[]
    }
  ]
}

IMPORTANT:
If status is "Normal":
- Keep explanation very short (1-2 sentences).
- Do NOT generate:
  - reason
  - doctorAdvice
  - questionsToAsk

If status is High, Low or Borderline return complete information including:
"reason":[],
      "recommendation":"",
      "severity":"",
      "doctorAdvice":[],
      "questionsToAsk":[]


IMPORTANT

LABORATORY EXTRACTION RULES
1. Extract laboratory parameters ONLY.
2. Ignore:
- page headers
- page footers
- doctor names
- addresses
- package names
- interpretation paragraphs
- comments
- recommendations
3. Extract every laboratory parameter exactly once.
4. Never duplicate a parameter.
5. Never merge two parameters.
6. Never skip a normal parameter.
7. Never invent a parameter.
8. tests[] is the source of truth.
9. summary.totalTests MUST equal tests.length.
10. summary.normal, high, low and borderline must be calculated only from tests[].

If any patient information is missing from the report:
Use an empty string ("") instead of guessing.

Value rules:
- Keep "value" exactly as written in the report.
- Do not add units to "value".
- Keep measurement units only inside the "range" field.

If a laboratory parameter has no reference range in the report,
return:
"range":""

mentionedTests and abnormalTests are optional helper fields.
Only include test names that already exist inside the tests array.
Never invent a test name.
Never shorten a laboratory parameter name.
Use the exact laboratory parameter names returned in tests[].

Health Score Rules:
Return healthScore as 0.
The frontend application will calculate the final health score.

- Status should only be:
Normal
High
Low
Borderline

Status matching rules:
- If the value is within the reference range → Normal
- If above the upper limit → High
- If below the lower limit → Low
- Use Borderline only when the report explicitly indicates a borderline result.

- Explanation rules:

Return a detailed explanation in the "explanation" field.

overallSummary rules:
- Keep it between 3-5 short sentences.
- Mention only abnormal findings.
- Do not repeat detailed explanations.
- Mention the most important health concerns and one overall recommendation.

For ABNORMAL tests (High, Low, Borderline):

The explanation MUST be 30-50 words in small paragraphs.
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


Return 3-4 foods.

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

Return 3-4 suitable exercises.
Example
"exercise":[
"Walking",
"Cycling",
"Strength training",
"Yoga"
]

Return 3 concise medical recommendations.
Recommendation rules:

For abnormal tests:
Return one concise recommendation (maximum 20 words).
Example:
"Increase Vitamin D intake and consult your doctor."

doctorAdvice:
Return 3 concise medical recommendations.
Example:
"doctorAdvice":[
"Repeat the test after 8 weeks.",
"Consult an endocrinologist.",
"Take supplements only if prescribed."
]

Return 2 questions the patient can ask the doctor.
Example
"questionsToAsk":[
"Do I need another blood test?",
"Should I take supplements?",
"Could this be caused by another condition?"
]

For NORMAL tests:
- explanation: 15-25 words
- reason:[]
- foods:[]
- exercise:[]
- doctorAdvice:[]
- questionsToAsk:[]
- recommendation:"Maintain your current healthy lifestyle."

Return ONLY JSON.
`,
        },

        {
          role: "user",
          content: reportText,
        },
      ],

    });

    // return JSON.parse(
    //   completion.choices[0].message.content
    // );
const aiResponse = completion.choices[0].message.content;

console.log("========== GPT RESPONSE ==========");
// console.log(aiResponse);
console.log("==================================");

const report = JSON.parse(aiResponse);

console.log("========== GPT RESPONSE ==========");
console.log("Total Tests:", report.tests.length);

console.table(
  report.tests.map((t, index) => ({
    index,
    name: t.name,
    value: t.value,
    status: t.status,
  }))
);

  return JSON.parse(aiResponse);
  
} catch (err) {
  console.error("Invalid JSON returned by OpenAI");
  console.error(aiResponse);
  throw new Error("AI returned an invalid response. Please try again.");
}

}