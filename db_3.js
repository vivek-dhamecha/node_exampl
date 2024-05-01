const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/NEW_DATABASE";
mongoose.connect(url);
const db = mongoose.connection;

db.on('connected' , ()=>{
    console.log("connected with database");
});

db.on('disconnected' , ()=>{
    console.log("dissconnected with databse");
});

db.on("error" , (error) =>{
    console.log("ERROR IS OCCURED" , error);
});


module.exports = {
    db}


