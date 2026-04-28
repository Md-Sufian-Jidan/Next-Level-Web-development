const os = require("os");

console.log("System info \n");
console.log(".".repeat(50));

console.log("Platform Details");
console.log("Platform: ", os.platform);
console.log("Architecture: ", os.arch());
console.log("Os type: ", os.type());
console.log("Os Release: ", os.release());
console.log("Hostname: ", os.hostname());

console.log("\nCpu Info : ");
const cpus = os.cpus();
console.log("CPU Model : ", cpus[0].model);
console.log("Number of cores : ", cpus.length);
console.log("CPU Speed : ", cpus[0].speed);

console.log(".".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log("Total Memory : ", (totalMem / 1824 / 1024 / 1024).toFixed(2), "GB");
console.log("Free Memory : ", (freeMem / 1824 / 1024 / 1024).toFixed(2));

console.log(".".repeat(50));

const uptime = os.uptime();

const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % hours) / 60)

console.log(`${days} days ${hours} hours ${minutes} minutes`);