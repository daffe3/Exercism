export interface Solution {
  [key: string]: number;
}

export function solve(puzzle: string): Solution | undefined {
  const parts = puzzle.split('==');
  if (parts.length !== 2) return undefined;

  const leftWords = parts[0].split('+').map((w) => w.trim());
  const rightWord = parts[1].trim();

  const allWords = [...leftWords, rightWord];

  const letters = Array.from(new Set(allWords.join('')));
  if (letters.length > 10) return undefined; 

  const nonZeroLetters = new Set<string>();
  for (const word of allWords) {
    if (word.length > 1) {
      nonZeroLetters.add(word[0]);
    }
  }

  const letterWeights = new Map<string, number>();
  for (const letter of letters) {
    letterWeights.set(letter, 0);
  }

  for (const word of leftWords) {
    for (let i = 0; i < word.length; i++) {
      const letter = word[word.length - 1 - i];
      const weight = Math.pow(10, i);
      letterWeights.set(letter, (letterWeights.get(letter) || 0) + weight);
    }
  }

  for (let i = 0; i < rightWord.length; i++) {
    const letter = rightWord[rightWord.length - 1 - i];
    const weight = Math.pow(10, i);
    letterWeights.set(letter, (letterWeights.get(letter) || 0) - weight);
  }

  const letterArray = Array.from(letterWeights.keys());
  const weights = letterArray.map((l) => letterWeights.get(l)!);
  const isNonZero = letterArray.map((l) => nonZeroLetters.has(l));

  const usedDigits = new Array(10).fill(false);
  const currentMapping = new Array(letterArray.length).fill(0);

  function backtrack(index: number, currentSum: number): Solution | undefined {
    if (index === letterArray.length) {
      if (currentSum === 0) {
        const solution: Solution = {};
        for (let i = 0; i < letterArray.length; i++) {
          solution[letterArray[i]] = currentMapping[i];
        }
        return solution;
      }
      return undefined;
    }

    for (let digit = 0; digit <= 9; digit++) {
      if (usedDigits[digit]) continue;
      if (digit === 0 && isNonZero[index]) continue;

      usedDigits[digit] = true;
      currentMapping[index] = digit;

      const nextSum = currentSum + weights[index] * digit;
      const result = backtrack(index + 1, nextSum);
      if (result) return result;

      usedDigits[digit] = false;
    }

    return undefined;
  }

  return backtrack(0, 0);
}