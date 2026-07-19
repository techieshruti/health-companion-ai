export function formatUnit(unit = "") {
  return unit
    .replace(/¼/g, "μ")
    .replace(/Â/g, "")
    .trim();
}