const NUMBERS: { [key: number]: string } = {
  0: 'no',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
};

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function bottleString(count: number): string {
  const word = NUMBERS[count];
  const bottleNoun = count === 1 ? 'bottle' : 'bottles';
  return `${word} green ${bottleNoun}`;
}

function generateVerse(count: number): string[] {
  const currentBottles = bottleString(count);
  const nextBottles = bottleString(count - 1);

  const line1 = `${capitalize(currentBottles)} hanging on the wall,`;
  const line2 = `${capitalize(currentBottles)} hanging on the wall,`;
  const line3 = 'And if one green bottle should accidentally fall,';
  const line4 = `There'll be ${nextBottles} hanging on the wall.`;

  return [line1, line2, line3, line4];
}

export const recite = (
  initialBottleCount: number,
  takeDownCount: number
): string[] => {
  const verses: string[] = [];

  for (let i = 0; i < takeDownCount; i++) {
    const currentCount = initialBottleCount - i;
    const verseLines = generateVerse(currentCount);

    if (i > 0) {
      verses.push(''); 
    }

    verses.push(...verseLines);
  }

  return verses;
};