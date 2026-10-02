interface Input {
  maxFactor: number;
  minFactor?: number;
}

interface PalindromeResult {
  value: number | null;
  factors: [number, number][];
}

interface Result {
  smallest: PalindromeResult;
  largest: PalindromeResult;
}

function isPalindrome(num: number): boolean {
  const str = num.toString();
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

export function generate({ maxFactor, minFactor = 1 }: Input): Result {
  if (minFactor > maxFactor) {
    throw new Error('min must be <= max');
  }

  return {
    smallest: findSmallest(minFactor, maxFactor),
    largest: findLargest(minFactor, maxFactor),
  };
}

function findSmallest(minFactor: number, maxFactor: number): PalindromeResult {
  let smallestValue: number | null = null;
  const factorsMap = new Map<number, [number, number][]>();

  for (let i = minFactor; i <= maxFactor; i++) {
    if (smallestValue !== null && i * i > smallestValue) {
      break;
    }

    for (let j = i; j <= maxFactor; j++) {
      const product = i * j;

      if (smallestValue !== null && product > smallestValue) {
        break; 
      }

      if (isPalindrome(product)) {
        if (smallestValue === null || product < smallestValue) {
          smallestValue = product;
        }
        if (product === smallestValue) {
          const list = factorsMap.get(product) || [];
          list.push([i, j]);
          factorsMap.set(product, list);
        }
      }
    }
  }

  return {
    value: smallestValue,
    factors: smallestValue !== null ? factorsMap.get(smallestValue) || [] : [],
  };
}

function findLargest(minFactor: number, maxFactor: number): PalindromeResult {
  let largestValue: number | null = null;
  const factorsMap = new Map<number, [number, number][]>();

  for (let i = maxFactor; i >= minFactor; i--) {
    if (largestValue !== null && i * i < largestValue) {
      break;
    }

    for (let j = i; j >= minFactor; j--) {
      const product = i * j;

      if (largestValue !== null && product < largestValue) {
        break;
      }

      if (isPalindrome(product)) {
        if (largestValue === null || product > largestValue) {
          largestValue = product;
        }
        if (product === largestValue) {
          const list = factorsMap.get(product) || [];
          list.push([i, j]);
          factorsMap.set(product, list);
        }
      }
    }
  }

  const factors = largestValue !== null ? factorsMap.get(largestValue) || [] : [];
  factors.sort((a, b) => a[0] - b[0]);

  return {
    value: largestValue,
    factors,
  };
}