//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (startVerse, endVerse) => {
  const days = [
    'first', 'second', 'third', 'fourth', 'fifth', 'sixth',
    'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'
  ];

  const gifts = [
    'a Partridge in a Pear Tree.',
    'two Turtle Doves, ',
    'three French Hens, ',
    'four Calling Birds, ',
    'five Gold Rings, ',
    'six Geese-a-Laying, ',
    'seven Swans-a-Swimming, ',
    'eight Maids-a-Milking, ',
    'nine Ladies Dancing, ',
    'ten Lords-a-Leaping, ',
    'eleven Pipers Piping, ',
    'twelve Drummers Drumming, '
  ];

  const getVerse = (num) => {
    const index = num - 1;
    let verse = `On the ${days[index]} day of Christmas my true love gave to me: `;
    
    for (let i = index; i >= 0; i--) {
      if (num === 1 || i > 0) {
        verse += gifts[i];
      } else {
        verse += 'and ' + gifts[i];
      }
    }
    return verse;
  };

  const result = [];
  const actualEnd = endVerse || startVerse;

  for (let i = startVerse; i <= actualEnd; i++) {
    result.push(getVerse(i));
  }

  return result.join('\n\n') + '\n';
};