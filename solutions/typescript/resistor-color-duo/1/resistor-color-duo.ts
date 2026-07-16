const COLORS: string[] = [
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

export function decodedValue(colors: string[]): number {
  const firstValue = COLORS.indexOf(colors[0].toLowerCase());
  const secondValue = COLORS.indexOf(colors[1].toLowerCase());

  return firstValue * 10 + secondValue;
}