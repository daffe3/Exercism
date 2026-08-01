interface StartPoint {
  x: number;
  y: number;
  angle: number;
}

interface Prism {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export function findSequence(start: unknown, prisms: unknown): number[] {
  const current = start as StartPoint;
  const prismList = prisms as Prism[];

  let currentX = current.x;
  let currentY = current.y;
  let currentAngle = current.angle;
  let currentPrismId: number | null = null;

  const sequence: number[] = [];

  const MAX_STEPS = 1000;
  let steps = 0;

  while (steps < MAX_STEPS) {
    steps++;

    const rad = (currentAngle * Math.PI) / 180;
    const dx = Math.cos(rad);
    const dy = Math.sin(rad);

    let nearestPrism: Prism | null = null;
    let minDistance = Infinity;

    for (const prism of prismList) {
      if (prism.id === currentPrismId) {
        continue;
      }

      const vx = prism.x - currentX;
      const vy = prism.y - currentY;

      const t = vx * dx + vy * dy;

      if (t <= 1e-4) {
        continue;
      }

      const perpDist = Math.abs(vx * dy - vy * dx);

      if (perpDist < 0.5) {
        if (t < minDistance) {
          minDistance = t;
          nearestPrism = prism;
        }
      }
    }

    if (!nearestPrism) {
      break;
    }

    sequence.push(nearestPrism.id);

    currentX = nearestPrism.x;
    currentY = nearestPrism.y;
    currentAngle += nearestPrism.angle;
    currentPrismId = nearestPrism.id;
  }

  return sequence;
}