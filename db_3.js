const mongoose = require('mongoose');
// const url = "mongodb://localhost:27017/NEW_DATABASE";


//online link
const url ="mongodb+srv://vivek:vivek@cluster0.5k0uhzf.mongodb.net/"


// require('dotenv').config();
// const url = process.env.url;








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


