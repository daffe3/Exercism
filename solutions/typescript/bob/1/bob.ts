export function hey(message: unknown): string {
  const cleanMessage = String(message).trim();

  if (cleanMessage === '') {
    return 'Fine. Be that way!';
  }

  const hasLetters = /[a-zA-Z]/.test(cleanMessage);
  const isYelling = hasLetters && cleanMessage === cleanMessage.toUpperCase();

  const isQuestion = cleanMessage.endsWith('?');

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return 'Whoa, chill out!';
  }

  if (isQuestion) {
    return 'Sure.';
  }

  return 'Whatever.';
}