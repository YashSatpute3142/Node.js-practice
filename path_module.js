const path = require("path")

console.log(__filename);
console.log(__dirname);

const filePath =  path.join("Folder", "Students", "data.txt");
console.log(filePath);

const parseData = path.parse(filePath);
const resovedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const baseNAme  = path.basename(filePath);
const dirName = path.dirname(filePath)

console.log({parseData,resovedPath,extname,baseNAme,dirName});
