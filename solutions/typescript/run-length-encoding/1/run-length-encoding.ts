export function encode(input: string): string {
  return input.replace(/(.)\1+/g, (match, char) => `${match.length}${char}`);
}

export function decode(input: string): string {
  return input.replace(/(\d+)?(.)/g, (_, count, char) =>
    char.repeat(count ? parseInt(count, 10) : 1)
  );
}