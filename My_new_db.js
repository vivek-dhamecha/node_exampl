const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/Detail_2";

mongoose.connect(url);
const db = mongoose.connection;

db.on('connected' , ()=>{
    console.log("You are connected with database")
});

db.on('disconnected' , ()=>{
    console.log("You are connected with database")
});

db.on('error' , (er)=>{
    console.log("ERROR : " , er)
});

module.exports =   db;