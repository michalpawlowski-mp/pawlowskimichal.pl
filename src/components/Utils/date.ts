export const calculateDuration = (start: Date, end: Date = new Date()) => {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearText = years > 0 ? `${years} ${years === 1 ? "rok" : "lata"}` : "";
  const monthText = months > 0 ? `${months} mies.` : "";

  if (yearText && monthText) return `${yearText} i ${monthText}`;
  return yearText || monthText || "0 mies.";
};
