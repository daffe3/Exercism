//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColorTrio {
  static COLORS = [
    'black', 'brown', 'red', 'orange', 'yellow',
    'green', 'blue', 'violet', 'grey', 'white'
  ];

  constructor(colors) {
    this.colors = colors;
    const [c1, c2, c3] = colors;
    [c1, c2, c3].forEach(color => {
      if (!ResistorColorTrio.COLORS.includes(color)) {
        throw new Error('invalid color');
      }
    });
  }

  get label() {
    const val1 = ResistorColorTrio.COLORS.indexOf(this.colors[0]);
    const val2 = ResistorColorTrio.COLORS.indexOf(this.colors[1]);
    const multiplier = ResistorColorTrio.COLORS.indexOf(this.colors[2]);

    let value = (val1 * 10 + val2) * Math.pow(10, multiplier);
   
    const units = ['ohms', 'kiloohms', 'megaohms', 'gigaohms'];
    let unitIndex = 0;

    while (value >= 1000 && unitIndex < units.length - 1) {
      value /= 1000;
      unitIndex++;
    }

    return `Resistor value: ${value} ${units[unitIndex]}`;
  }
}