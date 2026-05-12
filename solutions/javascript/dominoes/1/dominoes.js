//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
  if (dominoes.length === 0) return [];

  if (dominoes.length === 1) {
    return dominoes[0][0] === dominoes[0][1] ? dominoes : null;
  }

  const result = [];
  const used = new Array(dominoes.length).fill(false);

  const backtrack = (lastValue, currentChain) => {
    if (currentChain.length === dominoes.length) {
      if (currentChain[0][0] === lastValue) {
        return currentChain;
      }
      return null;
    }

    for (let i = 0; i < dominoes.length; i++) {
      if (used[i]) continue;

      const [a, b] = dominoes[i];

      if (a === lastValue) {
        used[i] = true;
        const found = backtrack(b, [...currentChain, [a, b]]);
        if (found) return found;
        used[i] = false;
      }

      if (b === lastValue && a !== b) {
        used[i] = true;
        const found = backtrack(a, [...currentChain, [b, a]]);
        if (found) return found;
        used[i] = false;
      }
    }

    return null;
  };

  const [firstA, firstB] = dominoes[0];
  used[0] = true;
  return backtrack(firstB, [[firstA, firstB]]);
};