//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));

  let counter = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = counter++;
    }
    top++; 

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = counter++;
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = counter++;
      }
      bottom--; 
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = counter++;
      }
      left++; 
    }
  }

  return matrix;
};