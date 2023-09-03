// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
let C = require("./test-module-1");
let calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// let calc2 = require("./test-module-2");
let { add, multiply } = require("./test-module-2");
console.log(multiply(2, 5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();