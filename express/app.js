import express, { response } from "express";
import {PORT} from "./env.js";
import path from "path"

const app = express();

// const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const json = await responce.json();
// console.log(json);


const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath))
// const PORT = 3000;
// const PORT  = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//     // console.log(__dirname);
//      // console.log(__filename);
//     // console.log(import.meta.dirname);
//     // console.log(import.meta.filename);
//     // console.log(import.meta.url);
//     // const __filename = new URL(import.meta.url);
//     // console.log(__filename);

//     const homePagePath = path.join(import.meta.dirname, "public", "index.html");

//     res.sendFile(homePagePath);
    
// })

app.get("/product", (req,res) => {
    console.log(req.query);
    res.send(`<h1>User Search for Product ${req.query.search} with limit of ${req.query.limit}</h1>`);
    
})

app.get("/Profile/:username", (req, res) => {
    console.log(req.params);
    res.send(`<h1>MY Username is ${req.params.username}</h1>`);  
})
app.get("/Profile/:username/artical/:slug", (req, res) => {
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`<h1>Artical ${req.params.username} by ${formatedSlug}</h1>`);  
})

app.listen(PORT, () => {
    console.log(`Server is Runnong at port :${PORT} `);
    
})