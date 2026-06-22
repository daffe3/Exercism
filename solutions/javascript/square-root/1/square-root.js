//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Beräknar kvadratroten ur ett perfekt heltal utan Math-bibliotek.
 * @param {number} number
 * @returns {number}
 */
export const squareRoot = (number) => {
  if (number === 0 || number === 1) {
    return number;
  }

  let guess = number >> 1; 
  let lastGuess;

  while (guess !== lastGuess) {
    lastGuess = guess;
    guess = Math.trunc((guess + number / guess) / 2);
  }

  return guess;
};