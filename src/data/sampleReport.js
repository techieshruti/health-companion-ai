export const sampleReport = {
  patient: {
    name: "Demo User",
    age: 28,
    gender: "Female",
    reportDate: "18 Jul 2026",
  },

  summary: {
    totalTests: 20,
    normal: 15,
    high: 2,
    low: 2,
    borderline: 1,
    healthScore: 82,
  },

  tests: [
    {
      id: 1,
      name: "Vitamin D",
      status: "Low",
      value: "18 ng/mL",
      range: "30–100 ng/mL",
    },
    {
      id: 2,
      name: "TSH",
      status: "Borderline",
      value: "5.8 mIU/L",
      range: "0.4–4.5 mIU/L",
    },
    {
      id: 3,
      name: "LDL Cholesterol",
      status: "High",
      value: "168 mg/dL",
      range: "<100 mg/dL",
    },
    {
      id: 4,
      name: "HbA1c",
      status: "Normal",
      value: "5.2 %",
      range: "4–5.6 %",
    },
    {
      id: 5,
      name: "Hemoglobin",
      status: "Normal",
      value: "14.1 g/dL",
      range: "13–17 g/dL",
    },
  ],
};