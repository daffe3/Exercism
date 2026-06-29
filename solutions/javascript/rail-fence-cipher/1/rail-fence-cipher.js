//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getPattern = (rails, length) => {
  const pattern = [];
  let currentRail = 0;
  let direction = 1; 

  for (let i = 0; i < length; i++) {
    pattern.push(currentRail);
 
    if (currentRail === 0) {
      direction = 1;
    } else if (currentRail === rails - 1) {
      direction = -1;
    }
    
    currentRail += direction;
  }
  
  return pattern;
};

export const encode = (message, rails) => {
  if (rails <= 1) return message;

  const fence = Array.from({ length: rails }, () => []);
  const pattern = getPattern(rails, message.length);

  for (let i = 0; i < message.length; i++) {
    const rail = pattern[i];
    fence[rail].push(message[i]);
  }

  return fence.flat().join('');
};

export const decode = (ciphertext, rails) => {
  if (rails <= 1) return ciphertext;

  const pattern = getPattern(rails, ciphertext.length);
  
  const indexes = Array.from({ length: ciphertext.length }, (_, i) => i);

  indexes.sort((a, b) => pattern[a] - pattern[b]);

  const result = new Array(ciphertext.length);
  for (let i = 0; i < ciphertext.length; i++) {
    result[indexes[i]] = ciphertext[i];
  }

  return result.join('');
};