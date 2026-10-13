export function flatten(input: any[]): any[] {
  let result: any[] = [];

  for (const item of input) {
    if (item === null || item === undefined) {
      continue;
    }

    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}