//  spread operator

const numbers = [1, 2, 3, 4, 5, 6, 7, 8.9];

const newNumbers = [11, 12];

// numbers.push(newNumbers);
// console.log(numbers);  // output: [1, 2, 3, 4, 5, 6, 7, 8.9, [11, 12]]

// numbers.push(...newNumbers);
// console.log(numbers); // output: [1, 2, 3, 4, 5, 6, 7, 8.9, 11, 12 ]

// Rest operator

const addMathNumbers = (...numbers: number[]) => {
    return numbers.map((num) => console.log(num));
};

// const jidan = addMathNumbers(90);
// const jida = addMathNumbers(80);
// const jid = addMathNumbers(70);