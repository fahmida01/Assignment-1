class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds. Withdrawal denied.");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }
  
  // Create two instances of BankAccount
  const account1 = new BankAccount(1001, "John Doe", 1000);
  const account2 = new BankAccount(1002, "Jane Smith", 500);
  
  // Deposit, withdraw, and display account info for account1
  account1.deposit(500);
  account1.withdraw(200);
  account1.displayAccountInfo();
  
  console.log("\n");
  
  // Deposit, try to withdraw more than balance, and display account info for account2
  account2.deposit(200);
  account2.withdraw(1000); // This should show "Insufficient funds" message
  account2.displayAccountInfo();