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
        // Generating a random 4-digit PIN number
        return Math.floor(Math.random() * 9000) + 1000;
    }

    depsoitSum(){
        if (this.transactions[0] !== undefined){
            let sum = 0;
            this.transactions.filter(function(element){
                return element.date
            })    
        }
    }

    deposit(amount) {
        debugger;
        if (this.transactions[0] !== undefined){
            let currDate = new Date().getTime();
            let lastDepositDate = this.transactions[0].date.getTime();
            let diffInDays = Math.round((currDate - lastDepositDate) / (1000 * 3600 * 24));
            if (diffInDays<1){
                console.log("")
            }
            console.log(Difference_In_Days);
        }
        if (Number(amount)>5000){      
            console.log("Maximum deposit is 5000");
            return;
        }else{
            this.balance += amount;
            BankAccount.totalMoney += amount;
            this.transactions.push({ type: "deposit", date: new Date(), amount: amount });
            return `Successfully deposited שח${amount} into account ${this.accountNumber}.`;
        }   
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
  
// function createNewAccount(){
//     const newUser = new BankAccount ("Sagiv","Levi","012345678");
//     // console.log(newUser);
//     // console.log(newUser.firstName);
    
// }

newUser = new BankAccount ("Sagiv","Levi","012345678");
newUser.deposit(2000);
newUser.deposit(1000);
debugger;
console.log(newUser);

// newUser.deposit(3000);



