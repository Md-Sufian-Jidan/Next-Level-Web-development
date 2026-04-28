const { a } = require("./file2");
const { a: x } = require("./file3");
// const { add } = require("./utils/add");
// const { subs } = require("./utils/subs");
// console.log(a);
// console.log(x);
const { add, subs } = require('./utils');

console.log(add(a, x));
console.log(subs(x, a));
