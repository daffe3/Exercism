export function commands(code: number): string[] {
  const result: string[] = [];

  if ((code & 1) !== 0) {
    result.push('wink');
  }
  if ((code & 2) !== 0) {
    result.push('double blink');
  }
  if ((code & 4) !== 0) {
    result.push('close your eyes');
  }
  if ((code & 8) !== 0) {
    result.push('jump');
  }
  if ((code & 16) !== 0) {
    result.reverse();
  }

  return result;
}