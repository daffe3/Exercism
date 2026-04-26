//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  const stack = [];
  const bracketMap = {
    ']': '[',
    '}': '{',
    ')': '(',
  };

  for (const char of str) {
    if (['[', '{', '('].includes(char)) {
      stack.push(char);
    } 
    else if (bracketMap[char]) {
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};