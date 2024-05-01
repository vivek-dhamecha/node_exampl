const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/my_new";

mongoose.connect(url);

const db = mongoose.connection;

db.on('connected' , ()=>{
    console.log("Connected");
});

db.on('disconnected' , ()=>{
    console.log("Connected");
});

db.on('error' , (er)=>{
    console.log(er);
});

module.exports = {
db
}