export const answer = (question: string): number => {
  if (!question.startsWith('What is')) {
    throw new Error('Unknown operation');
  }

  if (!question.endsWith('?')) {
    throw new Error('Syntax error');
  }

  let text = question.slice(7, -1).trim();

  if (text.length === 0) {
    throw new Error('Syntax error');
  }

  text = text.replace(/multiplied by/g, 'multiplied');
  text = text.replace(/divided by/g, 'divided');

  const tokens = text.split(/\s+/);

  let result = Number(tokens[0]);
  if (isNaN(result)) {
    throw new Error('Syntax error');
  }

  let i = 1;

  while (i < tokens.length) {
    const op = tokens[i];

    if (!isNaN(Number(op))) {
      throw new Error('Syntax error');
    }

    const isKnownOp = ['plus', 'minus', 'multiplied', 'divided'].includes(op);
    if (!isKnownOp) {
      throw new Error('Unknown operation');
    }

    if (i + 1 >= tokens.length) {
      throw new Error('Syntax error');
    }

    const nextNum = Number(tokens[i + 1]);

    if (isNaN(nextNum)) {
      throw new Error('Syntax error');
    }

    switch (op) {
      case 'plus':
        result += nextNum;
        break;
      case 'minus':
        result -= nextNum;
        break;
      case 'multiplied':
        result *= nextNum;
        break;
      case 'divided':
        result /= nextNum;
        break;
    }

    i += 2;
  }

  return result;
};