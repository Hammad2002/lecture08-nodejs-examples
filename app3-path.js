//import path module
const path = require('path');
//call parse method 
let myPathObject = path.parse(__filename);
//we get an object tha we can explore
console.log(myPathObject);