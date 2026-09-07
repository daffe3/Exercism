interface Element {
  item: string;
  action: string;
}

const PARTS: Element[] = [
  { item: 'house that Jack built.', action: '' },
  { item: 'malt', action: 'lay in' },
  { item: 'rat', action: 'ate' },
  { item: 'cat', action: 'killed' },
  { item: 'dog', action: 'worried' },
  { item: 'cow with the crumpled horn', action: 'tossed' },
  { item: 'maiden all forlorn', action: 'milked' },
  { item: 'man all tattered and torn', action: 'kissed' },
  { item: 'priest all shaven and shorn', action: 'married' },
  { item: 'rooster that crowed in the morn', action: 'woke' },
  { item: 'farmer sowing his corn', action: 'kept' },
  { item: 'horse and the hound and the horn', action: 'belonged to' },
];

export function verse(verseNum: number): string[] {
  const index = verseNum - 1;
  const result: string[] = [];

  result.push(`This is the ${PARTS[index].item}`);

  for (let i = index; i > 0; i--) {
    result.push(`that ${PARTS[i].action} the ${PARTS[i - 1].item}`);
  }

  return result;
}

export function verses(start: number, end: number): string[] {
  const result: string[] = [];

  for (let i = start; i <= end; i++) {
    result.push(...verse(i));
    if (i < end) {
      result.push('');
    }
  }

  return result;
}