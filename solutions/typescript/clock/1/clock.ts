const MINUTES_IN_DAY = 24 * 60; 

export class Clock {
  private totalMinutes: number;

  constructor(hour: number = 0, minute: number = 0) {
    const rawMinutes = Number(hour) * 60 + Number(minute);
    this.totalMinutes = this.normalizeMinutes(rawMinutes);
  }

  private normalizeMinutes(minutes: number): number {
    const remainder = minutes % MINUTES_IN_DAY;
    return remainder < 0 ? remainder + MINUTES_IN_DAY : remainder;
  }

  public toString(): string {
    const hours = Math.floor(this.totalMinutes / 60);
    const minutes = this.totalMinutes % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.totalMinutes + Number(minutes));
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.totalMinutes - Number(minutes));
  }

  public equals(other: unknown): boolean {
    if (!(other instanceof Clock)) {
      return false;
    }
    return this.totalMinutes === other.totalMinutes;
  }
}
