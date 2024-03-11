class BankAccount {
    constructor(firstName, lastName, id) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.accountNumber = this.generateAccountNumber();
      this.balance = 0;
      this.transactions = []; // Array to store transactions
      BankAccount.totalUsers++;
    }
  
    generateAccountNumber() {
      // Generating a random 8-digit account number
      return Math.floor(Math.random() * 90000000) + 10000000;
    }
  
    deposit(amount) {
      this.balance += amount;
      BankAccount.totalMoney += amount;
      this.transactions.push({ type: "deposit", date: new Date(), amount: amount });
      return `Successfully deposited שח${amount} into account ${this.accountNumber}.`;
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        BankAccount.totalMoney -= amount;
        this.transactions.push({ type: "withdrawal", date: new Date(), amount: amount });
        return `Successfully withdrew שח${amount} from account ${this.accountNumber}.`;
      } else {
        return "Insufficient funds or invalid amount for withdrawal.";
      }
    }
  
    getBalance() {
      return `Account ${this.accountNumber} balance: שח${this.balance}`;
    }
  
    static totalUsers = 0;
    static totalMoney = 0;
  
    static getTotalUsers() {
      return `Total users: ${BankAccount.totalUsers}`;
    }
  
    static getTotalMoney() {
      return `Total money in the bank: שח${BankAccount.totalMoney}`;
    }
  }
  
  // Example usage:
  const user1 = new BankAccount("John", "Doe", 1);
  console.log(user1.getBalance()); // Account balance: שח0
  console.log(user1.deposit(100)); // Successfully depositedשח100 into account XXXXXXXX.
  console.log(user1.getBalance()); // Account balance: שח100
  console.log(user1.withdraw(50)); // Successfully withdrew שח50 from account XXXXXXXX.
  console.log(user1.getBalance()); // Account balance: שח50
  
  const user2 = new BankAccount("Alice", "Smith", 2);
  console.log(BankAccount.getTotalUsers()); // Total users: 2
  console.log(BankAccount.getTotalMoney()); // Total money in the bank: שח50
  
  console.log(user1.getBalance()); // Account balance: שח0
  console.log(user1.deposit(100)); // Successfully deposited שח100 into account XXXXXXXX.
  console.log(user1.getBalance()); // Account balance: שח100
  console.log(user1.withdraw(50));
  user2.deposit(1000);
  user2.withdraw(300);
  user1.getBalance();
  user2.getBalance();
  console.log(user2.getBalance());
  console.log(user1.transactions); // Print transactions for user1
  console.log(user2.transactions); // Print transactions for user2
  