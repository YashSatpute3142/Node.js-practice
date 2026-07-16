const  fs = require("fs");
const path = require("path")

const fileName = "fsAsyncAwait.txt";
const filePath = path.join(__dirname, fileName);
const filePath1 = __dirname;

//

// const readFolder = async () => {
//     try {
//        const res = await fs.promises.readdir(filePath1);
//        console.log(res);
       
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// readFolder();

// write

// const writeFileExample = async() => {
//     try {
//        const res = await fs.promises.writeFile(filePath, "This is intial data", "utf-8")
//        console.log("file is created...");
       
//     } catch (error) {
//         console.log(error);
        
//     }

// }

// writeFileExample()

// // read

// const readFileExample = async() => {
//     try {
//        const res = await fs.promises.readFile(filePath, "utf-8")
//        console.log(res);
       
//     } catch (error) {
//         console.log(error);
        
//     }

// }

// readFileExample()

// // update

// const updateFileExample = async() => {
//     try {
//        const res = await fs.promises.appendFile(filePath, "\nThis is updated  data", "utf-8")
//        console.log("file is updated...");
       
//     } catch (error) {
//         console.log(error);
        
//     }

// }

// updateFileExample()

// delete 

const deleteFileExample = async() => {
    try {
       const res = await fs.promises.unlink(filePath)
       console.log("file is deleted...");
       
    } catch (error) {
        console.log(error);
        
    }

}

deleteFileExample()