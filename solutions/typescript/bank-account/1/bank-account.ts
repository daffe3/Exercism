export class ValueError extends Error {
  constructor() {
    super('Bank account error');
    this.name = 'ValueError';
  }
}

export class BankAccount {
  private isOpen: boolean = false;
  private _balance: number = 0;

  public open(): void {
    if (this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = true;
    this._balance = 0;
  }

  public close(): void {
    if (!this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = false;
  }

  public get balance(): number {
    if (!this.isOpen) {
      throw new ValueError();
    }
    return this._balance;
  }

  public deposit(amount: number): void {
    if (!this.isOpen || amount <= 0) {
      throw new ValueError();
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (!this.isOpen || amount <= 0 || amount > this._balance) {
      throw new ValueError();
    }
    this._balance -= amount;
  }
}
