const PATTERNS: { [key: string]: string } = {
  ' _ | ||_|   ': '0',
  '     |  |   ': '1',
  ' _  _||_    ': '2',
  ' _  _| _|   ': '3',
  '   |_|  |   ': '4',
  ' _ |_  _|   ': '5',
  ' _ |_ |_|   ': '6',
  ' _   |  |   ': '7',
  ' _ |_||_|   ': '8',
  ' _ |_| _|   ': '9',
};

export function convert(input: string | string[]): string {
  const rows = typeof input === 'string' ? input.split('\n') : input;

  if (rows.length === 0 || rows.length % 4 !== 0) {
    throw new Error('Invalid input');
  }

  if (rows.some((row) => row.length % 3 !== 0)) {
    throw new Error('Invalid input');
  }

  const convertedLines: string[] = [];

  for (let line = 0; line < rows.length; line += 4) {
    const digitCount = rows[line].length / 3;
    let lineResult = '';

    for (let d = 0; d < digitCount; d++) {
      const col = d * 3;

      const pattern =
        rows[line].slice(col, col + 3) +
        rows[line + 1].slice(col, col + 3) +
        rows[line + 2].slice(col, col + 3) +
        rows[line + 3].slice(col, col + 3);

      lineResult += PATTERNS[pattern] ?? '?';
    }

    convertedLines.push(lineResult);
  }

  return convertedLines.join(',');
}