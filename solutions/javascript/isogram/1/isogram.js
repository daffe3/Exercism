//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (str) => {
  const cleaned = str.toLowerCase().replace(/[\s-]/g, '');

  const charSet = new Set(cleaned);

  return charSet.size === cleaned.length;
};