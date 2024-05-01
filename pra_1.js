let os = require('os');
let filesystem = require('fs');
console.log(os.userInfo());
console.log(os.cpus());

filesystem.appendFile('vicky.txt' , "\n my name is vivek Dhamecha" , ()=>{console.log("file is created");});
filesystem.rename('vicky.txt' , 'vivek.txt' , ()=>{});// rename the file
console.log(os);