export function ofSize(size: number): number[][] {
  const matrix: number[][] = Array.from({ length: size }, () =>
    Array(size).fill(0)
  );

  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let currentNum = 1;

  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) {
      matrix[top][col] = currentNum++;
    }
    top++;

    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = currentNum++;
    }
    right--;

    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = currentNum++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = currentNum++;
      }
      left++;
    }
  }

  return matrix;
}