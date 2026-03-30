//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  
  const GIGASECOND_IN_MS = 1e12; 
  const startTime = date.getTime();
  
  return new Date(startTime + GIGASECOND_IN_MS);
};