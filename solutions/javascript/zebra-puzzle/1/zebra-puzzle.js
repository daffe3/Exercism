//
// This is only a SKELETON file for the 'Zebra Puzzle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ZebraPuzzle {
  constructor() {
    this.solve();
  }

  waterDrinker() {
    return this._waterDrinker;
  }

  zebraOwner() {
    return this._zebraOwner;
  }

  solve() {
    const nationalities = ['Englishman', 'Spaniard', 'Ukrainian', 'Norwegian', 'Japanese'];
    const colors = ['Red', 'Green', 'Ivory', 'Yellow', 'Blue'];
    const pets = ['Dog', 'Snail', 'Fox', 'Horse', 'Zebra'];
    const drinks = ['Coffee', 'Tea', 'Milk', 'Orange Juice', 'Water'];
    const hobbies = ['Dancing', 'Painting', 'Reading', 'Football', 'Chess'];

    const permute = (arr) => {
      if (arr.length === 0) return [[]];
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPerms = permute(remaining);
        for (const perm of remainingPerms) {
          result.push([current, ...perm]);
        }
      }
      return result;
    };

    const allPermutations = permute([0, 1, 2, 3, 4]);

    const filteredNationalities = allPermutations.filter(p => p[0] === nationalities.indexOf('Norwegian'));

    const filteredColors = allPermutations.filter(p => {
      if (p[1] !== colors.indexOf('Blue')) return false;
      const greenIdx = p.indexOf(colors.indexOf('Green'));
      const ivoryIdx = p.indexOf(colors.indexOf('Ivory'));
      return greenIdx === ivoryIdx + 1;
    });

    const natColorCombos = [];
    for (const nat of filteredNationalities) {
      for (const col of filteredColors) {
        if (col[nat.indexOf(nationalities.indexOf('Englishman'))] === colors.indexOf('Red')) {
          natColorCombos.push({ nat, col });
        }
      }
    }

    const filteredDrinks = allPermutations.filter(p => p[2] === drinks.indexOf('Milk'));

    const natColorDrinkCombos = [];
    for (const combo of natColorCombos) {
      for (const drk of filteredDrinks) {
        if (drk[combo.col.indexOf(colors.indexOf('Green'))] !== drinks.indexOf('Coffee')) continue;
        if (drk[combo.nat.indexOf(nationalities.indexOf('Ukrainian'))] !== drinks.indexOf('Tea')) continue;
        natColorDrinkCombos.push({ ...combo, drk });
      }
    }

    const natColorDrinkHobbyCombos = [];
    for (const combo of natColorDrinkCombos) {
      for (const hob of allPermutations) {
        if (hob[combo.col.indexOf(colors.indexOf('Yellow'))] !== hobbies.indexOf('Painting')) continue;
        if (drkIdx(combo.drk, drinks.indexOf('Orange Juice')) !== hob.indexOf(hobbies.indexOf('Football'))) continue;
        if (hob[combo.nat.indexOf(nationalities.indexOf('Japanese'))] !== hobbies.indexOf('Chess')) continue;
        natColorDrinkHobbyCombos.push({ ...combo, hob });
      }
    }

    // Helper för att hitta index
    function drkIdx(arr, val) { return arr.indexOf(val); }

    for (const combo of natColorDrinkHobbyCombos) {
      for (const pet of allPermutations) {
        if (pet[combo.nat.indexOf(nationalities.indexOf('Spaniard'))] !== pets.indexOf('Dog')) continue;
        if (pet[combo.hob.indexOf(hobbies.indexOf('Dancing'))] !== pets.indexOf('Snail')) continue;

        const readingIdx = combo.hob.indexOf(hobbies.indexOf('Reading'));
        const foxIdx = pet.indexOf(pets.indexOf('Fox'));
        if (Math.abs(readingIdx - foxIdx) !== 1) continue;

        const painterIdx = combo.hob.indexOf(hobbies.indexOf('Painting'));
        const horseIdx = pet.indexOf(pets.indexOf('Horse'));
        if (Math.abs(painterIdx - horseIdx) !== 1) continue;

        const waterIdx = combo.drk.indexOf(drinks.indexOf('Water'));
        const zebraIdx = pet.indexOf(pets.indexOf('Zebra'));

        this._waterDrinker = nationalities[combo.nat[waterIdx]];
        this._zebraOwner = nationalities[combo.nat[zebraIdx]];
        return;
      }
    }
  }
}