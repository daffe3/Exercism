//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (text) => {
  return text
    .split(' ')
    .map((word) => translateWord(word))
    .join(' ');
};

function translateWord(word) {
  if (/^([aeiou]|xr|yt)/.test(word)) {
    return word + 'ay';
  }

  const rule3Match = word.match(/^([^aeiou]*qu)(.*)/);
  if (rule3Match) {
    return rule3Match[2] + rule3Match[1] + 'ay';
  }

  const rule4Match = word.match(/^([^aeiou]+)(y.*)/);
  if (rule4Match) {
    return rule4Match[2] + rule4Match[1] + 'ay';
  }

  const rule2Match = word.match(/^([^aeiou]+)(.*)/);
  if (rule2Match) {
    return rule2Match[2] + rule2Match[1] + 'ay';
  }

  return word;
}