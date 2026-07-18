const keywords = [
  "hemoglobin",
  "cholesterol",
  "vitamin",
  "hdl",
  "ldl",
  "triglycerides",
  "glucose",
  "thyroid",
  "tsh",
  "hba1c",
  "platelet",
  "wbc",
  "rbc",
  "cbc",
];

export function isValidHealthReport(text = "") {
  const content = text.toLowerCase();

  return keywords.some((keyword) =>
    content.includes(keyword)
  );
}