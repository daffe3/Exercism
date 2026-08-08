export class Gigasecond {
  private readonly startDate: Date;

  constructor(startDate: Date) {
    this.startDate = startDate;
  }

  public date(): Date {
    const GIGASECOND_IN_MS = 10 ** 12;
    return new Date(this.startDate.getTime() + GIGASECOND_IN_MS);
  }
}