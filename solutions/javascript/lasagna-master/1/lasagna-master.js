/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, avgTimePerLayer = 2) {
  return layers.length * avgTimePerLayer;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const layer of layers) {
    if (layer === 'noodles') {
      noodles += 50;
    } else if (layer === 'sauce') {
      sauce += 0.2;
    }
  }

  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList) {
  const secret = friendsList[friendsList.length - 1];
  myList.push(secret);
  // This function returns undefined by default (no return statement)
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  const factor = portions / 2;

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * factor;
  }

  return scaledRecipe;
}
