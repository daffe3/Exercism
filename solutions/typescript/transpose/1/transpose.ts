export function transpose(input: string[]): string[] {
  if (input.length === 0) {
    return [];
  }

  const maxCols = Math.max(...input.map((row) => row.length));
  const result: string[] = [];

  for (let c = 0; c < maxCols; c++) {
    let rowChars = '';

    for (let r = 0; r < input.length; r++) {
      const hasLaterChars = input.slice(r + 1).some((row) => row.length > c);
      const char = input[r][c];

      if (char !== undefined) {
        rowChars += char;
      } else if (hasLaterChars) {
        rowChars += ' ';
      }
    }

    result.push(rowChars);
  }

  return result;
}