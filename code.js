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

    getDailyDepsoit(){
        if (this.transactions[0] !== undefined){
            dailyDeposit = this.transactions.filter(function(element){
                let currDate = new Date().getTime();
                let depositDate = element.date.getTime();
                let diffInDays = Math.round((currDate - depositDate) / (1000 * 3600 * 24));
                return (diffInDays<1 && element.type == "deposit");
            }).reduce((t, n)=> t.amount + n.amount);
            return dailyDeposit;
        }else{
            return 0;
        }   
    }

    getDailyWithdrawal(){
        if (this.transactions.forEach(transaction => {
            if (transaction.type == "withdrawal"){
                return true}
            })){
            dailyWithdrawal = this.transactions.filter(function(element){
                let currDate = new Date().getTime();
                let WithdrawDate = element.date.getTime();
                let diffInDays = Math.round((currDate - WithdrawDate) / (1000 * 3600 * 24));
                return (diffInDays<1 && element.type == "withdrawal");
            }).reduce((t, n)=> t.amount + n.amount);
            return dailyWithdrawal;
        }else{
            return 0;
        } 
    }

    deposit(amount) {
        // debugger;
        let dailyDepositAmount = this.getDailyDepsoit();
        if (amount>5000){      
            console.log("Maximum single deposit is 5000");
            return;
        }else if(dailyDepositAmount + amount > 5000){
            console.log(`Maximum daily deposit is 5000, you have already deposits ${dailyDepositAmount} today !!!`);
            return;
        }else{
            this.balance += amount;
            BankAccount.totalMoney += amount;
            this.transactions.push({ type: "deposit", date: new Date(), amount: amount });
            return `Successfully deposited שח${amount} into account ${this.accountNumber}.`;
        }   
    }

    withdraw(amount) {
        let dailyWithdrawAmount = this.getDailyWithdrawal();
        if (amount > 2000){
            console.log("Maximum single withdrawal is 2000");
            return;    
        }else if(dailyWithdrawAmount + amount > 2000){
            console.log(`Maximum daily withdrawal is 2000, you have already withdraw ${dailyWithdrawAmount} today !!!`);
            return;   
        }else if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            BankAccount.totalMoney -= amount;
            this.transactions.push({ type: "withdrawal", date: new Date(), amount: amount });
            return `Successfully withdrew שח${amount} from account ${this.accountNumber}.`;
        }else{
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

let dailyDeposit = 0;
let dailyWithdrawal = 0;
newUser = new BankAccount ("Sagiv","Levi","012345678");
newUser.deposit(2000);
newUser.deposit(1500);
newUser.deposit(2500);
debugger;
newUser.withdraw(1700);
newUser.withdraw(500);

console.log(newUser);

// newUser.deposit(3000);



