class BankAccount {
    constructor(firstName, lastName, id) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountNumber = this.generateAccountNumber();
    this.pinNumber = this.generatePinNumber();
    this.balance = 0;
    this.transactions = []; // Array to store transactions
    BankAccount.totalUsers++;
    }

    generateAccountNumber() {
    // Generating a random 8-digit account number
    return Math.floor(Math.random() * 90000000) + 10000000;
    }

    generatePinNumber() {
        // Generating a random 8-digit account number
        return Math.floor(Math.random() * 9000) + 1000;
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
  
function createNewAccount(){
    const newUser1 = new BankAccount ("Shimon","Aflalo","876543210");
    const newUser = new BankAccount ("Sagiv","Levi","012345678");
    console.log(newUser1);
    // console.log(newUser.firstName);
    // userDB.account.id = newUser.id;
    // userDB.account.firstName = newUser.firstName;
    // userDB.account.lastName = newUser.lastName;
    // userDB.account.accountNumber = newUser.accountNumber
    // userDB.account.pinNumber = newUser.pinNumber;
    // console.log( userDB.account.firstName);
}

let userDB = {
    account: {
        id: "",
        firstName: "",
        lastName: "",
        accountNumber: "",
        pinNumber: "",
        balance: 0,
        transactions:[{
            
        }]
    },
}

createNewAccount();
// BankAccount.deposit(3000);
console.log(BankAccount);

