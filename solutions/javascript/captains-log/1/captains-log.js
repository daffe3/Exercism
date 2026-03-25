// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const min = 1000;
  const max = 10001; 
  const registryNumber = Math.floor(Math.random() * (max - min) + min);
  
  return `NCC-${registryNumber}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000 - 41000) + 41000;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const classes = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  
  const randomIndex = Math.floor(Math.random() * classes.length);
  return classes[randomIndex];
}
