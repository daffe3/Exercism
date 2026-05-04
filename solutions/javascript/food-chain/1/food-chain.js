//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  constructor() {
    this.animals = [
      { name: 'fly' },
      { name: 'spider', reaction: 'It wriggled and jiggled and tickled inside her.', extra: ' that wriggled and jiggled and tickled inside her' },
      { name: 'bird', reaction: 'How absurd to swallow a bird!' },
      { name: 'cat', reaction: 'Imagine that, to swallow a cat!' },
      { name: 'dog', reaction: 'What a hog, to swallow a dog!' },
      { name: 'goat', reaction: 'Just opened her throat and swallowed a goat!' },
      { name: 'cow', reaction: "I don't know how she swallowed a cow!" },
      { name: 'horse', reaction: "She's dead, of course!" }
    ];
  }

  verse(number) {
    const index = number - 1;
    const animal = this.animals[index];
    let res = `I know an old lady who swallowed a ${animal.name}.\n`;

    if (animal.reaction) {
      res += `${animal.reaction}\n`;
    }

    if (animal.name === 'fly' || animal.name === 'horse') {
      if (animal.name === 'fly') {
        res += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
      }
      return res;
    }

    for (let i = index; i > 0; i--) {
      const current = this.animals[i];
      const next = this.animals[i - 1];
      res += `She swallowed the ${current.name} to catch the ${next.name}${next.extra || ''}.\n`;
    }

    res += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
    return res;
  }

  verses(from, to) {
    let res = '';
    for (let i = from; i <= to; i++) {
      res += this.verse(i) + '\n';
    }
    return res;
  }
}