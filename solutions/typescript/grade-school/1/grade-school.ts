type Roster = Record<number, string[]>;

export class GradeSchool {
  private schoolRoster: Map<number, string[]> = new Map();

  add(name: string, grade: number): boolean {
    let studentAlreadyExists = false;

    for (const [existingGrade, students] of this.schoolRoster.entries()) {
      const index = students.indexOf(name);
      if (index !== -1) {
        students.splice(index, 1);
        studentAlreadyExists = true;
      }
    }

    if (studentAlreadyExists) {
      return false;
    }

    const studentsInGrade = this.schoolRoster.get(grade) ?? [];

    studentsInGrade.push(name);
    studentsInGrade.sort();

    this.schoolRoster.set(grade, studentsInGrade);

    return true;
  }

  roster(): Roster {
    const result: Roster = {};

    const sortedGrades = Array.from(this.schoolRoster.keys()).sort((a, b) => a - b);

    for (const grade of sortedGrades) {
      const students = this.schoolRoster.get(grade) ?? [];
      if (students.length > 0) {
        result[grade] = [...students];
      }
    }

    return result;
  }

  grade(gradeNumber: number): string[] {
    const students = this.schoolRoster.get(gradeNumber) ?? [];
    return [...students];
  }
}