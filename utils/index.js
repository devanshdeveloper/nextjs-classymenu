export function getRandomId() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  return Array(10)
    .fill(null)
    .map(() => alphabets[Math.floor(Math.random() * alphabets.length)])
    .join("");
}

export function isBrower() {
  return typeof window !== "undefined";
}

export function downloadJSON(json) {
  const jsonString = JSON.stringify(json, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
