//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    if (target < 0) {
      throw new Error('Negative totals are not allowed.');
    }
    if (target === 0) {
      return [];
    }

    const minCoins = new Array(target + 1).fill(null);
    minCoins[0] = [];

    for (let currentAmount = 1; currentAmount <= target; currentAmount++) {
      let bestCombination = null;

      for (const coin of coinArray) {
        if (coin <= currentAmount) {
          const remainder = currentAmount - coin;
          const remainderCombination = minCoins[remainder];

          if (remainderCombination !== null) {
            const currentCombination = [...remainderCombination, coin];

            if (bestCombination === null || currentCombination.length < bestCombination.length) {
              bestCombination = currentCombination;
            }
          }
        }
      }

      minCoins[currentAmount] = bestCombination;
    }

    if (minCoins[target] === null) {
      throw new Error(`The total ${target} cannot be represented in the given currency.`);
    }

    return minCoins[target].sort((a, b) => a - b);
  }
}