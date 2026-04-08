//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OPERATORS = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'multiplied by': (a, b) => a * b,
  'divided by': (a, b) => a / b,
};

export const answer = (question) => {
  if (!question.startsWith('What is')) throw new Error('Unknown operation');

  const tokens = question
    .replace(/^What is/, '')
    .replace(/\?$/, '')
    .replace(/multiplied by/g, 'plus') 
    .replace(/divided by/g, 'plus')  
    .trim()
    .split(/\s+/);

  if (tokens[0] === '') throw new Error('Syntax error');

  const actualTokens = question
    .replace(/^What is/, '')
    .replace(/\?$/, '')
    .replace(/multiplied by/g, 'multiplied')
    .replace(/divided by/g, 'divided')
    .trim()
    .split(/\s+/);

  let result = null;
  let currentOp = null;

  for (const token of actualTokens) {
    const number = parseInt(token, 10);
    const isNum = !isNaN(number);

    if (isNum) {
      if (result === null) {
        result = number;
      } else if (currentOp) {
        result = OPERATORS[currentOp](result, number);
        currentOp = null;
      } else {
        throw new Error('Syntax error');
      }
    } else if (['plus', 'minus', 'multiplied', 'divided'].includes(token)) {
      if (result === null || currentOp) {
        throw new Error('Syntax error');
      }
      currentOp = token === 'multiplied' ? 'multiplied by' : 
                  token === 'divided' ? 'divided by' : token;
    } else {
      throw new Error('Unknown operation');
    }
  }

  if (result === null) throw new Error('Syntax error');
  if (currentOp) throw new Error('Syntax error');

  return result;
};