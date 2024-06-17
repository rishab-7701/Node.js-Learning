// We will do all the file handling related coding in this file named 'file.js'

const fs = require("fs");

// Synchrounous function
// fs.writeFileSync("./test.txt","Hey there my name is Rishab I am a software developer");

// Asynchronous function
// fs.writeFile("./test.txt","Hey there my name is Rishab I am a software developer",(err) => {});

// Reading a created file in Node.js

// readFileSync returns the result after reading the file from the desired file path
// const result = fs.readFileSync("./contacts.txt","utf-8"); 
// ("file path","file-encoding format")

// console.log(result);

// fs.readFile("./contacts.txt","utf-8",(err,result)=> {
//     if(err){
//         console.log("Error",err);
//     } else {
//         console.log(result);
//     }
// })

fs.appendFileSync("./test.txt", ` ${Date.now()}   Hey there\n`);

fs.cpSync("./test.txt","./copy.txt");
//cpSync is used to copy the contents of a file into a another file named by the user 

fs.unlinkSync("./copy.txt");
// unlinkSync is used to delete a particular file by passing the file path in the parameter

console.log(fs.statSync("./test.txt"));
//statSync gives the statistics of a particular file