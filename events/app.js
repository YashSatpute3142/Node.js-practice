const EventEmitter = require("events");

// create an instance of EventEmitter
const emitter = new EventEmitter();

// 1. define emiiter default event  
emitter.on("greet", (arg) => {
    console.log(`....... ......Hiiiii.....  ....... my name is ${arg.name} and i am a ${arg.prof}......`);
    
})
//2 trigger the greet event

emitter.emit("greet", {name: "namste", prof: "Mern stack dev"});