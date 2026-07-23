export function isValidHealthReport(report) {
  const tests = report?.tests;

  if (!Array.isArray(tests) || tests.length < 2) {
    return false;
  }

  const knownBloodTests = [
    "hemoglobin",
    "haemoglobin",
    "wbc",
    "white blood cell",
    "rbc",
    "red blood cell",
    "platelet",
    "hematocrit",
    "haematocrit",
    "hct",
    "mcv",
    "mch",
    "mchc",
    "rdw",

    "glucose",
    "blood sugar",
    "hba1c",

    "cholesterol",
    "triglyceride",
    "hdl",
    "ldl",
    "vldl",

    "tsh",
    "t3",
    "t4",
    "thyroid",

    "vitamin d",
    "vitamin b12",

    "creatinine",
    "urea",
    "uric acid",

    "bilirubin",
    "albumin",
    "sgot",
    "sgpt",
    "ast",
    "alt",
    "alkaline phosphatase",

    "sodium",
    "potassium",
    "calcium",

    "iron",
    "ferritin",
  ];

  const matchedTests = tests.filter((test) => {
    const name = String(test?.name || "").toLowerCase();

    return knownBloodTests.some((knownTest) =>
      name.includes(knownTest)
    );
  });

  return matchedTests.length >= 2;
}