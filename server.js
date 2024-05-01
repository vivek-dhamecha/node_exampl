console.log("surver is running");

var fs = require("fs");
var os = require("os");

let user = os.userInfo();
console.log(user.username);

// let file = fs.

const name = function( a , b , n){
    result = a+b;
    n();
    console.log(result);
}
name(10 , 20 , n=()=>{
     console.log("my call back");
});
// console.log()
