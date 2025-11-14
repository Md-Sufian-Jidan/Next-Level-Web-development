// access  >> modify

class BankAccount {
    readonly userId: number;
    public userName: string;
    protected _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;

    };

    private addBalance(newBalance: number) {
        this._userBalance = this._userBalance + newBalance
    }

    callHiddenMethod(balance: number) {
        this.addBalance(balance);
    };

};


class StudentBankAccount extends BankAccount {
    test() {
        this._userBalance
    }
}


const mezbaBhaiAccount = new BankAccount(111, 'Mezba', 20);

// mezbaBhaiAccount.userId = 222; // Cannot assign to 'userId' because it is a read-only property.

// mezbaBhaiAccount.addBalance(100)
// mezbaBhaiAccount.addBalance(50)

console.log(mezbaBhaiAccount);

