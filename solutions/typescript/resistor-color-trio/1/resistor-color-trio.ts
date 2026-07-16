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

export function decodedResistorValue(colors: string[]): string {
  const firstValue = COLORS.indexOf(colors[0].toLowerCase());
  const secondValue = COLORS.indexOf(colors[1].toLowerCase());
  const zeros = COLORS.indexOf(colors[2].toLowerCase());

  let totalOhms = (firstValue * 10 + secondValue) * Math.pow(10, zeros);

  let unit = 'ohms';

  if (totalOhms >= 1_000_000_000) {
    totalOhms /= 1_000_000_000;
    unit = 'gigaohms';
  } else if (totalOhms >= 1_000_000) {
    totalOhms /= 1_000_000;
    unit = 'megaohms';
  } else if (totalOhms >= 1_000) {
    totalOhms /= 1_000;
    unit = 'kiloohms';
  }

  return `${totalOhms} ${unit}`;
}