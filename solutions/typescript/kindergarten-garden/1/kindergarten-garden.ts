const DEFAULT_STUDENTS: Student[] = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
]

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
} as const

type Student = string
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES]
type Plants = Plant[]

export class Garden {
  private rows: string[];
  private sortedStudents: Student[];

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    this.rows = diagram.split('\n');
    this.sortedStudents = [...students].sort();
  }

  public plants(student: Student): Plants {
    const studentIndex = this.sortedStudents.indexOf(student);
    if (studentIndex === -1) {
      throw new Error(`Student ${student} not found`);
    }

    const plantIndices = [studentIndex * 2, studentIndex * 2 + 1];
    const studentPlants: Plant[] = [];

    for (const row of this.rows) {
      for (const idx of plantIndices) {
        const code = row[idx] as keyof typeof PLANT_CODES;
        if (PLANT_CODES[code]) {
          studentPlants.push(PLANT_CODES[code]);
        }
      }
    }

    return studentPlants;
  }
}