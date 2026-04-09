//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  const actions = [];

  if (number & 1) {
    actions.push('wink');
  }

  if (number & 2) {
    actions.push('double blink');
  }

  if (number & 4) {
    actions.push('close your eyes');
  }

  if (number & 8) {
    actions.push('jump');
  }

  if (number & 16) {
    actions.reverse();
  }

  return actions;
};