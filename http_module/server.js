const http = require("http");


const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.setHeader("contact-type", "text/html")
        res.write(" <h1> hellooo yo ooo....................</h1>");
        res.end();
    }
    if(req.url === "/source-code"){
        res.write(
            "Source Code is a 2011 science fiction action thriller film[5] directed by Duncan Jones and written by Ben Ripley. It stars Jake Gyllenhaal as a US Army officer who is sent into an eight-minute virtual re-creation of a real-life train explosion, and tasked with determining the identity of the terrorist who bombed it. Michelle Monaghan, Vera Farmiga, and Jeffrey Wright play supporting roles."
        );
        res.end();
    }
    if(req.url === "/contact"){
        res.setHeader("contact-type", "text/plain")
        res.write(
            "A company's contact information included forms presented in an accessible way to encourage users to get in contact.."
        );
        res.end();
    }
});

//web serever


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    
})