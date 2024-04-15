class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds. Withdrawal denied.";
    } else {
      this.balance -= amount;
      return `Withdrawn $${amount}. New balance: $${this.balance}`;
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    return `Account Number: ${this.accountNumber}\nOwner Name: ${this.ownerName}\nBalance: $${this.balance}`;
  }
}

// Create two instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Marks Doe", 500);

// Demo operations
console.log("Account 1:");
console.log(account1.displayAccountInfo());
console.log(account1.deposit(400));
console.log(account1.withdraw(100));
console.log(account1.displayAccountInfo());

console.log("\n");

console.log("Account 2:");
console.log(account2.displayAccountInfo());
console.log(account2.deposit(300));
console.log(account2.withdraw(1000)); // This should show "Insufficient funds" message
console.log(account2.displayAccountInfo());
