//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class House {
  static DATA = [
    { subject: 'the house that Jack built.' },
    { subject: 'the malt', verb: 'lay in' },
    { subject: 'the rat', verb: 'ate' },
    { subject: 'the cat', verb: 'killed' },
    { subject: 'the dog', verb: 'worried' },
    { subject: 'the cow with the crumpled horn', verb: 'tossed' },
    { subject: 'the maiden all forlorn', verb: 'milked' },
    { subject: 'the man all tattered and torn', verb: 'kissed' },
    { subject: 'the priest all shaven and shorn', verb: 'married' },
    { subject: 'the rooster that crowed in the morn', verb: 'woke' },
    { subject: 'the farmer sowing his corn', verb: 'kept' },
    { subject: 'the horse and the hound and the horn', verb: 'belonged to' }
  ];

static verse(number) {
    const parts = [];
    for (let i = number - 1; i >= 0; i--) {
      const { subject } = this.DATA[i];
      
      if (i === number - 1) {
        parts.push(`This is ${subject}`);
      } else {
        const previousVerb = this.DATA[i + 1].verb;
        parts.push(`that ${previousVerb} ${subject}`);
      }
    }
    return parts;
  }
  static verses(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(...this.verse(i));
      if (i < end) {
        result.push('');
      }
    }
    return result;
  }
}