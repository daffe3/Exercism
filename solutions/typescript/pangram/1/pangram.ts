export function isPangram(sentence: string): boolean {
  const lowerSentence = sentence.toLowerCase();
  
  const lettersOnly = lowerSentence.replace(/[^a-z]/g, '');
  
  const uniqueLetters = new Set(lettersOnly);
  
  return uniqueLetters.size === 26;
}