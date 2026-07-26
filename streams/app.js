import {createReadStream, createWriteStream} from "fs"
import path from "path"

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readableStram = createReadStream(inputFilePath, {
    encoding: "utf-8",
    highWaterMark: 16,
});

const writableStram = createWriteStream(outputFilePath);

readableStram.on("data", (chunk) => {
    console.log("Buffer (Chunk) :", Buffer.from(chunk));
    console.log("Received chunk :", chunk);
    writableStram.write(chunk)  
})

readableStram.on("end", () => {
    console.log("File read completed..");
    writableStram.end()
    
})

readableStram.on("error", (err) => console.error("Error: ", err));
writableStram.on("error", (err) => console.error("Error: ", err));