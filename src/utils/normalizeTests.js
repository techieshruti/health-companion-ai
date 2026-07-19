export function normalizeTests(tests) {
  const aliases = {
    "vitamin d (25 - oh vitamin d)": "vitamin d",

    "potassium - serum": "potassium, serum",

    "serum potassium": "potassium, serum",

    "serum creatinine": "serum creatinine",

    "creatinine, serum": "serum creatinine",

    "serum calcium": "calcium total",

    "calcium total": "calcium total",

    "serum sodium": "sodium",

    "sodium, serum": "sodium",

    "serum chloride": "chloride",

    "chlorides, serum": "chloride",

    "thyroxine (t4, total)": "t4",

    "t4, total thyroxine": "t4",

    "tri-iodothyronine (t3, total)": "t3",

    "t3, total tri iodothyronine": "t3",

    "thyroid stimulating hormone (tsh)-ultrasensitive": "tsh",
  };

  const seen = new Map();

  for (const test of tests) {
    let key = test.name
      .trim()
      .toLowerCase();

    key = aliases[key] || key;

    if (!seen.has(key)) {
      seen.set(key, test);
    }
  }

  return [...seen.values()];
}