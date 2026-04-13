//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldData) => {
  const newData = {};

  for (const [score, letters] of Object.entries(oldData)) {
    letters.forEach(letter => {
      newData[letter.toLowerCase()] = Number(score);
    });
  }

  return newData;
};