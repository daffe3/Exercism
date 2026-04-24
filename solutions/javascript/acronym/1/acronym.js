//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  const cleanPhrase = phrase.replace(/'/g, '');
  const words = cleanPhrase.split(/[^a-zA-Z]+/);

  return words
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase())
    .join('');
};