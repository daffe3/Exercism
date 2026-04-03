//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  const speech = message.trim();
  const isSilence = speech === '';
  const isQuestion = speech.endsWith('?');

  const hasLetters = /[a-z]/i.test(speech);
  const isShouting = hasLetters && speech === speech.toUpperCase();

  if (isSilence) {
    return "Fine. Be that way!";
  }

  if (isShouting && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isShouting) {
    return "Whoa, chill out!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  return "Whatever.";
};