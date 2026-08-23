export const square = (squareNumber: number): bigint => {
  if (squareNumber < 1 || squareNumber > 64 || !Number.isInteger(squareNumber)) {
    throw new Error('Square must be between 1 and 64');
  }

  return 1n << BigInt(squareNumber - 1);
};

export const total = (): bigint => {
  return (1n << 64n) - 1n;
};