class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів на рахунку.");
    } else {
      this.balance -= amount;
      return `Знято ${amount} грн. ${this.checkBalance()}`;
    }
  }

  deposit(amount) {
    this.balance += amount;
    return `Поповнено на ${amount} грн. ${this.checkBalance()}`;
  }

  checkBalance() {
    return `Залишок на рахунку: ${this.balance} грн.`;
  }
}

const bankAccount = new BankAccount(100);
console.log("bankAccount: ", bankAccount);
console.log("bankAccount.withdraw(25): ", bankAccount.withdraw(25));
console.log("bankAccount.deposit(200): ", bankAccount.deposit(200));
console.log("bankAccount.checkBalance(): ", bankAccount.checkBalance());
