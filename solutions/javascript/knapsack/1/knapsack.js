//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maximumWeight, items) => {
  const dp = new Array(maximumWeight + 1).fill(0);

  for (const item of items) {
    const { weight, value } = item;

    for (let w = maximumWeight; w >= weight; w--) {
      dp[w] = Math.max(dp[w], dp[w - weight] + value);
    }
  }

  return dp[maximumWeight];
};