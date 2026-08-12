export function transform(old: Record<string, string[]>): Record<string, number> {
  const result: Record<string, number> = {};

  for (const [scoreStr, letters] of Object.entries(old)) {
    const score = Number(scoreStr);

    for (const letter of letters) {
      result[letter.toLowerCase()] = score;
    }
  }

  return result;
}