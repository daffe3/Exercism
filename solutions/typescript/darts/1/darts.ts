export function score(x: unknown, y: unknown): number {
  const coordX = Number(x);
  const coordY = Number(y);

  const distance = Math.hypot(coordX, coordY);

  if (distance <= 1) {
    return 10;
  }
  if (distance <= 5) {
    return 5;
  }
  if (distance <= 10) {
    return 1;
  }

  return 0;
}