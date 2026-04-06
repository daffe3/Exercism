//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*Based on the test file you just shared, your implementation needs to be slightly different from a standard "Roster" object.

The test Expected: [] and Received: {} reveals the core issue: In this specific version of the exercise, roster() isn't supposed to return an object of grades; it's supposed to return a flat, sorted array of all student names in the school.

The Fix
Here is the updated logic to match your specific test suite:

add must return true if successful and false if the student already exists anywhere.

roster must return a flat Array of names, sorted by grade level first, then alphabetically.

grade must return a sorted Array of names for that specific grade.

JavaScript*/
// @ts-check

export class GradeSchool {
  constructor() {
    this._db = {}; 
    this._allStudents = new Set();
  }

  roster() {
    const result = [];
    const sortedGrades = Object.keys(this._db).sort((a, b) => Number(a) - Number(b));

    for (const grade of sortedGrades) {
      result.push(...this._db[grade]);
    }
    return result;
  }

  add(name, grade) {
    if (this._allStudents.has(name)) {
      return false;
    }

    if (!this._db[grade]) {
      this._db[grade] = [];
    }

    this._db[grade].push(name);
    this._db[grade].sort(); 
    this._allStudents.add(name);
    return true;
  }

  grade(gradeNumber) {
    return this._db[gradeNumber] ? [...this._db[gradeNumber]] : [];
  }
}