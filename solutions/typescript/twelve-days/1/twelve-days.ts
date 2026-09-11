const DAYS = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
];

const GIFTS = [
  'a Partridge in a Pear Tree.',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight Maids-a-Milking',
  'nine Ladies Dancing',
  'ten Lords-a-Leaping',
  'eleven Pipers Piping',
  'twelve Drummers Drumming',
];

export function recite(startVerse: number, endVerse?: number): string {
  const end = endVerse ?? startVerse;
  let result = '';

  for (let i = startVerse - 1; i < end; i++) {
    result += `${buildVerse(i)}\n`;
  }

  return result;
}

function buildVerse(dayIndex: number): string {
  const prefix = `On the ${DAYS[dayIndex]} day of Christmas my true love gave to me: `;

  if (dayIndex === 0) {
    return prefix + GIFTS[0];
  }

  const giftList: string[] = [];
  for (let i = dayIndex; i > 0; i--) {
    giftList.push(GIFTS[i]);
  }

  return `${prefix}${giftList.join(', ')}, and ${GIFTS[0]}`;
}