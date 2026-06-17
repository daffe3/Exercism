//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  return string.replace(/(.)\1+/g, (match, char) => {
    return match.length + char;
  });
};

export const decode = (string) => {
  return string.replace(/(\d+)(.)/g, (_, count, char) => {
    return char.repeat(Number(count));
  });
};