export function isPaired(input: string): boolean {
  const stack: string[] = [];
  const bracketMap: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of input) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } 

    else if (char === ')' || char === ']' || char === '}') {
      const last = stack.pop();

      if (last !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}