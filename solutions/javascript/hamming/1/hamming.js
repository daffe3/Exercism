//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const compute = (s1, s2) => {
  if (s1.length !== s2.length) throw new Error('strands must be of equal length');
  
  return [...s1].reduce((acc, char, i) => acc + (char !== s2[i] ? 1 : 0), 0);
};