//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dice, category) => {
  const counts = {};
  dice.forEach(d => counts[d] = (counts[d] || 0) + 1);
  
  const uniqueValues = Object.keys(counts).map(Number).sort((a, b) => a - b);
  const sum = dice.reduce((a, b) => a + b, 0);

  switch (category) {
    case 'ones': return (counts[1] || 0) * 1;
    case 'twos': return (counts[2] || 0) * 2;
    case 'threes': return (counts[3] || 0) * 3;
    case 'fours': return (counts[4] || 0) * 4;
    case 'fives': return (counts[5] || 0) * 5;
    case 'sixes': return (counts[6] || 0) * 6;

    case 'full house':
      const values = Object.values(counts);
      if (values.includes(3) && values.includes(2)) {
        return sum;
      }
      return 0;

    case 'four of a kind':
      for (let val in counts) {
        if (counts[val] >= 4) return Number(val) * 4;
      }
      return 0;

    case 'little straight':
      return uniqueValues.join('') === '12345' ? 30 : 0;

    case 'big straight':
      return uniqueValues.join('') === '23456' ? 30 : 0;

    case 'choice':
      return sum;

    case 'yacht':
      return Object.values(counts)[0] === 5 ? 50 : 0;

    default:
      return 0;
  }
};