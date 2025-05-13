export const sortByColumn = (data, key, order = "asc") => {
  return [...data].sort((a, b) => {
    let valA = a[key];
    let valB = b[key];

    // Handle dates
    if (typeof valA === "string" && Date.parse(valA)) {
      const dateA = new Date(valA);
      const dateB = new Date(valB);
      return order === "asc" ? dateA - dateB : dateB - dateA;
    }

    // Convert numbers with commas (e.g., "1,240.66") to actual numbers
    const numA =
      typeof valA === "string" ? parseFloat(valA.replace(/,/g, "")) : valA;
    const numB =
      typeof valB === "string" ? parseFloat(valB.replace(/,/g, "")) : valB;

    const isNumberA = !isNaN(numA);
    const isNumberB = !isNaN(numB);

    if (isNumberA && isNumberB) {
      return order === "asc" ? numA - numB : numB - numA;
    }

    // Handle plain strings
    if (typeof valA === "string" && typeof valB === "string") {
      return order === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return order === "asc" ? valA - valB : valB - valA;
  });
};
export const slugify = (text) => {
  return text
    .toString()
    .normalize("NFKD") // Normalize special characters (e.g., é → e)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Collapse multiple hyphens
};

export const generateCoupon = (length = 10, prefix = "") => {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Avoids O, 0, I, 1
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return prefix + result;
};
