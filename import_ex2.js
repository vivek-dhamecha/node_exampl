var firstfile = require('./import_ex');


const age = firstfile.age;
console.log(age);
console.log(firstfile.name);

console.log(firstfile.addnumber(20 , 20));

var rs = firstfile.addnumber(age+10 , 10);
console.log(rs);