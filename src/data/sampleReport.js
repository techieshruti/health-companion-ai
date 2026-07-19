export const sampleReport = {
  patient: {
    name: "Demo User",
    age: 28,
    gender: "Female",
    reportDate: "18 Jul 2026",
  },

  summary: {
    totalPages: 5,
    totalTests: 5,

    normal: 2,
    high: 1,
    low: 1,
    borderline: 1,

    healthScore: 82,

    abnormalTests: [
      "Vitamin D",
      "TSH",
      "LDL Cholesterol",
    ],

    mentionedTests: [
      "Vitamin D",
      "TSH",
      "LDL Cholesterol",
    ],

    overallSummary:
      "Most health parameters are within the normal range. Vitamin D is below the recommended range, LDL cholesterol is elevated, and TSH is mildly increased. These findings can often be improved with lifestyle changes and appropriate medical follow-up.",
  },

  tests: [
    {
      id: 1,
      name: "Vitamin D",
      status: "Low",
      value: "18",
      unit: "ng/mL",
      range: "30–100",

      explanation:
        "Vitamin D helps your body absorb calcium and supports healthy bones, muscles, and immunity. Based on your report, your Vitamin D level is below the normal range.",

      bodySystem: "Bones, muscles and immune system",

      whatItMeasures:
        "Measures the amount of Vitamin D circulating in your blood.",

      meaning:
        "A low Vitamin D level may increase the risk of weak bones and reduced immunity.",

      reason: [
        "Limited sunlight exposure",
        "Low dietary intake",
        "Poor intestinal absorption",
      ],

      symptoms: [
        "Fatigue",
        "Bone pain",
        "Muscle weakness",
        "Frequent infections",
      ],

      foods: [
        "Fortified milk",
        "Egg yolk",
        "Mushrooms",
        "Fortified cereals",
      ],

      exercise: [
        "Morning sunlight walk",
        "Strength training",
        "Regular walking",
      ],

      doctorAdvice: [
        "Discuss Vitamin D supplementation with your doctor.",
        "Repeat the test after treatment if advised.",
      ],

      questionsToAsk: [
        "Should I take Vitamin D supplements?",
        "How much sunlight should I get daily?",
      ],
    },

    {
      id: 2,
      name: "TSH",
      status: "Borderline",
      value: "5.8",
      unit: "mIU/L",
      range: "0.4–4.5",

      explanation:
        "TSH measures how well your thyroid gland is functioning. Your result is slightly above the normal range and may indicate early thyroid dysfunction.",

      bodySystem: "Thyroid gland and endocrine system",

      whatItMeasures:
        "Measures Thyroid Stimulating Hormone produced by the pituitary gland.",

      meaning:
        "A mildly elevated TSH may suggest an underactive thyroid (hypothyroidism).",

      reason: [
        "Early hypothyroidism",
        "Autoimmune thyroid disease",
        "Iodine imbalance",
      ],

      symptoms: [
        "Tiredness",
        "Weight gain",
        "Dry skin",
        "Feeling cold",
      ],

      foods: [
        "Iodized salt",
        "Milk",
        "Curd",
        "Nuts",
      ],

      exercise: [
        "Walking",
        "Yoga",
        "Light cardio",
      ],

      doctorAdvice: [
        "Consult your physician if symptoms are present.",
        "Repeat thyroid profile if advised.",
      ],

      questionsToAsk: [
        "Should I repeat my thyroid tests?",
        "Do I need thyroid medication?",
      ],
    },

    {
      id: 3,
      name: "LDL Cholesterol",
      status: "High",
      value: "168",
      unit: "mg/dL",
      range: "<100",

      explanation:
        "LDL cholesterol is often called 'bad cholesterol' because high levels can increase the risk of heart disease. Your LDL level is higher than recommended.",

      bodySystem: "Heart and blood vessels",

      whatItMeasures:
        "Measures the amount of low-density lipoprotein cholesterol in the blood.",

      meaning:
        "Persistently high LDL cholesterol increases cardiovascular risk.",

      reason: [
        "High saturated fat intake",
        "Lack of exercise",
        "Family history",
      ],

      symptoms: [
        "Usually no symptoms",
        "Long-term increased risk of heart disease",
      ],

      foods: [
        "Oats",
        "Beans",
        "Fruits",
        "Leafy vegetables",
      ],

      exercise: [
        "Brisk walking",
        "Cycling",
        "Swimming",
      ],

      doctorAdvice: [
        "Adopt a heart-healthy diet.",
        "Discuss cholesterol management with your doctor.",
      ],

      questionsToAsk: [
        "Should I repeat my lipid profile?",
        "Do I need cholesterol-lowering medication?",
      ],
    },

    {
      id: 4,
      name: "HbA1c",
      status: "Normal",
      value: "5.2",
      unit: "%",
      range: "4–5.6",

      explanation:
        "HbA1c measures your average blood sugar over the last 2–3 months. Based on your report, your HbA1c is within the normal range, suggesting healthy long-term blood glucose control.",

      bodySystem: "Blood sugar regulation",

      whatItMeasures:
        "Measures the percentage of glucose attached to hemoglobin.",

      meaning:
        "Your blood sugar control appears healthy.",

      reason: [],
      symptoms: [],
      foods: [],
      exercise: [],
      doctorAdvice: [],
      questionsToAsk: [],
    },

    {
      id: 5,
      name: "Hemoglobin",
      status: "Normal",
      value: "14.1",
      unit: "g/dL",
      range: "13–17",

      explanation:
        "Hemoglobin carries oxygen throughout your body. Based on your report, your hemoglobin level is within the normal range, which is a positive indicator of healthy oxygen transport.",

      bodySystem: "Blood",

      whatItMeasures:
        "Measures the amount of hemoglobin in red blood cells.",

      meaning:
        "Your oxygen-carrying capacity appears normal.",

      reason: [],
      symptoms: [],
      foods: [],
      exercise: [],
      doctorAdvice: [],
      questionsToAsk: [],
    },
  ],
};