//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  const sounds = { 3: 'Pling', 5: 'Plang', 7: 'Plong' };
  
  const result = Object.entries(sounds)
    .map(([divisor, sound]) => (number % divisor === 0 ? sound : ''))
    .join('');

  return result || number.toString();
};