//
// This is only a SKELETON file for the 'Parallel Letter Frequency' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const countLettersAsync = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const counts = {};

      for (const char of text.toLowerCase()) {
        if (/\p{L}/u.test(char)) {
          counts[char] = (counts[char] || 0) + 1;
        }
      }
      resolve(counts);
    }, 0);
  });
};

export const parallelLetterFrequency = async (texts) => {
  if (texts.length === 0) return {};

  const workerPromises = texts.map(text => countLettersAsync(text));

  const results = await Promise.all(workerPromises);

  const totalCounts = {};
  for (const partialCount of results) {
    for (const [char, count] of Object.entries(partialCount)) {
      totalCounts[char] = (totalCounts[char] || 0) + count;
    }
  }

  return totalCounts;
};