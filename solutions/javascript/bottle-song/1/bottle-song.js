//
// This is only a SKELETON file for the 'Bottle Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUMBER_WORDS = [
  'no', 'one', 'two', 'three', 'four', 'five', 
  'six', 'seven', 'eight', 'nine', 'ten'
];

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const generateVerse = (count) => {
  const currentWord = NUMBER_WORDS[count];
  const nextWord = NUMBER_WORDS[count - 1];

  const currentBottleStr = count === 1 ? 'bottle' : 'bottles';
  const nextBottleStr = (count - 1) === 1 ? 'bottle' : 'bottles';

  return [
    `${capitalize(currentWord)} green ${currentBottleStr} hanging on the wall,`,
    `${capitalize(currentWord)} green ${currentBottleStr} hanging on the wall,`,
    `And if one green bottle should accidentally fall,`,
    `There'll be ${nextWord} green ${nextBottleStr} hanging on the wall.`
  ];
};

export const recite = (initialBottlesCount, takeDownCount) => {
  const verses = [];

  for (let i = 0; i < takeDownCount; i++) {
    const currentCount = initialBottlesCount - i;
   
    verses.push(...generateVerse(currentCount));

    if (i < takeDownCount - 1) {
      verses.push('');
    }
  }

  return verses;
};