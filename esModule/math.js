export const add = (a,b) =>{
    return a + b;
}
export const sub = (a,b) =>{
    return a - b;
}
export const mul = (a,b) =>{
    return a * b;
}
export const div = (a,b) =>{
    return a / b;
}
// module.exports = add;  not work
// module.exports = sub;

// method 1
// module.exports.add = add;  
// module.exports.sub = sub;

// method 2

// module.exports = {add, sub,mul, div};

// export default mul;