import realine from "readline";
import fs from "fs";

const rl = realine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = () => {
    rl.question("Enter file Name: ", (fileName) => {
        rl.question("Enter the Content for your file: ", (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if (err){
                    console.log(`Error during writing the file: ${err.message}`);
                    
                }else{
                    console.log(`File ${fileName}.txt created successfully..!`);
                    
                }
                rl.close()

            })

        })
    })
}

fileCreation()
