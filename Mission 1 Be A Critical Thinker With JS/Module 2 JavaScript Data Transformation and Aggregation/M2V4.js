// Some

// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber);

// const currentUserRoles = ["user", "editor"];

// const featuredAccessRoles = ["admin", "manager"];

// const canAccess = currentUserRoles.some((role) => featuredAccessRoles.includes(role));

// console.log(canAccess);

// Array.from()

// const arr = Array.from({ length: 5 }).fill("");
// const arr = Array.from([1, 2, 3], (value, i) => value * value);

// console.log(arr);

const range = (start, stop, step) => Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);

console.log(range(1, 11, 2));