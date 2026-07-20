import express from "express";

const app = express();
// const PORT = 3000;
const PORT  = process.env.PORT || 3000;



app.get("/", (req, res) => res.send("<h1>Hello World.....!</h1>"));
app.get("/about", (req, res) => res.send("<h1>this is about page.....!</h1>"));

app.get("/contact", (req, res) => {
   return res.send (`<div class="container">
        <h1>URL Shortener</h1>
        <form id="shorten-form">
            <div>
                <label for="url">Enter URL:</label>
                <input 
                type="url" 
                name="url"
                id="yrl" 
                required
                >
            </div>
            <div>
                <label for="shortCode">Enter shortCode:</label>
                <input type="text" name="shortCode" id="shortCode" required>

            </div>
            <button type="submit">Shorten</button>

        </form>

        <h2>Shortenend URLs</h2>
        <div class="urls">
            <ul id="shortened-urls">

        </ul>
        </div>
        
    </div>`)
});


app.listen(PORT, () => {
    console.log(`Server is Runnong at port :${PORT} `);
    
})