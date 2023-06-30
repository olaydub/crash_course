const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core info
console.log(os.cpus());

// Free memory
console.log(os.freemem()/1024/1024);

// Total memory
console.log(os.totalmem()/1024/1024)

// Home dir
console.log(os.homedir());

// Uptime (days)
console.log(os.uptime()/3600/24);