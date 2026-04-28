// const { add } = require("./add");
// const { subs } = require("./subs");


// module.exports = { add, subs };


import { add } from "./add.mjs";
import biyog from "./subs.mjs"

// console.log(add(2, 4));
// console.log(biyog(10, 5));

export default { add, biyog };
