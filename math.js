const add = (a,b) =>{
    return a + b;
}
const sub = (a,b) =>{
    return a - b;
}
const mul = (a,b) =>{
    return a * b;
}
const div = (a,b) =>{
    return a / b;
}
// module.exports = add;  not work
// module.exports = sub;

// method 1
// module.exports.add = add;  
// module.exports.sub = sub;

// method 2

module.exports = {add, sub,mul, div};