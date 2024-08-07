"use strict";
class BankAccout {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    // getter
    get balanc() {
        return this.balance;
    }
    // setter
    set deposit(amount) {
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
