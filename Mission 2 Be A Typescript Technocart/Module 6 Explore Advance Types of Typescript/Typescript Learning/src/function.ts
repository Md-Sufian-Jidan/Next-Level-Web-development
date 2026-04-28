// Function
// arrow function , normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
};

console.log(addNormal(2, 3));

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
};

addArrow(2, 2);

// Object => function => method

const poorUser = {
    name: 'mezba',
    balance: 0,
    addBalance(value: number) {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
};

poorUser.addBalance(100000);
console.log(poorUser.balance);

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sqrArray = arr.map((num: number) => num * num);

console.log(sqrArray);