export function isIsogram(phrase: string): boolean {
  const cleanedLetters = phrase
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  return cleanedLetters.length === new Set(cleanedLetters).size;
}