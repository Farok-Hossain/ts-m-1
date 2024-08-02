class BankAccout {
  id: number;
  name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  // getter
  get balanc(): number {
    return this.balance;
  }
  // setter
  set deposit(amount: number) {
    this.balance = this.balance + amount;
  }
  AccountBalance() {
    console.log(`My account balance is ${this.balance}`);
  }
}

const myAccount = new BankAccout(123, "Farok", 100);
// myAccount.balance = 10;
console.log(myAccount);

const b = myAccount.AccountBalance();
myAccount;
