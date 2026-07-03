//
// This is only a SKELETON file for the 'Prism' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findSequence = (start, prisms) => {
  if (!start || !prisms || prisms.length === 0) {
    return [];
  }

  let currentX = start.x;
  let currentY = start.y;
  let currentAngle = start.angle;
  
  const hitSequence = [];
  const visitedStates = new Set();

  while (true) {
    let normalizedAngle = currentAngle % 360;
    if (normalizedAngle < 0) normalizedAngle += 360;

    const rad = (normalizedAngle * Math.PI) / 180;
    const dx = Math.cos(rad);
    const dy = Math.sin(rad);

    let nextPrism = null;
    let minDistance = Infinity;

    for (const prism of prisms) {
      if (!prism || prism.x === undefined || prism.y === undefined) continue;

      const toPrismX = prism.x - currentX;
      const toPrismY = prism.y - currentY;

      const t = toPrismX * dx + toPrismY * dy;

      if (t > 1e-5) {

        const deviation = Math.abs(dx * toPrismY - dy * toPrismX);

        if (deviation < 0.005) {
          if (t < minDistance) {
            minDistance = t;
            nextPrism = prism;
          }
        }
      }
    }

    if (!nextPrism) {
      break;
    }

    const stateKey = `${nextPrism.id}-${normalizedAngle.toFixed(2)}`;
    if (visitedStates.has(stateKey)) {
      break; 
    }
    visitedStates.add(stateKey);

    hitSequence.push(nextPrism.id);

    currentX = nextPrism.x;
    currentY = nextPrism.y;

    currentAngle += nextPrism.angle;
  }

  return hitSequence;
};