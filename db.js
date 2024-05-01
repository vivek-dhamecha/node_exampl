const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/person2";

mongoose.connect(url);

const db = mongoose.connection;


db.on('connected' , ()=>{
    console.log("You are connected with mongoDB");
});

db.on('error' , (error)=>{
    console.log(error);
})

db.on('disconnected' , ()=>{
    console.log("connection is dissconected");
})

module.exports={
    db
}