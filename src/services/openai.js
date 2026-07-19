import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function extractTests(reportText) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,
      max_completion_tokens: 12000,

      messages: [
        {
          role: "system",
          content: `
          You are an expert pathology report parser.

Return ONLY valid JSON.

Extract ONLY directly measured laboratory parameters from the report.

Include:
- Blood tests
- Urine tests
- Hormone tests
- Vitamin tests
- Tumor marker tests
- CBC parameters
- Liver profile parameters
- Kidney profile parameters
- Lipid profile parameters
- Electrolytes

Do NOT include:
- Profile names
- Package names
- Section headings
- Interpretation paragraphs
- Doctor comments
- Recommendations
- Calculated ratios
- Formula-derived values
- Calculated indices

Do NOT include:
- calculated ratios
- calculated indices
- formula-derived values

Examples of values to EXCLUDE:
- Mentzer Index
- RDWI
- Green and King Index
- Albumin/Globulin Ratio
- SGOT/SGPT Ratio

Do not explain anything.

Do not summarize anything.

Ignore:
- page headers
- page footers
- addresses
- doctor names
- package names
- comments
- interpretation paragraphs

Return:

{
  "patient":{
    "name":"",
    "age":"",
    "gender":"",
    "reportDate":""
  },

  "tests":[
    {
      "name":"",
      "value":"",
      "unit":"",
      "range":""
    }
  ]
}


Rules:

1. Return every directly measured laboratory parameter exactly once.

2. Never duplicate a parameter.

3. Never omit a normal parameter.

4. Never invent a parameter.

5. Keep parameter names exactly as written in the report.

6. Keep values exactly as written.

7. Do not modify units.

8. If a range is unavailable return "".
9. Every test MUST contain these four fields:
- name
- value
- unit
- range

10. Extract the unit exactly as written immediately beside the value.
Examples:
mg/dL
ng/mL
pg/mL
%
U/L
μIU/mL
g/dL

11. Never combine the unit into the value.

Correct:
"value":"375"
"unit":"pg/ml"

Wrong:
"value":"375 pg/ml"

12. Extract the reference range exactly as written.

13. If the unit is unavailable return "".

14. If the reference range is unavailable return "".
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

const report = JSON.parse(aiResponse);

console.log("========== GPT RESPONSE ==========");
console.log("Total Tests:", report.tests.length);

console.table(
  report.tests.map((t, index) => ({
    index,
    name: t.name,
    value: t.value,
    range: t.range,
    unit: t.unit,
  }))
);

console.log(
  "Unique Test Names:",
  new Set(report.tests.map(t => t.name)).size
);

  return report;
  
} catch (err) {
  console.error("Invalid JSON returned by OpenAI");
  console.error(aiResponse);
  throw new Error("AI returned an invalid response. Please try again.");
}

}

export async function generateInsights(extractedReport) {

}