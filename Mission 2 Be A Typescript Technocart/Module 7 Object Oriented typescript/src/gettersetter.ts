// getter 
// setter

class BankAccount {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;

    };

    // // balance k set krtese
    // addBalance(newBalance: number) {
    //     return this._userBalance = this._userBalance + newBalance
    // };

    // setter use kre korte chai

    set addBalance(amount: number) {
        this._userBalance = this._userBalance + amount;
    }

    // get krbo

    // getBalance(){
    //     return this._userBalance;
    // }

    // getter use kore get korte chai
    get getBalance() {
        return this._userBalance;
    }

};


const mezbaBhaiAccount = new BankAccount(111, 'Mezba', 20);


// mezbaBhaiAccount.addBalance(100);  // function call krte hsse
// mezbaBhaiAccount.addBalance(60);

// console.log(mezbaBhaiAccount.getBalance()); // function call krte hsee

mezbaBhaiAccount.addBalance = 100;
mezbaBhaiAccount.addBalance = 60;

console.log(mezbaBhaiAccount);;