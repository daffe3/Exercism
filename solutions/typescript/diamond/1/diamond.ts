export function makeDiamond(character: string): string {
  const targetIndex = character.charCodeAt(0) - 'A'.charCodeAt(0);
  const rows: string[] = [];

  for (let i = 0; i <= targetIndex; i++) {
    const currentChar = String.fromCharCode('A'.charCodeAt(0) + i);
    const outerPadding = ' '.repeat(targetIndex - i);

    if (i === 0) {
      rows.push(`${outerPadding}A${outerPadding}`);
    } else {
      const innerPadding = ' '.repeat(2 * i - 1);
      rows.push(`${outerPadding}${currentChar}${innerPadding}${currentChar}${outerPadding}`);
    }
  }

  const bottomHalf = [...rows].slice(0, -1).reverse();

  return [...rows, ...bottomHalf].join('\n') + '\n';
}