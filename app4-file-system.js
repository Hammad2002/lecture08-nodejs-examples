//load file system module
const fs = require('fs');
//using synchronous blocking function (to be avoided)
//get file nodes in current directory
const files = fs.readdirSync('./');
console.log(files);

//use asynchronous functions 
fs.readdir('./', function(error, listFiles) {
    if (error) console.log(error);
    console.log(listFiles);
});