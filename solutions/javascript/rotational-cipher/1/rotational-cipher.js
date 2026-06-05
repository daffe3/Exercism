//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, key) => {
  
  return text
    .split('')
    .map(char => {
      if (char >= 'A' && char <= 'Z') {
        const startCode = 65; 
        const currentCode = char.charCodeAt(0);
        const newCode = ((currentCode - startCode + key) % 26) + startCode;
        return String.fromCharCode(newCode);
      }

      if (char >= 'a' && char <= 'z') {
        const startCode = 97; 
        const currentCode = char.charCodeAt(0);
        const newCode = ((currentCode - startCode + key) % 26) + startCode;
        return String.fromCharCode(newCode);
      }

      return char;
    })
    .join('');
};