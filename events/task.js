const EventEmitter = require("events");
const fs = require("fs");
const emiiter = new EventEmitter();

const eventCounts =JSON.parse(fs.readFileSync("count.json", "utf-8"));

emiiter.on("user-login", (username) => {
    const user = eventCounts["user-login"]++;
    console.log(`${username} logged in`);
    
})

emiiter.on("user-purchase", (username, item) => {
    const purches = eventCounts["user-purchase"]++;
    console.log(`${username} perchased ${item}`);
   
    
})

emiiter.on("profile-update", (username, field) => {
    const update = eventCounts["profile-update"]++;
    console.log(`${username} updated their ${field}`);
   
    
})

emiiter.on("user-logout", (username) => {
    const out = eventCounts["user-logout"]++;
    console.log(`${username} logged out!`);
  
    
})

emiiter.on("Summary", (out) => {
   console.log("\nEvent Counts:");
    console.log(eventCounts);

    // Save updated counts
    fs.writeFileSync(
        "count.json",
        JSON.stringify(eventCounts, null, 2)
    );
    
    
    
})




emiiter.emit("user-login","Yash");
emiiter.emit("user-purchase", "Yash", "Laptop");
emiiter.emit("profile-update", "Yash", "email");
emiiter.emit("user-logout", "Yash");
emiiter.emit("Summary");