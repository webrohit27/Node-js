 const fs = require("fs");

 //Sync....
 fs.writeFileSync("./test.txt", "Hey There");
 
 //Async
 fs.writeFile("./test.txt", "Hello world Async", (err) => )