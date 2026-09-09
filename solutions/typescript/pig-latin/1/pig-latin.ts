function translateWord(word: string): string {
  if (/^([aeiou]|xr|yt)/.test(word)) {
    return `${word}ay`;
  }

  const quMatch = word.match(/^([^aeiou]*qu)(.*)/);
  if (quMatch) {
    return `${quMatch[2]}${quMatch[1]}ay`;
  }

  const yMatch = word.match(/^([^aeiou]+)(y.*)/);
  if (yMatch) {
    return `${yMatch[2]}${yMatch[1]}ay`;
  }

  const consonantMatch = word.match(/^([^aeiou]+)(.*)/);
  if (consonantMatch) {
    return `${consonantMatch[2]}${consonantMatch[1]}ay`;
  }

  return word;
}

export function translate(phrase: string): string {
  return phrase.split(' ').map(translateWord).join(' ');
}