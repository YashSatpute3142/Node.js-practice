const  fs = require("fs");
const path = require("path")

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName)

// write
//  fs.writeFile(filePath, "This is the intial Data", 'utf-8',
//     (err) => {
//         if (err)  console.log(err);
//         else console.log("File has been Saved");
//     });

// //read

//  fs.readFile(filePath, 'utf-8',
//     (err, data) => {
//         if (err)  console.log(err);
//         else console.log(data);
//     });

// // update

//  fs.appendFile(filePath, "\nArrrrrrrrr bharich......", 'utf-8',
//     (err) => {
//         if (err)  console.log(err);
//         else console.log("File has been update");
//     });

// delete

//  fs.unlink(filePath,
//     (err) => {
//         if (err)  console.log(err);
//         else console.log("File has been deleted");
//     });