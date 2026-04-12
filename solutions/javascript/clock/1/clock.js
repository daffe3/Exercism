//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour = 0, minute = 0) {
    this.totalMinutes = this.normalize(hour * 60 + minute);
  }

  normalize(minutes) {
    const minutesInDay = 24 * 60;
    return ((minutes % minutesInDay) + minutesInDay) % minutesInDay;
  }

  toString() {
    const hours = Math.floor(this.totalMinutes / 60);
    const mins = this.totalMinutes % 60;

    const fHours = hours.toString().padStart(2, '0');
    const fMins = mins.toString().padStart(2, '0');
    
    return `${fHours}:${fMins}`;
  }

  plus(minutes) {
    this.totalMinutes = this.normalize(this.totalMinutes + minutes);
    return this;
  }

  minus(minutes) {
    this.totalMinutes = this.normalize(this.totalMinutes - minutes);
    return this;
  }

  equals(otherClock) {
    return this.totalMinutes === otherClock.totalMinutes;
  }
}