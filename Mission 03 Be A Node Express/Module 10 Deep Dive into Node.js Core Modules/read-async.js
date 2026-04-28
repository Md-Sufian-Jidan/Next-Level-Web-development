const fs= require("fs");

console.log("Start reading...");;

fs.readFile("./data/dairy.txt", "utf-8", (error, data) => {
    if(error) {
        console.error("Error happened :", error.message);
    }
    console.log("File content :");
    console.log(data);
});

console.log("This runs immediately - no blocking");