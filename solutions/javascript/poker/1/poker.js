//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CARD_VALUES = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
  'J': 11, 'Q': 12, 'K': 13, 'A': 14
};

const HAND_RANKS = {
  STRAIGHT_FLUSH: 8,
  FOUR_OF_A_KIND: 7,
  FULL_HOUSE: 6,
  FLUSH: 5,
  STRAIGHT: 4,
  THREE_OF_A_KIND: 3,
  TWO_PAIR: 2,
  ONE_PAIR: 1,
  HIGH_CARD: 0
};

const parseHand = (handStr) => {
  return handStr.split(' ').map(card => {
    const valueStr = card.slice(0, -1);
    const suit = card.slice(-1);
    return { value: CARD_VALUES[valueStr], suit };
  }).sort((a, b) => b.value - a.value); 
};

const evaluateHand = (handStr) => {
  const cards = parseHand(handStr);
  const values = cards.map(c => c.value);
  const suits = cards.map(c => c.suit);

  const counts = {};
  values.forEach(v => counts[v] = (counts[v] || 0) + 1);

  const countPairs = Object.entries(counts).map(([val, count]) => ({
    value: Number(val),
    count
  })).sort((a, b) => b.count - a.count || b.value - a.value);

  const distinctCounts = countPairs.map(cp => cp.count);
  const sortedUniqueValues = countPairs.map(cp => cp.value);

  const isFlush = suits.every(s => s === suits[0]);

  let isStraight = false;
  let straightValues = [...values];

  if (sortedUniqueValues.length === 5 && values[0] - values[4] === 4) {
    isStraight = true;
  } 

  else if (values.join(',') === '14,5,4,3,2') {
    isStraight = true;
    straightValues = [5, 4, 3, 2, 1]; 
  }

  if (isStraight && isFlush) {
    return [HAND_RANKS.STRAIGHT_FLUSH, straightValues[0]];
  }
  if (distinctCounts[0] === 4) {
    return [HAND_RANKS.FOUR_OF_A_KIND, ...sortedUniqueValues];
  }
  if (distinctCounts[0] === 3 && distinctCounts[1] === 2) {
    return [HAND_RANKS.FULL_HOUSE, ...sortedUniqueValues];
  }
  if (isFlush) {
    return [HAND_RANKS.FLUSH, ...values];
  }
  if (isStraight) {
    return [HAND_RANKS.STRAIGHT, straightValues[0]];
  }
  if (distinctCounts[0] === 3) {
    return [HAND_RANKS.THREE_OF_A_KIND, ...sortedUniqueValues];
  }
  if (distinctCounts[0] === 2 && distinctCounts[1] === 2) {
    return [HAND_RANKS.TWO_PAIR, ...sortedUniqueValues];
  }
  if (distinctCounts[0] === 2) {
    return [HAND_RANKS.ONE_PAIR, ...sortedUniqueValues];
  }
  
  return [HAND_RANKS.HIGH_CARD, ...values];
};

const compareScores = (scoreA, scoreB) => {
  for (let i = 0; i < Math.max(scoreA.length, scoreB.length); i++) {
    if ((scoreA[i] || 0) !== (scoreB[i] || 0)) {
      return (scoreB[i] || 0) - (scoreA[i] || 0);
    }
  }
  return 0;
};

export const bestHands = (hands) => {
  if (hands.length === 0) return [];
  
  const scoredHands = hands.map(hand => ({
    original: hand,
    score: evaluateHand(hand)
  }));

  scoredHands.sort((a, b) => compareScores(a.score, b.score));

  const bestScore = scoredHands[0].score;

  return scoredHands
    .filter(sh => compareScores(sh.score, bestScore) === 0)
    .map(sh => sh.original);
};