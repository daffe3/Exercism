export function count(diagram: string[]): number {
  if (diagram.length === 0) {
    return 0;
  }

  const rows = diagram.length;
  const cols = diagram[0].length;
  let rectangleCount = 0;

  for (let r1 = 0; r1 < rows; r1++) {
    for (let c1 = 0; c1 < cols; c1++) {
      if (diagram[r1][c1] !== '+') continue;

      for (let r2 = r1 + 1; r2 < rows; r2++) {
        for (let c2 = c1 + 1; c2 < cols; c2++) {
          if (diagram[r2][c2] !== '+') continue;

          if (
            diagram[r1][c2] === '+' &&
            diagram[r2][c1] === '+' &&
            isValidHorizontal(diagram, r1, c1, c2) &&
            isValidHorizontal(diagram, r2, c1, c2) &&
            isValidVertical(diagram, c1, r1, r2) &&
            isValidVertical(diagram, c2, r1, r2)
          ) {
            rectangleCount++;
          }
        }
      }
    }
  }

  return rectangleCount;
}

function isValidHorizontal(
  diagram: string[],
  row: number,
  c1: number,
  c2: number
): boolean {
  for (let c = c1 + 1; c < c2; c++) {
    const char = diagram[row][c];
    if (char !== '-' && char !== '+') {
      return false;
    }
  }
  return true;
}

function isValidVertical(
  diagram: string[],
  col: number,
  r1: number,
  r2: number
): boolean {
  for (let r = r1 + 1; r < r2; r++) {
    const char = diagram[r][col];
    if (char !== '|' && char !== '+') {
      return false;
    }
  }
  return true;
}