interface Animal {
  name: string;
  comment?: string;
}

const ANIMALS: Animal[] = [
  { name: 'fly' },
  {
    name: 'spider',
    comment: 'It wriggled and jiggled and tickled inside her.',
  },
  {
    name: 'bird',
    comment: 'How absurd to swallow a bird!',
  },
  {
    name: 'cat',
    comment: 'Imagine that, to swallow a cat!',
  },
  {
    name: 'dog',
    comment: 'What a hog, to swallow a dog!',
  },
  {
    name: 'goat',
    comment: 'Just opened her throat and swallowed a goat!',
  },
  {
    name: 'cow',
    comment: "I don't know how she swallowed a cow!",
  },
  {
    name: 'horse',
    comment: "She's dead, of course!",
  },
];

export function verse(verseNum: number): string {
  const index = verseNum - 1;
  const currentAnimal = ANIMALS[index];

  let lines: string[] = [];

  lines.push(`I know an old lady who swallowed a ${currentAnimal.name}.`);

  if (currentAnimal.comment) {
    lines.push(currentAnimal.comment);
  }

  if (currentAnimal.name === 'horse') {
    return lines.join('\n') + '\n';
  }

  for (let i = index; i > 0; i--) {
    const predator = ANIMALS[i];
    const prey = ANIMALS[i - 1];

    let line = `She swallowed the ${predator.name} to catch the ${prey.name}`;

    if (prey.name === 'spider') {
      line += ' that wriggled and jiggled and tickled inside her.';
    } else {
      line += '.';
    }

    lines.push(line);
  }

  lines.push("I don't know why she swallowed the fly. Perhaps she'll die.");

  return lines.join('\n') + '\n';
}

export function verses(start: number, end: number): string {
  const result: string[] = [];

  for (let i = start; i <= end; i++) {
    result.push(verse(i));
  }

  return result.join('\n');
}