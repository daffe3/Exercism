export const findFewestCoins = (coins: number[], target: number): number[] => {
  if (target < 0) {
    throw new Error("target can't be negative");
  }

  if (target === 0) {
    return [];
  }

  const dp: (number[] | null)[] = new Array(target + 1).fill(null);
  dp[0] = [];

  for (let amount = 1; amount <= target; amount++) {
    for (const coin of coins) {
      if (amount >= coin && dp[amount - coin] !== null) {
        const candidate = [...dp[amount - coin]!, coin];
        if (dp[amount] === null || candidate.length < dp[amount]!.length) {
          dp[amount] = candidate;
        }
      }
    }
  }

  if (dp[target] === null) {
    throw new Error("can't make target with given coins");
  }

  return dp[target]!.sort((a, b) => a - b);
};