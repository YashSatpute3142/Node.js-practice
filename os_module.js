const os = require("os");
//1. get the osplatform and user info
console.log("Platform:", os.platform() );
console.log("user:", os.userInfo());

// get theos cpu architecture
console.log("CPU Architecture:", os.arch());

//3. get free sys memory
console.log("Free Memory:", os.freemem());

//4 total memory
console.log("Total Memory:", os.totalmem());

//5 sys uptime
console.log("sys uptime:", os.uptime());
//6 home dir
console.log("Home dir:", os.homedir());
//7 get host name 
console.log("host Name:", os.hostname());
//8 network interface
console.log("Network interface:", os.networkInterfaces());

// CPU info
console.log("CPU info:", os.cpus());
// 10 temp dir
console.log("temp dir:", os.tmpdir());









