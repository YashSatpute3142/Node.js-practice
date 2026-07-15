// console.log("Hello World");

// const arr = [1,2,3,4,5,6]
// console.log(arr.map((num) => num * 5));
// globalThis.console.log(module)
// console.log();
// const add = require("./math");
// const sub = require("./math");
//both will give same  output of sub cause module.export is single object o value 
// console.log(add(5,10)); // give -5
// console.log(sub(5,10)); // give -5


const {add, sub, mul, div} =  require("./math");
console.log(add(5,10));
console.log(sub(5,10));
console.log(mul(5,10));;
console.log(div(5,10));
