export type BucketName = 'one' | 'two';

export class TwoBucket {
  private bucketOneCap: number;
  private bucketTwoCap: number;
  private goal: number;
  private startBucket: BucketName;

  private totalMoves: number | null = null;
  private finalGoalBucket: BucketName | null = null;
  private finalOtherBucketAmount: number | null = null;

  constructor(
    bucketOneCap: number,
    bucketTwoCap: number,
    goal: number,
    startBucket: BucketName
  ) {
    this.bucketOneCap = bucketOneCap;
    this.bucketTwoCap = bucketTwoCap;
    this.goal = goal;
    this.startBucket = startBucket;

    this.solve();
  }

  public moves(): number {
    if (this.totalMoves === null) {
      throw new Error('Goal cannot be reached');
    }
    return this.totalMoves;
  }

  public get goalBucket(): BucketName {
    if (this.finalGoalBucket === null) {
      throw new Error('Goal cannot be reached');
    }
    return this.finalGoalBucket;
  }

  public get otherBucket(): number {
    if (this.finalOtherBucketAmount === null) {
      throw new Error('Goal cannot be reached');
    }
    return this.finalOtherBucketAmount;
  }

  private solve(): void {
    if (this.goal > this.bucketOneCap && this.goal > this.bucketTwoCap) {
      return;
    }

    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    if (this.goal % gcd(this.bucketOneCap, this.bucketTwoCap) !== 0) {
      return;
    }

    type State = [number, number];

    const isStartOne = this.startBucket === 'one';
    const startState: State = isStartOne ? [this.bucketOneCap, 0] : [0, this.bucketTwoCap];

    const forbiddenStateKey = isStartOne
      ? `0,${this.bucketTwoCap}`
      : `${this.bucketOneCap},0`;

    const queue: Array<[State, number]> = [[startState, 1]];
    const visited = new Set<string>([
      `${startState[0]},${startState[1]}`,
      forbiddenStateKey,
    ]);

    while (queue.length > 0) {
      const [[b1, b2], movesCount] = queue.shift()!;

      if (b1 === this.goal) {
        this.totalMoves = movesCount;
        this.finalGoalBucket = 'one';
        this.finalOtherBucketAmount = b2;
        return;
      }

      if (b2 === this.goal) {
        this.totalMoves = movesCount;
        this.finalGoalBucket = 'two';
        this.finalOtherBucketAmount = b1;
        return;
      }

      const nextStates: State[] = [
        [this.bucketOneCap, b2],
        [b1, this.bucketTwoCap],
        [0, b2],
        [b1, 0],
        [
          b1 - Math.min(b1, this.bucketTwoCap - b2),
          b2 + Math.min(b1, this.bucketTwoCap - b2),
        ],
        [
          b1 + Math.min(b2, this.bucketOneCap - b1),
          b2 - Math.min(b2, this.bucketOneCap - b1),
        ],
      ];

      for (const nextState of nextStates) {
        const key = `${nextState[0]},${nextState[1]}`;
        if (!visited.has(key)) {
          visited.add(key);
          queue.push([nextState, movesCount + 1]);
        }
      }
    }
  }
}