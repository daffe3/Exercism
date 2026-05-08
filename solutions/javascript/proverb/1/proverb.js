//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...args) => {
  if (args.length === 0) return '';

  const result = [];
  let list = [...args];
  let qualifier = '';

  const lastItem = list[list.length - 1];
  if (typeof lastItem === 'object' && lastItem !== null) {
    qualifier = lastItem.qualifier + ' ';
    list.pop(); 
  }

  for (let i = 0; i < list.length - 1; i++) {
    result.push(`For want of a ${list[i]} the ${list[i + 1]} was lost.`);
  }

  result.push(`And all for the want of a ${qualifier}${list[0]}.`);

  return result.join('\n');
};