function parseNumber(value) {
  if (value == null) return null;

  const num = parseFloat(String(value).replace(/[^\d.-]/g, ""));

  return Number.isNaN(num) ? null : num;
}

export function calculateStatus(value, range) {
  const result = parseNumber(value);

  if (!range) return "Normal";

  const cleanRange = range.trim().toLowerCase();

  // ---------- Numeric ranges ----------
  const between = cleanRange.match(
    /(-?\d+(\.\d+)?)\s*[-–]\s*(-?\d+(\.\d+)?)/
  );

  if (between && result !== null) {
    const min = parseFloat(between[1]);
    const max = parseFloat(between[3]);

    if (result < min) return "Low";
    if (result > max) return "High";

    return "Normal";
  }

  // ---------- Less than ----------
  const lessThan = cleanRange.match(/^<\s*(-?\d+(\.\d+)?)/);

  if (lessThan && result !== null) {
    const limit = parseFloat(lessThan[1]);

    return result < limit ? "Normal" : "High";
  }

  // ---------- Greater than ----------
  const greaterThan = cleanRange.match(/^>\s*(-?\d+(\.\d+)?)/);

  if (greaterThan && result !== null) {
    const limit = parseFloat(greaterThan[1]);

    return result > limit ? "Normal" : "Low";
  }

  // ---------- Text comparisons ----------
  const normalize = (text) =>
    String(text).trim().toLowerCase();

  const val = normalize(value);

  if (
    cleanRange === "negative" ||
    cleanRange === "absent" ||
    cleanRange === "nil" ||
    cleanRange === "normal"
  ) {
    return val === cleanRange ? "Normal" : "Borderline";
  }

  return "Normal";
}