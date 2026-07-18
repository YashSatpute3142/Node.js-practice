const fs = require("fs");
//synchronus task  blocking task
console.log("start1");

const data = fs.readFileSync('file.txt', 'utf-8');
console.log("Sync:", data);
console.log("start2");

//Asynchronus task dont block the other task


console.log("Start3");
fs.readFile('file.txt', 'utf-8', (err, data) =>{
    if(err) throw err;
    console.log(data);
    
})

console.log("Start4");
