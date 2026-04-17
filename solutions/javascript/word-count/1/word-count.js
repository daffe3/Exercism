//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (subtitle) => {
  const counts = {};

  const wordRegex = /\b[a-z0-9]+(?:'[a-z]+)?\b/g;

  const words = subtitle.toLowerCase().match(wordRegex);

  for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }

  return counts;
};