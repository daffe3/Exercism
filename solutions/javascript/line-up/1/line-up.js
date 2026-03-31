//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, count) => {
  let suffix = 'th';

  if (count % 10 === 1 && count % 100 !== 11) {
    suffix = 'st';
  } else if (count % 10 === 2 && count % 100 !== 12) {
    suffix = 'nd';
  } else if (count % 10 === 3 && count % 100 !== 13) {
    suffix = 'rd';
  }

  return `${name}, you are the ${count}${suffix} customer we serve today. Thank you!`;
};