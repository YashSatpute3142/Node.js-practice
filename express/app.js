import express from "express";
import {PORT}  from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.use(express.urlencoded({extended:true}))  // {extended:true} handle nested object
// not used cause data go to url so security isssue
// app.get("/contact", (req,res) => {
//     console.log(req.query);
//     res.redirect("/");

// in this method add method = post to form and replace req.query to req.body
app.post("/contact", (req,res) => {
    console.log(req.body);
    res.redirect("/");
    
})

app.use((req,res) => {
    // return res.status(404).send("Page Not Found")
    return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views", "404.html"))
})

app.listen(PORT, () => {
    console.log(`Server is Runnong at port :${PORT} `);
    
})