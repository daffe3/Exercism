//
// This is only a SKELETON file for the 'Camicia' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

 
// @ts-check

export const simulateGame = (deckA, deckB) => {
  let p1 = [...deckA];
  let p2 = [...deckB];
  let pile = [];
  let totalCardsPlayed = 0;
  let tricks = 0;
  let history = new Set();

  const PAYMENTS = { 'J': 1, 'Q': 2, 'K': 3, 'A': 4 };

  const getGameState = (d1, d2, turn) => {
    const normalize = (d) => d.map(c => (isNaN(Number(c)) ? c : 'X')).join(',');
    return `${normalize(d1)}|${normalize(d2)}|${turn}`;
  };

  let activePlayer = p1;
  let opponent = p2;
  let activeName = 'A';
  let penaltyDue = 0;
  let lastPaymentPlayer = null;

  while (true) {
    if (pile.length === 0 && penaltyDue === 0) {
      const state = getGameState(p1, p2, activeName);
      if (history.has(state)) return { status: "loop", cards: totalCardsPlayed, tricks };
      history.add(state);
    }

    if (activePlayer.length === 0) {
      if (pile.length > 0) {
        opponent.push(...pile);
        tricks++;
      }
      break;
    }

    const card = activePlayer.shift();
    pile.push(card);
    totalCardsPlayed++;

    if (PAYMENTS[card]) {
      penaltyDue = PAYMENTS[card];
      lastPaymentPlayer = activePlayer;
      [activePlayer, opponent] = [opponent, activePlayer];
      activeName = (activePlayer === p1) ? 'A' : 'B';
    } else if (penaltyDue > 0) {
      penaltyDue--;
      
      if (penaltyDue === 0) {
        lastPaymentPlayer.push(...pile);
        pile = [];
        tricks++;

        if (p1.length === 0 || p2.length === 0) break;

        activePlayer = lastPaymentPlayer;
        opponent = (activePlayer === p1) ? p2 : p1;
        activeName = (activePlayer === p1) ? 'A' : 'B';
        lastPaymentPlayer = null;
      }

    } else {
      [activePlayer, opponent] = [opponent, activePlayer];
      activeName = (activePlayer === p1) ? 'A' : 'B';

      if (activePlayer.length === 0) {
        opponent.push(...pile);
        pile = [];
        tricks++;
        break;
      }
    }
  }

  return { status: "finished", cards: totalCardsPlayed, tricks };
};