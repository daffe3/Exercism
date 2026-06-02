//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (nestedArray) => {
  let result = [];

  for (const element of nestedArray) {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else if (element !== null && element !== undefined) {
      result.push(element);
    }
  }

  return result;
};