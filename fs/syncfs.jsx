const  fs = require("fs");
const path = require("path")

const fileName = "Test.txt";
const filePath = path.join(__dirname, fileName)

// const writeFile = fs.writeFileSync(
//     filePath,
//     "This it Test file intial data, updated",
//     'utf-8'
// );
// console.log(writeFile);


// //read file

// const readFile = fs.readFileSync(filePath, 'utf-8');
// //console.log(readFile.toString());
// console.log(readFile);

// // append file 

// const appendFile = fs.appendFileSync(
//     filePath,
//     "\n evvvvvvvvvvvvvvvvv this is good.....",
//     'utf-8'
// );

// console.log(readFile);

// delete file

// const fileDelete = fs.unlinkSync(filePath);
// console.log(fileDelete);

// rename
const newUpdatedFileName = "updateTest.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);

const reNameFile = fs.renameSync(filePath, newFilePath);
console.log(reNameFile);


