//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const normalize = (word) => word.toLowerCase().split('').sort().join('');

  const lowerTarget = target.toLowerCase();
  const sortedTarget = normalize(lowerTarget);

  return candidates.filter((candidate) => {
    const lowerCandidate = candidate.toLowerCase();

    if (lowerCandidate === lowerTarget) {
      return false;
    }

    return normalize(lowerCandidate) === sortedTarget;
  });
};