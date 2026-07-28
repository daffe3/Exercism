type StopwatchState = 'ready' | 'running' | 'stopped';

export class SplitSecondStopwatch {
  private _state: StopwatchState = 'ready';
  private currentLapSeconds: number = 0;
  private previousLapsSeconds: number[] = [];

  private formatTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const hh = hours.toString().padStart(2, '0');
    const mm = minutes.toString().padStart(2, '0');
    const ss = seconds.toString().padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
  }

  private parseTime(timeString: string): number {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  public get state(): StopwatchState {
    return this._state;
  }

  public get currentLap(): string {
    return this.formatTime(this.currentLapSeconds);
  }

  public get total(): string {
    const previousTotal = this.previousLapsSeconds.reduce((sum, s) => sum + s, 0);
    return this.formatTime(previousTotal + this.currentLapSeconds);
  }

  public get previousLaps(): string[] {
    return this.previousLapsSeconds.map((s) => this.formatTime(s));
  }

  public start(): void {
    if (this._state === 'running') {
      throw new Error('cannot start an already running stopwatch');
    }
    this._state = 'running';
  }

  public stop(): void {
    if (this._state !== 'running') {
      throw new Error('cannot stop a stopwatch that is not running');
    }
    this._state = 'stopped';
  }

  public lap(): void {
    if (this._state !== 'running') {
      throw new Error('cannot lap a stopwatch that is not running');
    }
    this.previousLapsSeconds.push(this.currentLapSeconds);
    this.currentLapSeconds = 0;
  }

  public reset(): void {
    if (this._state !== 'stopped') {
      throw new Error('cannot reset a stopwatch that is not stopped');
    }
    this._state = 'ready';
    this.currentLapSeconds = 0;
    this.previousLapsSeconds = [];
  }

  public advanceTime(duration: string): void {
    if (this._state === 'running') {
      this.currentLapSeconds += this.parseTime(duration);
    }
  }
}
