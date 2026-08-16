export interface GameResult {
  status: 'finished' | 'loop';
  cards: number;
  tricks: number;
}

type Card = string;

function parseDeck(input: unknown): Card[] {
  if (Array.isArray(input)) {
    return input.map((item) => String(item).trim().toUpperCase());
  }
  if (typeof input === 'string') {
    return input.trim().split(/[\s,]+/).filter(Boolean).map((c) => c.toUpperCase());
  }
  return [];
}

function getPenalty(card: Card): number {
  switch (card) {
    case 'J': return 1;
    case 'Q': return 2;
    case 'K': return 3;
    case 'A': return 4;
    default: return 0;
  }
}

function isPaymentCard(card: Card): boolean {
  return getPenalty(card) > 0;
}

function normalizeDeck(deck: Card[]): string {
  return deck.map((card) => (isPaymentCard(card) ? card : 'N')).join('');
}

export const simulateGame = (playerA: unknown, playerB: unknown): GameResult => {
  const deckA: Card[] = parseDeck(playerA);
  const deckB: Card[] = parseDeck(playerB);

  let totalCardsPlayed = 0;
  let tricksCount = 0;
  let activePlayer = 0; 

  const historySet = new Set<string>();

  while (true) {
    if (deckA.length === 0 || deckB.length === 0) {
      return {
        status: 'finished',
        cards: totalCardsPlayed,
        tricks: tricksCount,
      };
    }

    const stateKey = `${activePlayer}|${normalizeDeck(deckA)}|${normalizeDeck(deckB)}`;
    if (historySet.has(stateKey)) {
      return {
        status: 'loop',
        cards: totalCardsPlayed,
        tricks: tricksCount,
      };
    }
    historySet.add(stateKey);

    const pile: Card[] = [];
    let penaltyAmount = 0;
    let lastPaymentPlayer: number | null = null;

    while (true) {
      const currentDeck = activePlayer === 0 ? deckA : deckB;

      if (currentDeck.length === 0) {
        const winner = 1 - activePlayer;
        const winnerDeck = winner === 0 ? deckA : deckB;
        winnerDeck.push(...pile);
        tricksCount++;
        activePlayer = winner;
        break;
      }

      const card = currentDeck.shift()!;
      totalCardsPlayed++;
      pile.push(card);

      if (isPaymentCard(card)) {
        lastPaymentPlayer = activePlayer;
        penaltyAmount = getPenalty(card);
        activePlayer = 1 - activePlayer; 
      } else {
        if (penaltyAmount > 0) {
          penaltyAmount--;
          if (penaltyAmount === 0) {
            const winner = lastPaymentPlayer!;
            const winnerDeck = winner === 0 ? deckA : deckB;
            winnerDeck.push(...pile);
            tricksCount++;
            activePlayer = winner;
            break;
          }
        } else {
          activePlayer = 1 - activePlayer; 
        }
      }
    }
  }
};