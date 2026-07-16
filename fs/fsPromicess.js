const  fs = require("fs");
const path = require("path")

const fileName = "fsPromicess.txt";
const filePath = path.join(__dirname, fileName);

const file = __dirname


// fs.promises
// .readdir(file)
// .then((data) => console.log(data)) // give all file present file in dir
// .catch((err) => console.log(err));

// // write

// fs.promises.writeFile(filePath, "THis is intial Data", 'utf-8')
// .then(console.log("file is created.."))
// .catch((err) => console.log(err))

// // read

// fs.promises.readFile(filePath, 'utf-8')
// .then((data) => console.log(data))
// .catch((err) => console.log("Error Reading File: ",err));

// // update , append

// fs.promises.appendFile(filePath, "\nTHis is new  Data.......", 'utf-8')
// .then(console.log("file is updated.."))
// .catch((err) => console.log(err))

// delete

fs.promises.unlink(filePath)
.then(console.log("file is deleted...."))
.catch((err) => console.log(err))



