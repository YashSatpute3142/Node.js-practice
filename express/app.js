import express from "express";
import {PORT} from "./env.js";
import path from "path"

const app = express();
const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath))
// const PORT = 3000;
// const PORT  = process.env.PORT || 3000;
app.get("/", (req, res) => {
    // console.log(__dirname);
     // console.log(__filename);
    // console.log(import.meta.dirname);
    // console.log(import.meta.filename);
    // console.log(import.meta.url);
    // const __filename = new URL(import.meta.url);
    // console.log(__filename);

    const homePagePath = path.join(import.meta.dirname, "public", "index.html");

    res.sendFile(homePagePath);
    
    
    
    
    
    
})

app.listen(PORT, () => {
    console.log(`Server is Runnong at port :${PORT} `);
    
})