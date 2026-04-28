const fs = require("fs");

const content1 = "This is a content \n node js is awesome";

try {
    fs.writeFileSync("./output/test-sync.txt", content1);
    console.log("File written sync");
} catch (err) {
    console.error(err.message);
};

const content2 = "This is a content too \n asynchronous!!!";

// fs.writeFile("./output/test-async.txt", content2, (error) => {
//     if (error) {
//         console.error(error.message);
//     } else {
//         console.log("File written asynchronously");
//     };
// });