// common js to esm
// const { a } = require("./file2");
// const { a: x } = require("./file3");

// const { add } = require("./utils/add");
// const { subs } = require("./utils/subs");
// console.log(a);
// console.log(x);
// const { add, subs } = require('./utils');

// console.log(add(a, x));
// console.log(subs(x, a));

import { a } from "./file_es2.mjs";
import { a as b } from "./file_es3.mjs";
import utils from "./utils_esm/index.mjs"

console.log(utils.add(2, 5));
console.log(utils.biyog(10, 5));
console.log(a, b);

// version  nn.mm.uu

