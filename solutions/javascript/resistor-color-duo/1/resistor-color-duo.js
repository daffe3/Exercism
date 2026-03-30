//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const decodedValue = ([first, second]) => {
  const firstValue = COLORS.indexOf(first);
  const secondValue = COLORS.indexOf(second);

  return firstValue * 10 + secondValue;
};
