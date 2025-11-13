// access  >> modify

class BankAccount {
    readonly userId: number;
    userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;

    };

    addBalance(newBalance: number) {
        this.userBalance = this.userBalance + newBalance
    }

};


class StudentBankAccount extends BankAccount {
    test(){
        this.userBalance
    }
}


const mezbaBhaiAccount = new BankAccount(111, 'Mezba', 20);

// mezbaBhaiAccount.userId = 222; // Cannot assign to 'userId' because it is a read-only property.

mezbaBhaiAccount.addBalance(100)
mezbaBhaiAccount.addBalance(50)

console.log(mezbaBhaiAccount);

