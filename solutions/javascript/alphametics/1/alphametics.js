//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const [leftSide, rightSide] = puzzle.split('==');
  const words = leftSide.split('+').map(w => w.trim());
  const resultWord = rightSide.trim();
  const allWords = [...words, resultWord];

  const uniqueLetters = [...new Set(allWords.join(''))];
  
  if (uniqueLetters.length > 10) return null;

  const leadingLetters = new Set(allWords.filter(w => w.length > 1).map(w => w[0]));

  const letterWeights = {};
  uniqueLetters.forEach(char => {
    letterWeights[char] = 0;
  });

  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      const char = word[word.length - 1 - i];
      letterWeights[char] += Math.pow(10, i);
    }
  }

  for (let i = 0; i < resultWord.length; i++) {
    const char = resultWord[resultWord.length - 1 - i];
    letterWeights[char] -= Math.pow(10, i);
  }

  const lettersArray = uniqueLetters.map(char => ({
    char,
    weight: letterWeights[char],
    canBeZero: !leadingLetters.has(char)
  }));

  const usedDigits = new Array(10).fill(false);
  const currentMapping = {};

  const backtrack = (index, currentSum) => {
    if (index === lettersArray.length) {
      return currentSum === 0 ? currentMapping : null;
    }

    const { char, weight, canBeZero } = lettersArray[index];

    for (let digit = 0; digit <= 9; digit++) {
      if (usedDigits[digit]) continue;
      if (digit === 0 && !canBeZero) continue; 
      
      usedDigits[digit] = true;
      currentMapping[char] = digit;

      const result = backtrack(index + 1, currentSum + weight * digit);
      if (result) return result;

      usedDigits[digit] = false;
      delete currentMapping[char];
    }

    return null;
  };

  return backtrack(0, 0);
};