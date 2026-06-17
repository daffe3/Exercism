//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((score - 10) / 2);
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  static rollAbility() {
    const rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
  
    rolls.sort((a, b) => a - b);

    return rolls[1] + rolls[2] + rolls[3];
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}