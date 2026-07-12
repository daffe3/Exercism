//
// This is only a SKELETON file for the 'Killer Sudoku Helper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const combinations = (cage) => {
  const { sum, size, exclude = [] } = cage;
  const result = [];

  const backtrack = (startDigit, currentCombination, currentSum) => {
    if (currentCombination.length === size) {
      if (currentSum === sum) {
        result.push([...currentCombination]);
      }
      return;
    }

    if (currentSum > sum) return;

    for (let digit = startDigit; digit <= 9; digit++) {
      if (exclude.includes(digit)) continue;

      currentCombination.push(digit);
      backtrack(digit + 1, currentCombination, currentSum + digit);

      currentCombination.pop();
    }
  };

  backtrack(1, [], 0);

  return result;
};