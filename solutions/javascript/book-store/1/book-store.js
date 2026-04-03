//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BOOK_PRICE = 800; 

const DISCOUNTS = {
  1: 1.00,
  2: 0.95,
  3: 0.90,
  4: 0.80,
  5: 0.75,
};

export const cost = (books) => {
  if (books.length === 0) return 0;

  const counts = {};
  books.forEach(id => counts[id] = (counts[id] || 0) + 1);
  let quantities = Object.values(counts);

  const groups = [];
  while (quantities.some(q => q > 0)) {
    const groupSize = quantities.filter(q => q > 0).length;
    groups.push(groupSize);
    quantities = quantities.map(q => q - 1);
  }

  let countOf5 = groups.filter(g => g === 5).length;
  let countOf3 = groups.filter(g => g === 3).length;

  while (countOf5 > 0 && countOf3 > 0) {
    const idx5 = groups.indexOf(5);
    groups[idx5] = 4;
    const idx3 = groups.indexOf(3);
    groups[idx3] = 4;
    
    countOf5--;
    countOf3--;
  }

  return groups.reduce((total, size) => {
    return total + (size * BOOK_PRICE * DISCOUNTS[size]);
  }, 0);
};
